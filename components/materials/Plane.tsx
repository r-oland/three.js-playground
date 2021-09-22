// Components==============
import { useControls } from 'leva';
import React from 'react';
// =========================

export default function Plane({ textures }: { textures: any }) {
  const { width, height, rotation, color } = useControls('desert.plane', {
    rotation: [Math.PI * 1.5, 0, 0],
    width: 8,
    height: 8,
    color: '#ffedcc',
  });

  return (
    <mesh rotation={rotation}>
      <meshStandardMaterial
        {...textures}
        displacementScale={0.25}
        color={color}
        normalScale={[0.5, 0.5]}
      />
      <planeGeometry args={[width, height, 100, 100]} />
    </mesh>
  );
}
