// Components==============
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function Item() {
  const { position, radius, segments } = useControls('item', {
    position: [0, 0, 0],
    radius: { value: 1.25, min: 0.1, max: 5 },
    segments: { value: 60, min: 10, max: 100 },
  });

  const ref = useRef<Mesh>(null);

  // rock
  const texture = useTexture({
    map: 'rock/Rock035_2K_Color.jpg',
    displacementMap: 'rock/Rock035_2K_Displacement.jpg',
    normalMap: 'rock/Rock035_2K_NormalGL.jpg',
    roughnessMap: 'rock/Rock035_2K_Roughness.jpg',
    aoMap: 'rock/Rock035_2K_AmbientOcclusion.jpg',
  });

  //   // marble
  //   const texture = useTexture({
  //     map: 'marble/Marble016_4K_Color.jpg',
  //     // displacementMap: 'marble/Marble016_4K_Displacement.jpg',
  //     normalMap: 'marble/Marble016_4K_NormalDX.jpg',
  //     roughnessMap: 'marble/Marble016_4K_Roughness.jpg',
  //   });

  useFrame(({ clock }) => {
    if (!ref.current || !texture.map) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.05;
    ref.current.rotation.y = clock.getElapsedTime() * 0.025;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[radius, segments, segments / 2]} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <meshStandardMaterial {...texture} displacementScale={0.3} />
    </mesh>
  );
}
