import type { Component } from 'solid-js';
import { header } from './Header.css';

const Header: Component = () => {
  return (
    <header class={header}>
      Vroomdle
    </header>
  );
};

export default Header;
