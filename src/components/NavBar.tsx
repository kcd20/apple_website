import type { JSX } from 'react';

import { navLinks } from '../constants';

const NavBar = (): JSX.Element => {
  return (
    <header>
      <nav>
        <img alt="Apple logo" src="/logo.svg" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button type="button">
            <img alt="Search" src="/search.svg" />
          </button>
          <button type="button">
            <img alt="Cart" src="/cart.svg" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
