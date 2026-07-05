export default function TechSpecs() {
  return (
    <section id="stack" className="section section-reveal">
      <div className="container">
        <div className="terminal-panel">
          <div className="terminal-panel__header">
            [ SYSTEM :: CAPABILITIES ]
          </div>
          <div className="terminal-panel__body">
            <p className="section__tag">[SYS.03] HOW THINGS GET BUILT</p>
            <h2 className="section__title" data-scramble data-text="CAPABILITIES">
              CAPABILITIES
            </h2>

            <p className="overview__text">
              ASCENT IS A ONE-PERSON STUDIO THAT TAKES PRODUCTS FROM IDEA TO THE
              APP STORE — DESIGN, FRONTEND, BACKEND, AI, AND SHIPPING. THE STACK
              BELOW IS WHAT ACTUALLY POWERS THE PRODUCTS.
            </p>

            <div className="specs__block">
              <div className="specs__block-title">MOBILE</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">FRAMEWORK</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">REACT NATIVE · EXPO</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">TARGET</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">NATIVE iOS</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">MONETIZATION</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">IN-APP SUBSCRIPTIONS</span>
              </div>
            </div>

            <div className="specs__block">
              <div className="specs__block-title">WEB</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">FRAMEWORK</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">NEXT.JS · REACT</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">DEPLOY</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">EDGE / SERVERLESS</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">SEO</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value data-row__value--amber">STRUCTURED &amp; INDEXED</span>
              </div>
            </div>

            <div className="specs__block">
              <div className="specs__block-title">AI / INTELLIGENCE</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">LANGUAGE MODELS</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">LLM INTEGRATION</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">VOICE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">REAL-TIME VOICE AI</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">VISION</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">ON-DEVICE &amp; CLOUD ANALYSIS</span>
              </div>
            </div>

            <div className="specs__block">
              <div className="specs__block-title">BACKEND</div>
              <div className="specs__block-divider" aria-hidden="true">
                ═══════════════════════════════════════════════════
              </div>
              <div className="data-row">
                <span className="data-row__key">DATA</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">POSTGRES · REALTIME DB</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">AUTH &amp; STORAGE</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value">MANAGED / SERVERLESS</span>
              </div>
              <div className="data-row">
                <span className="data-row__key">PRIVACY</span>
                <span className="data-row__dots" aria-hidden="true" />
                <span className="data-row__value data-row__value--amber">DATA-MINIMAL BY DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
