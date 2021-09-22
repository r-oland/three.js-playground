// Components==============
import { useControls } from 'leva';
import React from 'react';
// =========================

export default function Cone({ textures }: { textures: any }) {
  const { position, size, height } = useControls('desert.cone', {
    position: [-0.53, 0.6, 0.52],
    size: 1.41,
    height: 1,
  });

  const tip = useControls('desert.cone.tip', {
    position: [-0.5356000000000006, 1.0478000000000007, 0.5189],
    size: 0.21729999999999988,
    height: 0.1943999999999999,
    color: '#fec34c',
    metalness: 1,
    roughness: 0.2,
  });

  return (
    <group>
      <mesh position={position}>
        <meshStandardMaterial {...textures} displacementScale={0} />
        <coneGeometry args={[size, height, 4]} />
      </mesh>
      <mesh position={tip.position}>
        <meshStandardMaterial
          normalMap={textures.normalMap}
          metalness={tip.metalness}
          roughness={tip.roughness}
          color={tip.color}
        />
        <coneGeometry args={[tip.size, tip.height, 4]} />
      </mesh>
    </group>
  );
}
