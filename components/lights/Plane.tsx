// Components==============
import { useControls } from 'leva';
import React from 'react';
// =========================

export default function Plane() {
  const { position, width, height, color } = useControls('plane', {
    position: [0, 0, 0],
    width: { value: 10, min: 0.1, max: 20 },
    height: { value: 7.5, min: 0.1, max: 20 },
    color: '#95d1c3',
  });

  return (
    <mesh position={position} rotation={[-Math.PI * 0.5, 0, 0]}>
      <meshStandardMaterial color={color} />
      <planeGeometry args={[width, height]} />
    </mesh>
  );
}
