import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { crtAudio } from './audio';

gsap.registerPlugin(ScrollTrigger);

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>[]{}|/\\═─┌┐└┘├┤';

export function scrambleText(element: HTMLElement, duration = 700) {
  const finalText = element.getAttribute('data-text') || element.textContent || '';
  const length = finalText.length;
  const startTime = performance.now();

  function update(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const revealed = Math.floor(progress * length);

    let display = '';
    for (let i = 0; i < length; i++) {
      if (finalText[i] === ' ') {
        display += ' ';
      } else if (i < revealed) {
        display += finalText[i];
      } else {
        display += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
    }

    element.textContent = display;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = finalText;
    }
  }

  requestAnimationFrame(update);
}

export function initScrollAnimations() {
  const sections = document.querySelectorAll<HTMLElement>('.section-reveal');

  sections.forEach((section) => {
    // Gather content elements to stagger — the "lines" the terminal prints
    const panelEl = section.querySelector<HTMLElement>('.terminal-panel');
    const header = section.querySelector<HTMLElement>('.terminal-panel__header');
    const body = section.querySelector<HTMLElement>('.terminal-panel__body');
    const bodyChildren = body
      ? Array.from(body.children) as HTMLElement[]
      : [];

    // Hide everything initially
    if (panelEl) gsap.set(panelEl, { borderColor: 'transparent', background: 'transparent' });
    if (header) gsap.set(header, { opacity: 0 });
    bodyChildren.forEach((el) => gsap.set(el, { opacity: 0 }));

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        crtAudio.playDataBurst();

        // Panel border draws in
        if (panelEl) {
          gsap.to(panelEl, {
            borderColor: 'rgba(51, 255, 51, 0.25)',
            background: 'rgba(51, 255, 51, 0.03)',
            duration: 0.3,
            ease: 'none',
          });
        }

        // Header prints first
        if (header) {
          gsap.to(header, { opacity: 1, duration: 0.05, delay: 0.15, ease: 'none' });
        }

        // Each line pops in one at a time — like a terminal printing output
        bodyChildren.forEach((el, i) => {
          gsap.to(el, {
            opacity: 1,
            duration: 0.05,
            delay: 0.3 + i * 0.12,
            ease: 'none',
          });
        });

        // Scramble text headers
        const headers = section.querySelectorAll<HTMLElement>('[data-scramble]');
        headers.forEach((h, i) => {
          setTimeout(() => scrambleText(h, 600), 400 + i * 150);
        });
      },
    });
  });
}

export function destroyScrollAnimations() {
  ScrollTrigger.getAll().forEach((st) => st.kill());
}
