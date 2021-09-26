// Components==============
import { Html, useProgress } from '@react-three/drei';
import React from 'react';
// =========================

export default function Loader() {
  const progress = useProgress((state) => state.progress);

  return (
    <Html center>
      <h1 style={{ color: 'white' }}>{Math.floor(progress)}%</h1>
    </Html>
  );
}
