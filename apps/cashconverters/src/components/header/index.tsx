import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { activeStyle, headerStyle, titleStyle } from './header.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={headerStyle}>
            <h1 class={titleStyle}>Preact App</h1>
            <nav>
                <Link activeClassName={activeStyle} href="/">
                    Home
                </Link>
                <Link activeClassName={activeStyle} href="/profile">
                    Me
                </Link>
                <Link activeClassName={activeStyle} href="/profile/john">
                    John
                </Link>
            </nav>
        </header>
    );
};

export default Header;
