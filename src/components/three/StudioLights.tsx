import { Environment, Lightformer } from '@react-three/drei';
import type { JSX } from 'react';

const StudioLights = (): JSX.Element => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            rotateY={Math.PI / 2}
            scale={10}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            rotateY={Math.PI / 2}
            scale={10}
          />
        </group>
      </Environment>
      <spotLight
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
        position={[0, 15, 5]}
      />
      <spotLight
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
        position={[0, -25, 10]}
      />
      <spotLight
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 3}
        position={[0, 15, 5]}
      />
    </group>
  );
};

export default StudioLights;
