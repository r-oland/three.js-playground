// Components==============
import { useControls } from 'leva';
import React from 'react';
// =========================

export default function Circle() {
  const { position, radius, segments, color, wireframe } = useControls(
    'circle',
    {
      position: [0, 0, 0],
      radius: { value: 10, min: 0.1, max: 20 },
      segments: { value: 6, min: 0.1, max: 100 },
      color: '#95d1c3',
      wireframe: false,
    },
    { collapsed: true }
  );

  return (
    <mesh position={position} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <meshStandardMaterial color={color} wireframe={wireframe} />
      <circleGeometry args={[radius, segments]} />
    </mesh>
  );
}
