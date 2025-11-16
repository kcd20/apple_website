import type { JSX } from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';

const App = (): JSX.Element => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
