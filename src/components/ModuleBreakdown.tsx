import CRTFrame from './CRTFrame';

export default function ModuleBreakdown() {
  return (
    <section id="modules" className="section section-reveal">
      <div className="container">
        <div className="terminal-panel">
          <div className="terminal-panel__header">
            [ MODULE :: NICHEMAX v2.1 ]
          </div>
          <div className="terminal-panel__body">
            <p className="section__tag">[SYS.02] PRODUCT MODULE</p>
            <h2 className="section__title section__title--amber" data-scramble data-text="NICHEMAX">
              NICHEMAX
            </h2>

            <div className="data-row">
              <span className="data-row__key">CLASSIFICATION</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">AI-POWERED STYLE ANALYSIS ENGINE</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">PLATFORM</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value">iOS (iPHONE)</span>
            </div>
            <div className="data-row">
              <span className="data-row__key">STATUS</span>
              <span className="data-row__dots" aria-hidden="true" />
              <span className="data-row__value data-row__value--amber">PRE-LAUNCH :: COMING SOON</span>
            </div>

            <hr className="terminal-divider" />

            <p className="module__intro">
              NICHEMAX IS A NEURAL STYLE CLASSIFICATION SYSTEM DESIGNED TO ANALYZE
              VISUAL INPUT DATA AND GENERATE PERSONALIZED AESTHETIC PROFILES.
              THE USER PROVIDES PHOTOGRAPHIC DATA. THE SYSTEM PROCESSES THIS INPUT
              THROUGH MULTIPLE ANALYSIS LAYERS TO IDENTIFY STYLE PATTERNS, AESTHETIC
              PREFERENCES, AND NICHE CLASSIFICATIONS.
            </p>
            <p className="module__intro">
              THE RESULT: A COMPREHENSIVE STYLE BREAKDOWN THAT REVEALS THE USER'S
              UNIQUE AESTHETIC IDENTITY.
            </p>

            <CRTFrame label="NICHEMAX :: DISPLAY OUTPUT">
              <img src="/nichemax-icon.png" alt="NicheMAX application icon" />
            </CRTFrame>

            <hr className="terminal-divider" />

            <p className="section__tag">SUBSYSTEM ARCHITECTURE</p>
            <div className="terminal-divider-chars" aria-hidden="true">
              ═══════════════════════════════════════════════════════════════
            </div>

            <div className="module__grid">
              <div className="module__cell">
                <div className="module__cell-id">[01]</div>
                <div className="module__cell-name">PHOTO ANALYSIS ENGINE</div>
                <p className="module__cell-desc">
                  EXTRACTS STYLE MARKERS AND PATTERN INDICATORS FROM
                  USER-PROVIDED VISUAL DATA.
                </p>
                <div className="data-row">
                  <span className="data-row__key">ACCURACY</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">94.7%</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">PROCESSING</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">&lt;3 SEC</span>
                </div>
              </div>

              <div className="module__cell">
                <div className="module__cell-id">[02]</div>
                <div className="module__cell-name">NICHE CLASSIFIER</div>
                <p className="module__cell-desc">
                  MAPS EXTRACTED STYLE DATA TO KNOWN AESTHETIC CATEGORIES
                  IN THE CLASSIFICATION DATABASE.
                </p>
                <div className="data-row">
                  <span className="data-row__key">DATABASE</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">14,847</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">CATEGORIES</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">200+</span>
                </div>
              </div>

              <div className="module__cell">
                <div className="module__cell-id">[03]</div>
                <div className="module__cell-name">RECOMMENDATION CORE</div>
                <p className="module__cell-desc">
                  GENERATES PERSONALIZED STYLE SUGGESTIONS BASED ON
                  CLASSIFIED AESTHETIC PROFILE.
                </p>
                <div className="data-row">
                  <span className="data-row__key">OUTPUT</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">RANKED LIST</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">CONFIDENCE</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">HIGH</span>
                </div>
              </div>

              <div className="module__cell">
                <div className="module__cell-id">[04]</div>
                <div className="module__cell-name">PROFILE GENERATOR</div>
                <p className="module__cell-desc">
                  COMPILES FULL ANALYSIS INTO USER-READABLE FORMAT WITH
                  DETAILED STYLE BREAKDOWN REPORT.
                </p>
                <div className="data-row">
                  <span className="data-row__key">FORMAT</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">DETAILED BREAKDOWN</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">EXPORT</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">IN-APP DISPLAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
