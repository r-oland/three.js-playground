// Components==============
import { OrbitControls, useCubeTexture, useTexture } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Cone from '../components/materials/Cone';
import Plane from '../components/materials/Plane';
import Sphere from '../components/materials/Sphere';
// =========================

const Content = () => {
  const getTextures = useTexture({
    map: '/sand/sand_Color.jpg',
    normalMap: '/sand/sand_NormalDX.jpg',
    roughnessMap: '/sand/sand_Roughness.jpg',
    displacementMap: '/sand/sand_Displacement.jpg',
    aoMap: '/sand/sand_AmbientOcclusion.jpg',
  });

  const [textures] = useState(getTextures);
  return (
    <>
      <Plane textures={textures} />
      <Cone textures={textures} />
    </>
  );
};

const Background = () => {
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    {
      path: '/Standard-Cube-Map/',
    }
  );

  const scene = useThree((state) => state.scene);

  useEffect(() => {
    scene.background = envMap;
    scene.environment = envMap;
  }, []);

  return null;
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
      <Suspense fallback={<Loader />}>
        <Sphere />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Background />
      </Suspense>
      <ambientLight {...ambient} />
      <directionalLight {...dirLight} />
      <pointLight {...pointer1} />
      <pointLight {...pointer2} />
      <OrbitControls />
    </Canvas>
  );
}
