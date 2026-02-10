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
              ASCENT TECHNOLOGIES IS A SOFTWARE DEVELOPMENT ENTITY SPECIALIZING
              IN INTELLIGENT MOBILE APPLICATIONS. OUR SYSTEMS LEVERAGE NEURAL
              PROCESSING ARCHITECTURES TO ANALYZE, CLASSIFY, AND GENERATE
              ACTIONABLE INSIGHTS FROM COMPLEX DATA INPUTS.
            </p>

            <p className="overview__text">
              <strong>PRIMARY DIRECTIVE:</strong> DEVELOP APPLICATIONS THAT AUGMENT
              HUMAN DECISION-MAKING THROUGH ADVANCED PATTERN RECOGNITION AND
              AI-DRIVEN CLASSIFICATION ALGORITHMS.
            </p>

            <hr className="terminal-divider" />

            <div className="data-row">
              <span className="data-row__key">OPERATIONAL STATUS</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value data-row__value--amber">ACTIVE</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">FOUNDED</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">2024</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">SECTOR</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">MOBILE AI</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">PRIMARY PRODUCT</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value data-row__value--amber">NICHEMAX</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">PLATFORM</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">iOS</span>
            </div>

            <hr className="terminal-divider" />

            <p className="section__tag" style={{ marginTop: '1rem' }}>CORE CAPABILITIES</p>
            <ul className="overview__capabilities">
              <li>NEURAL NETWORK INTEGRATION</li>
              <li>COMPUTER VISION PROCESSING</li>
              <li>REAL-TIME STYLE ANALYSIS</li>
              <li>PERSONALIZED RECOMMENDATION ENGINES</li>
              <li>iOS NATIVE APPLICATION DEVELOPMENT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
