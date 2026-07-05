import { useState, useEffect, useRef, useCallback } from 'react';

interface BootLine {
  text: string;
  delay: number;
  speed?: number;
  color?: 'green' | 'amber' | 'dim' | 'bright';
}

const BOOT_LINES: BootLine[] = [
  { text: '', delay: 400, color: 'green' },
  { text: 'ASCENT TECHNOLOGIES SYSTEMS v7.4.1', delay: 0, speed: 20, color: 'amber' },
  { text: '═══════════════════════════════════', delay: 50, speed: 8, color: 'dim' },
  { text: '', delay: 200, color: 'green' },
  { text: 'INITIALIZING DISPLAY SUBSYSTEM...', delay: 0, speed: 22, color: 'green' },
  { text: '[OK] PHOSPHOR DISPLAY ONLINE', delay: 300, speed: 12, color: 'green' },
  { text: '[OK] SCANLINE GENERATOR ACTIVE', delay: 150, speed: 12, color: 'green' },
  { text: '[OK] NEURAL PROCESSING CORE LOADED', delay: 200, speed: 12, color: 'green' },
  { text: '[OK] PRODUCT DATABASE SYNCED', delay: 120, speed: 12, color: 'green' },
  { text: '[OK] PRODUCT INDEX :: SUSAI · RAZOR · PAINTINGGUESSR', delay: 180, speed: 12, color: 'amber' },
  { text: '[OK] COMMUNICATION RELAY ESTABLISHED', delay: 140, speed: 12, color: 'green' },
  { text: '[OK] ALL SYSTEMS NOMINAL', delay: 200, speed: 12, color: 'bright' },
  { text: '', delay: 500, color: 'green' },
  { text: '> INTERFACE READY', delay: 0, speed: 35, color: 'bright' },
  { text: '> LOADING PRIMARY DISPLAY...', delay: 200, speed: 30, color: 'green' },
];

const COLOR_CLASS: Record<string, string> = {
  green: '',
  amber: 'boot-line--amber',
  dim: 'boot-line--dim',
  bright: 'boot-line--bright',
};

interface Props {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: Props) {
  const [completedLines, setCompletedLines] = useState<{ text: string; color: string }[]>([]);
  const [typingText, setTypingText] = useState('');
  const [typingColor, setTypingColor] = useState('');
  const [exiting, setExiting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const stableOnComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    // Skip boot on reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stableOnComplete();
      return;
    }

    // Skip boot if already seen this session
    if (sessionStorage.getItem('ascent-booted')) {
      stableOnComplete();
      return;
    }

    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;

    function processLine() {
      if (cancelled || lineIdx >= BOOT_LINES.length) {
        if (!cancelled) {
          sessionStorage.setItem('ascent-booted', '1');
          timeoutRef.current = setTimeout(() => {
            setExiting(true);
            timeoutRef.current = setTimeout(stableOnComplete, 600);
          }, 500);
        }
        return;
      }

      const line = BOOT_LINES[lineIdx];
      const colorClass = COLOR_CLASS[line.color || 'green'] || '';

      timeoutRef.current = setTimeout(() => {
        if (cancelled) return;

        if (!line.text) {
          setCompletedLines((prev) => [...prev, { text: '', color: colorClass }]);
          lineIdx++;
          processLine();
          return;
        }

        setTypingColor(colorClass);
        charIdx = 0;
        typeChar(line, colorClass);
      }, line.delay);
    }

    function typeChar(line: BootLine, colorClass: string) {
      if (cancelled) return;
      const speed = line.speed || 20;

      if (charIdx <= line.text.length) {
        setTypingText(line.text.substring(0, charIdx));
        charIdx++;
        timeoutRef.current = setTimeout(() => typeChar(line, colorClass), speed);
      } else {
        setCompletedLines((prev) => [...prev, { text: line.text, color: colorClass }]);
        setTypingText('');
        lineIdx++;
        processLine();
      }
    }

    processLine();

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [stableOnComplete]);

  return (
    <div className={`boot-screen${exiting ? ' boot-screen--exit' : ''}`} aria-live="polite">
      <div className="boot-content">
        {completedLines.map((line, i) => (
          <div key={i} className={`boot-line ${line.color}`}>
            {line.text}
          </div>
        ))}
        {typingText !== '' && (
          <div className={`boot-line ${typingColor}`}>
            {typingText}
            <span className="boot-cursor">█</span>
          </div>
        )}
        {typingText === '' && !exiting && completedLines.length === 0 && (
          <div className="boot-line">
            <span className="boot-cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
}
