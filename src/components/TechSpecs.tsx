export default function TechSpecs() {
  return (
    <section id="specs" className="section section-reveal">
      <div className="container">
        <div className="terminal-panel">
          <div className="terminal-panel__header">
            [ SYSTEM :: TECHNICAL_SPECIFICATIONS ]
          </div>
          <div className="terminal-panel__body">
            <p className="section__tag">[SYS.03] DATA SHEET</p>
            <h2 className="section__title" data-scramble data-text="TECHNICAL SPECIFICATIONS">
              TECHNICAL SPECIFICATIONS
            </h2>

            <div className="specs__block">
              <div className="specs__block-title">CORE ENGINE</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">ENGINE TYPE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">NEURAL NETWORK</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">ARCHITECTURE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">MULTI-LAYER CNN</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">INPUT FORMAT</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">JPEG / PNG / HEIC</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">MAX INPUT SIZE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">4096 x 4096 PX</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">PROCESSING TIME</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value data-row__value--amber">&lt;3 SECONDS</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">ACCURACY RATING</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value data-row__value--amber">94.7%</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">CONFIDENCE THRESHOLD</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">0.85</span>
              </div>
            </div>

            <div className="specs__block">
              <div className="specs__block-title">CLASSIFICATION DATABASE</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">TOTAL ENTRIES</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value data-row__value--amber">14,847</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">STYLE CATEGORIES</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">200+</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">TREND COVERAGE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">GLOBAL</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">UPDATE FREQUENCY</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">CONTINUOUS LEARNING</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">LAST SYNC</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">[CURRENT]</span>
              </div>
            </div>

            <div className="specs__block">
              <div className="specs__block-title">PLATFORM REQUIREMENTS</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">TARGET OS</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">iOS 16.0+</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">DEVICE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">iPHONE</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">APP SIZE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">&lt;50 MB</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">NETWORK</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">REQUIRED FOR ANALYSIS</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">OFFLINE FEATURES</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">PROFILE VIEWING</span>
              </div>
            </div>

            <div className="specs__block">
              <div className="specs__block-title">DATA HANDLING</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">PHOTO STORAGE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">NONE (IN-MEMORY ONLY)</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">USER DATA</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">ENCRYPTED (AES-256)</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">PRIVACY RATING</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value data-row__value--amber">MAXIMUM</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">THIRD-PARTY SHARING</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">NONE</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">GDPR COMPLIANT</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">YES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
