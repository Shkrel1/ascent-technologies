import WireframeDisplay from './WireframeDisplay';

export default function HeroTerminal() {
  return (
    <section className="hero">
      <WireframeDisplay />
      <div className="hero__terminal">
        <h1 className="hero__title">ASCENT TECHNOLOGIES</h1>
        <div className="hero__divider" aria-hidden="true">
          ════════════════════════════════════════════════════
        </div>
        <p className="hero__subtitle">
          ADVANCED SOFTWARE SYSTEMS :: MOBILE INTELLIGENCE DIVISION
        </p>

        <div className="hero__readout">
          <div className="data-row">
            <span className="data-row__key">STATUS</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value data-row__value--amber">OPERATIONAL</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">SECTOR</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value">ARTIFICIAL INTELLIGENCE</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">DIVISION</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value">MOBILE APPLICATIONS</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">HEADQUARTERS</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value">UNITED STATES</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">CLASSIFICATION</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value data-row__value--amber">ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
