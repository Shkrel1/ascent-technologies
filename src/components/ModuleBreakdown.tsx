import CRTFrame from './CRTFrame';

export default function ModuleBreakdown() {
  return (
    <section id="products" className="section section-reveal">
      <div className="container">
        <div className="terminal-panel">
          <div className="terminal-panel__header">
            [ SYSTEM :: PRODUCT_INDEX ]
          </div>
          <div className="terminal-panel__body">
            <p className="section__tag">[SYS.02] SHIPPED &amp; IN DEVELOPMENT</p>
            <h2 className="section__title section__title--amber" data-scramble data-text="PRODUCTS">
              PRODUCTS
            </h2>

            <p className="module__intro">
              ASCENT BUILDS AND SHIPS ITS OWN AI-NATIVE APPS END TO END —
              CONCEPT, DESIGN, ENGINEERING, AND RELEASE. CURRENT PORTFOLIO BELOW.
            </p>

            <div className="terminal-divider-chars" aria-hidden="true">
              ═══════════════════════════════════════════════════════════════
            </div>

            {/* SusAI */}
            <div className="product-row">
              <div className="product-row__media">
                <CRTFrame label="SUSAI :: iOS">
                  <img src="/susai-icon.png" alt="SusAI app icon" />
                </CRTFrame>
              </div>
              <div className="product-row__body">
                <div className="product-row__head">
                  <span className="product-row__id">[01]</span>
                  <span className="product-row__name">SUSAI</span>
                  <span className="product-badge product-badge--live">● LIVE</span>
                </div>
                <p className="product-row__class">AI BEHAVIORAL TRUTH ANALYSIS :: iPHONE</p>
                <p className="product-row__desc">
                  A LIE-DETECTION APP FOR iPHONE. RECORD A CLIP AND SUSAI READS
                  MICRO-EXPRESSIONS, VOCAL STRESS, AND BODY LANGUAGE TO RETURN A
                  REAL-TIME TRUTH SCORE WITH A CONFIDENCE READOUT. FIRST SCAN IS FREE.
                </p>
                <div className="data-row">
                  <span className="data-row__key">PLATFORM</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">iOS · APP STORE</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">SIGNALS ANALYZED</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">FACE · VOICE · BODY</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">STATUS</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">RELEASED</span>
                </div>
                <a
                  className="product-link"
                  href="https://apps.apple.com/us/app/susai/id6761579885"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &gt; DOWNLOAD ON THE APP STORE
                </a>
              </div>
            </div>

            {/* NicheMAX */}
            <div className="product-row">
              <div className="product-row__media">
                <CRTFrame label="NICHEMAX :: iOS">
                  <img src="/nichemax-icon.png" alt="NicheMAX app icon" />
                </CRTFrame>
              </div>
              <div className="product-row__body">
                <div className="product-row__head">
                  <span className="product-row__id">[02]</span>
                  <span className="product-row__name">NICHEMAX</span>
                  <span className="product-badge product-badge--live">● LIVE</span>
                </div>
                <p className="product-row__class">AI STYLE &amp; AESTHETIC ANALYSIS :: iPHONE</p>
                <p className="product-row__desc">
                  DISCOVER YOUR AESTHETIC NICHE WITH AI-POWERED STYLE ANALYSIS.
                  UPLOAD YOUR PHOTOS AND NICHEMAX BREAKS DOWN YOUR PERSONA, GIVES
                  PERSONALIZED STYLE RECOMMENDATIONS, AND TRACKS YOUR
                  TRANSFORMATION OVER TIME.
                </p>
                <div className="data-row">
                  <span className="data-row__key">PLATFORM</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">iOS · APP STORE</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">OUTPUT</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">PERSONA &amp; STYLE PLAN</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">STATUS</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">RELEASED</span>
                </div>
                <a
                  className="product-link"
                  href="https://apps.apple.com/us/app/nichemax/id6758229691"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &gt; DOWNLOAD ON THE APP STORE
                </a>
              </div>
            </div>

            {/* PaintingGuessr */}
            <div className="product-row">
              <div className="product-row__media">
                <CRTFrame label="PAINTINGGUESSR :: WEB">
                  <span className="crt-frame__emoji" role="img" aria-label="Framed painting">🖼️</span>
                </CRTFrame>
              </div>
              <div className="product-row__body">
                <div className="product-row__head">
                  <span className="product-row__id">[03]</span>
                  <span className="product-row__name">PAINTINGGUESSR</span>
                  <span className="product-badge product-badge--live">● LIVE</span>
                </div>
                <p className="product-row__class">ART-HISTORY GUESSING GAME :: WEB</p>
                <p className="product-row__desc">
                  A FREE BROWSER GAME. SEE A FAMOUS PAINTING, THEN GUESS WHERE
                  IN THE WORLD AND IN WHAT YEAR IT WAS CREATED — FIVE ROUNDS,
                  SCORED ON DISTANCE AND YEARS OFF. RENAISSANCE TO MODERN DAY,
                  WITH A NEW DAILY CHALLENGE.
                </p>
                <div className="data-row">
                  <span className="data-row__key">PLATFORM</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">WEB · BROWSER</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">FORMAT</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">5 ROUNDS · DAILY</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">STATUS</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">RELEASED</span>
                </div>
                <a
                  className="product-link"
                  href="https://paintingguessr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &gt; PLAY AT PAINTINGGUESSR.COM
                </a>
              </div>
            </div>

            {/* Razor */}
            <div className="product-row">
              <div className="product-row__media">
                <CRTFrame label="RAZOR :: NO SIGNAL">
                  <span className="crt-static" aria-hidden="true" />
                </CRTFrame>
              </div>
              <div className="product-row__body">
                <div className="product-row__head">
                  <span className="product-row__id">[04]</span>
                  <span className="product-row__name">RAZOR</span>
                  <span className="product-badge product-badge--soon">◐ COMING SOON</span>
                </div>
                <p className="product-row__class">AI SALES ROLEPLAY TRAINER :: iPHONE</p>
                <p className="product-row__desc">
                  VOICE ROLEPLAY TRAINING FOR SALES PROFESSIONALS. REPS RUN LIVE
                  SPOKEN CALLS AGAINST AI PROSPECTS, EARN SKILL CARDS, PROGRESS
                  THROUGH BELTS, AND GET AI COACHING PLUS REAL-CALL REVIEW.
                  TRAIN. CLOSE. REPEAT.
                </p>
                <div className="data-row">
                  <span className="data-row__key">PLATFORM</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">iOS</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">TRAINS</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value">LIVE VOICE ROLEPLAY</span>
                </div>
                <div className="data-row">
                  <span className="data-row__key">STATUS</span>
                  <span className="data-row__dots" aria-hidden="true" />
                  <span className="data-row__value data-row__value--amber">IN DEVELOPMENT</span>
                </div>
                <span className="product-link product-link--muted">
                  &gt; LAUNCH PENDING ████
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
