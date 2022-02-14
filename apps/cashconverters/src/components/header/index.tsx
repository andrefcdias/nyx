import { FunctionalComponent, h } from 'preact';
import { headerStyle, titleStyle } from './header.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={headerStyle}>
            <h1 class={titleStyle}>Cash Converters</h1>
        </header>
    );
};

export default Header;
