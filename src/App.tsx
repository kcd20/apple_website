import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import type { JSX } from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ProductViewer from './components/ProductViewer';
import Showcase from './components/Showcase';

gsap.registerPlugin(ScrollTrigger);

const App = (): JSX.Element => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
};

export default App;
