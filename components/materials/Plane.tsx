// Components==============
import { useControls } from 'leva';
import React from 'react';
import { Material } from 'three';
// =========================

export default function Plane({ material }: { material: Material }) {
  const { width, height, rotation } = useControls('desert.plane', {
    rotation: [Math.PI * 1.5, 0, 0],
    width: 5,
    height: 5,
  });

  return (
    <mesh rotation={rotation} material={material}>
      <planeGeometry args={[width, height]} />
    </mesh>
  );
}
