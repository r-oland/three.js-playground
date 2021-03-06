// Components==============
import { useControls } from 'leva';
import React, { useContext, useEffect, useRef } from 'react';
import { InstancedMesh, Object3D } from 'three';
import { TextContext } from '../../pages/text';
// =========================

// initiate new Object outside of loop for better performace
const temp = new Object3D();

export default function Tetrahedrons() {
  const { material } = useContext(TextContext);

  const { spread, amount, scale } = useControls('tetrahedrons', {
    spread: { value: 150, min: 1, max: 500, step: 1 },
    amount: { value: 2500, min: 1, max: 100000, step: 1 },
    scale: { value: 2, min: 0.5, max: 5, step: 0.25 },
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

      temp.updateMatrix();
      group.current.setMatrixAt(i, temp.matrix);
    }
    // Update the instance
    group.current.instanceMatrix.needsUpdate = true;
  }, [amount, scale, spread]);

  return (
    <instancedMesh args={[undefined, material, amount]} ref={group}>
      <tetrahedronGeometry args={[1, 0]} />
    </instancedMesh>
  );
}
