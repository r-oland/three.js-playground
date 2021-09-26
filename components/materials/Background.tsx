// Components==============
import { useCubeTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
// =========================

export default function Background() {
  const scene = useThree((state) => state.scene);

  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    {
      path: '/Standard-Cube-Map/',
    }
  );

  useEffect(() => {
    scene.background = envMap;
    scene.environment = envMap;
  }, []);

  return null;
}
