// Components==============
import { useControls } from 'leva';
import React from 'react';
import { Material } from 'three';
// =========================

export default function Cone({ material }: { material: Material }) {
  const { position, size, height } = useControls('desert.cone', {
    position: [-0.53, 0.5, 0.52],
    size: 1.41,
    height: 1,
  });

  return (
    <mesh position={position} material={material}>
      <coneGeometry args={[size, height, 4]} />
    </mesh>
  );
}
