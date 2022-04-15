import type { Component } from 'solid-js';
import { app } from './App.css';
import Header from './Header';

const App: Component = () => {
  return (
    <div class={app}>
      <Header />
      <main>main pog</main>
    </div>
  );
};

export default App;
