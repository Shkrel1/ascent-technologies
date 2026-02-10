export default function ContactRelay() {
  return (
    <section id="contact" className="section section-reveal">
      <div className="container">
        <div className="terminal-panel">
          <div className="terminal-panel__header">
            [ SYSTEM :: COMMUNICATION_RELAY ]
          </div>
          <div className="terminal-panel__body">
            <p className="section__tag">[SYS.04] TRANSMISSION INTERFACE</p>
            <h2 className="section__title" data-scramble data-text="COMMUNICATION RELAY">
              COMMUNICATION RELAY
            </h2>

            <p className="relay__text">
              TO ESTABLISH CONTACT WITH ASCENT TECHNOLOGIES, ROUTE YOUR
              TRANSMISSION THROUGH THE FOLLOWING SECURE CHANNEL:
            </p>

            <div className="relay__table">
              <div className="relay__table-header">
                <span>CHANNEL</span>
                <span>PROTOCOL</span>
                <span>STATUS</span>
              </div>
              <div className="relay__table-row">
                <span>EMAIL</span>
                <span>SMTP</span>
                <span className="status-active">[ACTIVE]</span>
              </div>
            </div>

            <a href="mailto:tom@ascenttechnologies.org" className="relay__email">
              tom@ascenttechnologies.org
            </a>

            <hr className="terminal-divider" />

            <div className="data-row">
              <span className="data-row__key">ORIGIN</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">UNITED STATES</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">RESPONSE WINDOW</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">&lt;24 STANDARD HOURS</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">ENCRYPTION</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">TLS 1.3</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">PRIORITY</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value data-row__value--amber">STANDARD</span>
            </div>

            <p className="relay__end blink-cursor">
              END TRANSMISSION ████
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
