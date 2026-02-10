class CRTAudio {
  private ctx: AudioContext | null = null;
  private enabled: boolean;
  private humNodes: { osc: OscillatorNode; gain: GainNode }[] = [];

  constructor() {
    this.enabled = localStorage.getItem('crt-sound') === 'on';
  }

  private ensureContext(): AudioContext | null {
    if (!this.ctx) {
      try {
        this.ctx = new AudioContext();
      } catch {
        return null;
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  toggle(): boolean {
    this.enabled = !this.enabled;
    localStorage.setItem('crt-sound', this.enabled ? 'on' : 'off');
    if (this.enabled) {
      this.startHum();
    } else {
      this.stopHum();
    }
    return this.enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  private startHum() {
    const ctx = this.ensureContext();
    if (!ctx || this.humNodes.length > 0) return;

    // 120Hz mains hum (audible on most speakers)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.value = 120;
    gain1.gain.value = 0.07;
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();

    // 240Hz harmonic
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.value = 240;
    gain2.gain.value = 0.03;
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start();

    // High-frequency CRT flyback whine
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'sine';
    osc3.frequency.value = 8000;
    gain3.gain.value = 0.003;
    osc3.connect(gain3);
    gain3.connect(ctx.destination);
    osc3.start();

    this.humNodes = [
      { osc: osc1, gain: gain1 },
      { osc: osc2, gain: gain2 },
      { osc: osc3, gain: gain3 },
    ];
  }

  private stopHum() {
    this.humNodes.forEach(({ osc, gain }) => {
      try { osc.stop(); } catch { /* already stopped */ }
      osc.disconnect();
      gain.disconnect();
    });
    this.humNodes = [];
  }

  playKeyClick() {
    if (!this.enabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 1200;
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  }

  playDataBurst() {
    if (!this.enabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }

  destroy() {
    this.stopHum();
    this.ctx?.close();
    this.ctx = null;
  }
}

export const crtAudio = new CRTAudio();
