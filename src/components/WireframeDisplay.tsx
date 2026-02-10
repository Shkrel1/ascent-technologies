import { useRef, useEffect } from 'react';

// ── Simplified continent map ───────────────────────────
// Returns 0–1 land brightness at a given latitude/longitude.
// Uses soft elliptical blobs for each major landmass.

// Sharp-edged elliptical blob — hard threshold with a narrow feather band
function blob(la: number, lo: number, cLa: number, cLo: number, rLa: number, rLo: number): number {
  const dLa = (la - cLa) / rLa;
  const dLo = (lo - cLo) / rLo;
  const d = dLa * dLa + dLo * dLo;
  if (d >= 1) return 0;
  // Smoothstep from 1.0 down to 0.7 — sharp edge with slight feather
  if (d < 0.6) return 1;
  return 1 - ((d - 0.6) / 0.4) * ((d - 0.6) / 0.4);
}

function landBrightness(lat: number, lon: number): number {
  const lo = ((lon % 360) + 540) % 360 - 180;
  return Math.max(
    // North America
    blob(lat, lo, 52, -105, 16, 22),
    blob(lat, lo, 42, -90, 12, 18),
    blob(lat, lo, 34, -100, 8, 14),
    blob(lat, lo, 58, -120, 10, 14),
    blob(lat, lo, 28, -82, 6, 8),       // Florida
    // Central America
    blob(lat, lo, 18, -96, 8, 8),
    blob(lat, lo, 12, -84, 5, 6),
    // South America
    blob(lat, lo, -4, -60, 12, 14),
    blob(lat, lo, -18, -52, 14, 10),
    blob(lat, lo, -32, -62, 10, 8),
    blob(lat, lo, 4, -72, 6, 6),        // Colombia/Venezuela
    // Europe
    blob(lat, lo, 48, 8, 8, 12),
    blob(lat, lo, 55, 14, 6, 10),
    blob(lat, lo, 58, 28, 8, 16),       // Scandinavia/Baltic
    blob(lat, lo, 40, 2, 5, 8),         // Iberia
    blob(lat, lo, 42, 14, 5, 6),        // Italy region
    blob(lat, lo, 52, 40, 8, 14),       // Eastern Europe
    // Africa
    blob(lat, lo, 14, 20, 16, 18),
    blob(lat, lo, -4, 26, 12, 10),
    blob(lat, lo, -22, 28, 10, 10),
    blob(lat, lo, 30, 8, 6, 12),        // North Africa
    blob(lat, lo, 4, 38, 8, 6),         // Horn of Africa
    // Middle East
    blob(lat, lo, 30, 44, 8, 12),
    blob(lat, lo, 24, 50, 5, 6),        // Arabian Peninsula
    // Asia
    blob(lat, lo, 52, 70, 14, 24),      // Russia/Central Asia
    blob(lat, lo, 62, 90, 10, 28),      // Siberia
    blob(lat, lo, 36, 105, 12, 16),     // China
    blob(lat, lo, 28, 84, 8, 10),       // Tibet/Nepal
    blob(lat, lo, 18, 78, 10, 6),       // India
    blob(lat, lo, 8, 80, 5, 4),         // Sri Lanka/Southern India
    blob(lat, lo, 36, 128, 6, 6),       // Korea
    blob(lat, lo, 36, 138, 8, 4),       // Japan
    blob(lat, lo, 4, 108, 10, 12),      // Southeast Asia
    blob(lat, lo, -2, 118, 6, 10),      // Indonesia
    // Australia
    blob(lat, lo, -25, 134, 10, 16),
    blob(lat, lo, -18, 144, 6, 6),      // Queensland
    // Greenland
    blob(lat, lo, 72, -42, 8, 12),
    // Antarctica hints
    blob(lat, lo, -78, 0, 8, 60),
  );
}

// ── Component ──────────────────────────────────────────

