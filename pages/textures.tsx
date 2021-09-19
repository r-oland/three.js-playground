// Components==============
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react';
// =========================

export default function Textures() {
  useControls('lights', {}, { collapsed: true });

  const ambient = useControls('lights.ambient', {
    intensity: 0.1,
  });

  const dirLight = useControls('lights.directional light', {
    position: [0, 10, 0],
    intensity: 0.4,
  });

  const pointer = useControls('lights.pointer light 1', {
    color: '#fff',
    intensity: { value: 1, min: 0, max: 5 },
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
    >
      <ambientLight {...ambient} />
      <directionalLight {...dirLight} />
      <pointLight {...pointer} />
    </Canvas>
  );
}
