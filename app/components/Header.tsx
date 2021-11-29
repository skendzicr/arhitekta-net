import React from 'react';
import { Link } from 'remix';
import Logo from './Logo';

const Header = () => (
    <header className="remix-app__header">
        <div className="container remix-app__header-content">
            <Link to="/" title="Remix" className="remix-app__header-home-link">
                <Logo />
            </Link>
            <nav aria-label="Main navigation" className="remix-app__header-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/projects">Projekti</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
