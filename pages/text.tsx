// Components==============
import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { createContext, Suspense, useState } from 'react';
import { MeshMatcapMaterial } from 'three';
import Loader from '../components/Loader';
import Item from '../components/text/Item';
import Tetrahedrons from '../components/text/Tetrahedrons';
// =========================

type TextContextType = {
  material: MeshMatcapMaterial;
};

export const TextContext = createContext({} as TextContextType);

const LoaderProvider = ({}) => {
  const { matcap } = useTexture({ matcap: '/matcap.png' });
  const [material] = useState(new MeshMatcapMaterial({ matcap }));

  return (
    <TextContext.Provider value={{ material }}>
      <Item />
      <Tetrahedrons />
    </TextContext.Provider>
  );
};

export default function Text() {
  return (
    <Canvas
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
      camera={{ fov: 45, position: [2, 0, 5] }}
    >
      <Suspense fallback={<Loader />}>
        <LoaderProvider />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
