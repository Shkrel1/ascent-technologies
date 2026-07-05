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
          INDEPENDENT AI SOFTWARE STUDIO :: FOUNDED BY TOM
        </p>

        <div className="hero__readout">
          <div className="data-row">
            <span className="data-row__key">STATUS</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value data-row__value--amber">OPERATIONAL</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">BUILDS</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value">AI-NATIVE MOBILE &amp; WEB APPS</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">SHIPPED</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value data-row__value--amber">SUSAI · NICHEMAX · PAINTINGGUESSR</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">NEXT</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value">RAZOR</span>
          </div>
          <div className="data-row">
            <span className="data-row__key">OPEN TO</span>
            <span className="data-row__dots" aria-hidden="true" />
            <span className="data-row__value data-row__value--amber">WORK · INVESTMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
