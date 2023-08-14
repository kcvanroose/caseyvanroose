import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';


const Cube = (props) => {
  const ref = useRef();
  const imgTex = useTexture('../../images/circleImg.png')
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.2
  });

  return (   
      <mesh {...props} recieveShadow={true} castShadow position={[2, 1,0]} ref={ref}>
        <boxGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial color={[1.9,0.8,3]} emissive={'magenta'} emissiveIntensity={4} toneMapped={false} wireframe />
      </mesh>
  
  );
};

export default Cube;