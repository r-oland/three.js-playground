// Components==============
import { useControls } from 'leva';
import React, { useContext } from 'react';
import { MaterialsContext } from '../../pages/materials';
// =========================

export default function Plane() {
  const { width, height, rotation, color } = useControls('desert.plane', {
    rotation: [Math.PI * 1.5, 0, 0],
    width: 8,
    height: 8,
    color: '#ffedcc',
  });

  const { textures } = useContext(MaterialsContext);

  return (
    <mesh rotation={rotation}>
      <meshStandardMaterial
        {...textures}
        displacementScale={0.25}
        color={color}
        // @ts-ignore
        normalScale={[0.5, 0.5]}
      />
      <planeGeometry args={[width, height, 100, 100]} />
    </mesh>
  );
}
