// Components==============
import { useControls } from 'leva';
import React, { useEffect, useRef } from 'react';
import { Color, InstancedMesh, MeshPhysicalMaterial, Object3D } from 'three';
import { colours } from './Box';
// =========================

// initiate new Object outside of loop for better performace
const temp = new Object3D();
const material = new MeshPhysicalMaterial();

export default function OtherBoxes() {
  const { spread, amount, scale } = useControls('other-boxes', {
    spread: { value: 15, min: 1, max: 500, step: 1 },
    amount: { value: 20, min: 1, max: 1000, step: 1 },
    scale: { value: 1.5, min: 0.5, max: 5, step: 0.25 },
  });

  const group = useRef<InstancedMesh>(null);

  useEffect(() => {
    if (!group.current) return;

    // Set positions
    for (let i = 0; i < amount; i++) {
      const scaleNr = Math.random() * scale;

      temp.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      temp.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      temp.scale.set(scaleNr, scaleNr, scaleNr);

      const colorIndex = Math.floor(Math.random() * colours.length);

      temp.updateMatrix();
      group.current.setMatrixAt(i, temp.matrix);
      group.current.setColorAt(i, new Color(colours[colorIndex]));
    }
    // Update the instance
    group.current.instanceMatrix.needsUpdate = true;
  }, [amount, scale, spread]);

  return (
    <instancedMesh args={[undefined, material, amount]} ref={group}>
      <boxGeometry />
    </instancedMesh>
  );
}
