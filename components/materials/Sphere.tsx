// Components==============
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function Sphere() {
  const { position, size } = useControls('sun', {
    position: [1.2, 1.6, -0.9],
    size: 0.8,
  });

  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * 2) * 0.1;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[size]} />
      <meshPhongMaterial color="red" />
    </mesh>
  );
}
