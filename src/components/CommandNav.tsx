import { useState } from 'react';
import { scrollTo } from '../lib/smooth-scroll';
import { crtAudio } from '../lib/audio';
import SoundToggle from './SoundToggle';

const NAV_ITEMS = [
  { label: 'OVERVIEW', target: '#overview' },
  { label: 'PRODUCTS', target: '#products' },
  { label: 'STACK', target: '#stack' },
  { label: 'CONTACT', target: '#contact' },
];

export default function CommandNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target: string) => {
    crtAudio.playKeyClick();
    scrollTo(target);
    setMenuOpen(false);
  };

  return (
    <nav className="command-nav" role="navigation" aria-label="Main navigation">
      <div className="command-nav__inner">
        <button
          className="command-nav__logo"
          onClick={() => {
            crtAudio.playKeyClick();
            scrollTo(0);
          }}
          aria-label="Scroll to top"
        >
          ASCENT TECHNOLOGIES
        </button>

        <div className="command-nav__right" style={{ display: 'flex', alignItems: 'center' }}>
          <ul className={`command-nav__links${menuOpen ? ' command-nav__links--open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.target}>
                <button
                  className="command-nav__link"
                  onClick={() => handleNav(item.target)}
                  onMouseEnter={() => crtAudio.playKeyClick()}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <SoundToggle />
            </li>
          </ul>

          <button
            className="command-nav__toggle"
            onClick={() => {
              crtAudio.playKeyClick();
              setMenuOpen(!menuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '[X]' : '[≡]'}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`nav-overlay${menuOpen ? ' nav-overlay--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </nav>
  );
}
