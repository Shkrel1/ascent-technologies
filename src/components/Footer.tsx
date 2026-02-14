export default function Footer() {
  return (
    <footer className="terminal-footer">
      <div className="container">
        <div className="terminal-footer__divider" aria-hidden="true">
          ════════════════════════════════════════════════════════════════
        </div>
        <div className="terminal-footer__content">
          <div className="terminal-footer__brand">
            ASCENT TECHNOLOGIES SYSTEMS v7.4.1
          </div>
          <div className="terminal-footer__copyright">
            &copy; {new Date().getFullYear()} WHITMORE FINANCIAL LLC d/b/a ASCENT TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
          <div className="terminal-footer__status">
            DISPLAY: PHOSPHOR CRT &nbsp;// &nbsp;RESOLUTION: ADAPTIVE &nbsp;// &nbsp;SIGNAL: LOCKED
          </div>
        </div>
      </div>
    </footer>
  );
}
