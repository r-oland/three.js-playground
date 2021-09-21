// Components==============
import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { Suspense, useMemo } from 'react';
import { MeshStandardMaterial } from 'three';
import Loader from '../components/Loader';
import Cone from '../components/materials/Cone';
import Plane from '../components/materials/Plane';
import Sphere from '../components/materials/Sphere';
// =========================

const Content = () => {
  const { map, normalMap, roughnessMap, aoMap } = useTexture({
    map: '/sand/sand_Color.jpg',
    normalMap: '/sand/sand_NormalDX.jpg',
    roughnessMap: '/sand/sand_Roughness.jpg',
    aoMap: '/sand/sand_AmbientOcclusion.jpg',
  });

  const { color } = useControls('desert', { color: '#baad89' });

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color,
        map,
        normalMap,
        roughnessMap,
        aoMap,
      }),
    [color]
  );

  return (
    <>
      {!!material && <Plane material={material} />}
      {!!material && <Cone material={material} />}
    </>
  );
};

export default function materials() {
  useControls('m-lights', {}, { collapsed: true });

  const ambient = useControls('m-lights.ambient', {
    intensity: 0.1,
  });

  const dirLight = useControls('m-lights.directional light', {
    position: [1, 2, -6],
    intensity: 1,
  });

  const pointer1 = useControls('m-lights.pointer light 1', {
    color: '#d87676',
    intensity: { value: 1, min: 0, max: 5 },
    distance: 100,
    position: { value: [25, 25, 25], step: 1 },
  });

  const pointer2 = useControls('m-lights.pointer light 2', {
    color: '#356ed1',
    intensity: { value: 1, min: 0, max: 5 },
    distance: 100,
    position: { value: [-25, -25, -25], step: 1 },
  });

  return (
    <Canvas
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
      camera={{ fov: 45, position: [0, 1, 5] }}
    >
      <Suspense fallback={<Loader />}>
        <Content />
      </Suspense>
      <Sphere />
      <ambientLight {...ambient} />
      <directionalLight {...dirLight} />
      <pointLight {...pointer1} />
      <pointLight {...pointer2} />
      <OrbitControls />
    </Canvas>
  );
}
