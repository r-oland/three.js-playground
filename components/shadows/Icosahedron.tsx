// Components==============
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function Icosahedron() {
  const { position, radius, detail, color, wireframe } = useControls(
    'icosahedron',
    {
      position: [0, 1.5, 0],
      radius: { value: 1, min: 0, max: 20 },
      detail: { value: 0, min: 0, max: 10, step: 1 },
      color: '#148099',
      wireframe: false,
    },
    { collapsed: true }
  );

  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const scale = 1.25 + Math.sin(clock.getElapsedTime()) * 0.1;

    ref.current.scale.x = scale;
    ref.current.scale.y = scale;
    ref.current.scale.z = scale;

    ref.current.rotation.z = clock.getElapsedTime() * 0.25;
    ref.current.rotation.x = clock.getElapsedTime() * 0.05;
  });

  return (
    <mesh position={position} ref={ref} castShadow>
      <icosahedronGeometry args={[radius, detail]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}
