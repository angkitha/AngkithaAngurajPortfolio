import { Link } from 'react-router-dom';
import './HeaderNav.css';

type HeaderNavProps = {
  activeTab?: 'home' | 'about';
};

export function HeaderNav({ activeTab }: HeaderNavProps) {
  return (
    <header className="header-nav">
      <Link
        to="/"
        className={`header-nav__tab ${activeTab === 'home' ? 'header-nav__tab--active' : 'header-nav__tab--inactive'}`}
        aria-current={activeTab === 'home' ? 'page' : undefined}
      >
        HOME
      </Link>
      <Link
        to="/about"
        className={`header-nav__tab ${activeTab === 'about' ? 'header-nav__tab--active' : 'header-nav__tab--inactive'}`}
        aria-current={activeTab === 'about' ? 'page' : undefined}
      >
        ABOUT ME
      </Link>
    </header>
  );
}
