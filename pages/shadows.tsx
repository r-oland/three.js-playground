// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react';
import Circle from '../components/shadows/Circle';
import DLight from '../components/shadows/DirectionalLight';
import Icosahedron from '../components/shadows/Icosahedron';
import PLight from '../components/shadows/PointLight';
import SLight from '../components/shadows/SpotLight';
// =========================

export default function shadows() {
  const { directional, spot, point } = useControls('s-lights', {
    directional: false,
    spot: false,
    point: true,
  });

  const ambient = useControls('s-lights.ambient', {
    color: '#fefefe',
    intensity: 0.35,
  });

  return (
    <Canvas
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
      camera={{ fov: 45, position: [0, 8, 8] }}
      // shadows
    >
      <ambientLight args={[ambient.color, ambient.intensity]} />
      {directional && <DLight />}
      {spot && <SLight />}
      {point && <PLight />}
      <Circle />
      <Icosahedron />
      <OrbitControls />
    </Canvas>
  );
}
