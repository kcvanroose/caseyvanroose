import React, { useRef } from 'react';
const Particles = ({ color, position }) => {
    const ref = useRef();
  
   
    return (
        <points ref={ref}>
            
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
   
        </points>
    );
  };
  
  export default Particles;