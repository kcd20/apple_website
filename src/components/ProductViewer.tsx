/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import { type JSX } from 'react';
import { useMediaQuery } from 'react-responsive';

import useMacbookStore from '../store';

import ModelSwitcher from './three/ModelSwitcher';
import StudioLights from './three/StudioLights';

const ProductViewer = (): JSX.Element => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: '(max-width): 1024px' });
  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">
          Macbook Pro | Available in 14&quot; & 16&quot; in Space Gray and Dark
          colors
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                'bg-neutral-300',
                color === '#adb5db' && 'active'
              )}
              onClick={() => setColor('#adb5bd')}
            />
            <div
              className={clsx(
                'bg-neutral-900',
                color === '#2e2c2e' && 'active'
              )}
              onClick={() => setColor('#2e2c2e')}
            />
          </div>

          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
              onClick={() => setScale(0.06)}
            >
              14&quot;
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
              onClick={() => setScale(0.08)}
            >
              16&quot;
            </div>
          </div>
        </div>
      </div>

      <Canvas
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        id="canvas"
      >
        <StudioLights />

        <ModelSwitcher
          isMobile={isMobile}
          scale={isMobile ? scale - 0.03 : scale}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