export default function WireframeDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cssW = 0, cssH = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      cssW = rect.width;
      cssH = rect.height;
      canvas!.width = cssW * dpr;
      canvas!.height = cssH * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);

    const LINE_COUNT = 90;
    const GRAD_STOPS = 16;
    const DEG = 180 / Math.PI;

    function draw(time: number) {
      if (!ctx) return;
      const w = cssW, h = cssH;
      if (w === 0 || h === 0) { rafRef.current = requestAnimationFrame(draw); return; }

      const cx = w / 2;
      const cy = h * 0.48;
      const globeR = Math.min(w, h) * 0.40;
      const isMobile = w < 500;

      // ── Clear with slight persistence for phosphor trail ──
      ctx.fillStyle = 'rgba(10, 10, 10, 0.18)';
      ctx.fillRect(0, 0, w, h);

      // ── Rotation — slow continuous spin ──
      const rotDeg = reduced ? 0 : time * 0.008; // degrees per ms — full rotation ~45s

      // ── Ambient globe glow (replaces per-line shadowBlur) ──
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, globeR);
      glowGrad.addColorStop(0, 'rgba(51, 255, 51, 0.04)');
      glowGrad.addColorStop(0.7, 'rgba(51, 255, 51, 0.015)');
      glowGrad.addColorStop(1, 'rgba(51, 255, 51, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
      ctx.fill();

      // ── Draw scan lines across the globe ──
      ctx.lineCap = 'butt';

      for (let i = 0; i < LINE_COUNT; i++) {
        const t = i / (LINE_COUNT - 1);
        const ny = t * 2 - 1; // -1 to +1

        // Globe circle: half-width at this y
        const r = Math.sqrt(Math.max(0, 1 - ny * ny));
        if (r < 0.02) continue;

        const lineY = cy + ny * globeR;
        const lineLeft = cx - r * globeR;
        const lineRight = cx + r * globeR;

        // Latitude in degrees
        const lat = -ny * 90; // top of canvas = north pole

        // Vertical fade — slight dimming at poles
        const poleFade = Math.pow(r, 0.3);

        // ── Build gradient with continent brightness ──
        const grad = ctx.createLinearGradient(lineLeft, lineY, lineRight, lineY);

        for (let s = 0; s <= GRAD_STOPS; s++) {
          const frac = s / GRAD_STOPS;
          const sx = frac * 2 - 1; // -1 to +1 within this line

          // Orthographic projection → longitude
          const sinLon = Math.max(-0.999, Math.min(0.999, sx));
          const lon = Math.asin(sinLon) * DEG + rotDeg;

          // Land brightness at this point
          const land = landBrightness(lat, lon);

          // Limb darkening — edges of the globe are dimmer
          const limbDark = Math.sqrt(Math.max(0, 1 - sx * sx));

          // Final alpha: ocean is dim, land is distinctly brighter
          const ocean = 0.03;
          const landAlpha = 0.32;
          const alpha = (ocean + land * landAlpha) * limbDark * poleFade;

          grad.addColorStop(frac, `rgba(51, 255, 51, ${alpha})`);
        }

        // Line width: slightly thicker at equator
        const lineWidth = (0.5 + 0.6 * poleFade) * (isMobile ? 0.7 : 1);

        ctx.strokeStyle = grad;
        ctx.lineWidth = lineWidth;

        ctx.beginPath();
        ctx.moveTo(lineLeft, lineY);
        ctx.lineTo(lineRight, lineY);
        ctx.stroke();
      }

      // ── Faint grid lines — latitude rings for extra 3D cue ──
      ctx.shadowBlur = 0;
      const gridLats = [-60, -30, 0, 30, 60];
      for (const latDeg of gridLats) {
        const ny = -latDeg / 90;
        const r = Math.sqrt(Math.max(0, 1 - ny * ny));
        if (r < 0.05) continue;

        const lineY = cy + ny * globeR;
        ctx.strokeStyle = `rgba(51, 255, 51, 0.025)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(cx - r * globeR, lineY);
        ctx.lineTo(cx + r * globeR, lineY);
        ctx.stroke();
      }

      // ── Globe outline — very faint circle ──
      ctx.strokeStyle = 'rgba(51, 255, 51, 0.04)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
      ctx.stroke();

      if (!reduced) {
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      obs.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="globe-bg" aria-hidden="true" />;
}
