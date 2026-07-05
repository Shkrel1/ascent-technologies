export default function SystemOverview() {
  return (
    <section id="overview" className="section section-reveal">
      <div className="container">
        <div className="terminal-panel">
          <div className="terminal-panel__header">
            [ SYSTEM :: OVERVIEW ]
          </div>
          <div className="terminal-panel__body">
            <p className="section__tag">[SYS.01] ORGANIZATION PROFILE</p>
            <h2 className="section__title" data-scramble data-text="SYSTEM OVERVIEW">
              SYSTEM OVERVIEW
            </h2>

            <p className="overview__text">
              ASCENT TECHNOLOGIES IS AN INDEPENDENT AI SOFTWARE STUDIO. IT
              DESIGNS, BUILDS, AND SHIPS ITS OWN AI-NATIVE APPS FOR MOBILE AND
              WEB — REAL PRODUCTS FOR REAL USERS, NOT DEMOS.
            </p>

            <p className="overview__text">
              <strong>FOUNDED AND RUN BY TOM</strong> — A FULL-STACK DEVELOPER
              WHO HANDLES EVERYTHING FROM DESIGN AND ENGINEERING TO AI AND
              RELEASE. THE STUDIO SHIPS FAST AND KEEPS PRODUCTS DELIBERATELY
              FOCUSED. OPEN TO COLLABORATIONS AND INVESTMENT.
            </p>

            <hr className="terminal-divider" />

            <div className="data-row">
              <span className="data-row__key">FOUNDER</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value data-row__value--amber">TOM</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">FOUNDED</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">2024</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">FOCUS</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">AI-NATIVE MOBILE &amp; WEB APPS</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">SHIPPED</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value data-row__value--amber">SUSAI · NICHEMAX · PAINTINGGUESSR</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">IN DEVELOPMENT</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">RAZOR</span>
            </div>

            <hr className="terminal-divider" />

            <p className="section__tag" style={{ marginTop: '1rem' }}>WHAT ASCENT DOES</p>
            <ul className="overview__capabilities">
              <li>NATIVE iOS APPS (REACT NATIVE · EXPO)</li>
              <li>WEB APPS (NEXT.JS · REACT)</li>
              <li>LLM &amp; REAL-TIME VOICE AI INTEGRATION</li>
              <li>COMPUTER VISION &amp; BEHAVIORAL ANALYSIS</li>
              <li>END-TO-END PRODUCT DELIVERY &amp; SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
