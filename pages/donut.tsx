// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react';
import Group from '../components/donut/Group';
// =========================

export default function BasicBox() {
  useControls('lights', {}, { collapsed: true });

  const ambient = useControls('lights.ambient', {
    intensity: 0.1,
  });

  const dirLight = useControls('lights.directional light', {
    position: [0, 10, 0],
    intensity: 0.4,
  });

  const pointer1 = useControls('lights.pointer light 1', {
    color: '#fff',
    intensity: { value: 1, min: 0, max: 5 },
    distance: 100,
    position: { value: [25, 25, 25], step: 1 },
  });

  const pointer2 = useControls('lights.pointer light 2', {
    color: '#356ed1',
    intensity: { value: 1, min: 0, max: 5 },
    distance: 100,
    position: { value: [-25, -25, -25], step: 1 },
  });

  return (
    // Fov between 45 to 75 -> 75 is a lot
    <Canvas
      // perspective settings
      camera={{ position: [2, 0, 2], fov: 45, far: 1000, near: 0.1 }}
      // orthographic settings
      // camera={{
      //   zoom: 200,
      // }}
      // orthographic
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
    >
      <Group />
      <ambientLight {...ambient} />
      <directionalLight {...dirLight} />
      <pointLight {...pointer1} />
      <pointLight {...pointer2} />
      <OrbitControls />
    </Canvas>
  );
}
