// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { Suspense } from 'react';
import Loader from '../components/Loader';
import Item from '../components/textures/Item';
// =========================

export default function Textures() {
  useControls('lights', {}, { collapsed: true });

  const ambient = useControls('lights.ambient', {
    intensity: 2,
  });

  const dirLight = useControls('lights.directional light', {
    position: [-100, 6, -100],
    intensity: 1,
  });

  const pointer = useControls('lights.pointer light 1', {
    color: '#ff0e0e',
    intensity: { value: 4.6, min: 0, max: 5 },
    distance: 100,
    position: { value: [25, 25, 25], step: 1 },
  });

  return (
    <Canvas
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
      camera={{ fov: 45 }}
    >
      <Suspense fallback={<Loader />}>
        <Item />
      </Suspense>
      <ambientLight {...ambient} />
      <directionalLight {...dirLight} />
      <pointLight {...pointer} />
      <OrbitControls />
    </Canvas>
  );
}
