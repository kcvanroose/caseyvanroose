import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const CustomParticles = (props) => {
    const { count } = props;
  
    // This reference gives us direct access to our points
    const points = useRef();
  
    // Generate our positions attributes array
    const particlesPosition = useMemo(() => {
      const positions = new Float32Array(count * 3);
      const distance = 12;
      
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 
  
        let x = distance * Math.sin(theta) * Math.cos(phi)
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);
  
        positions.set([x, y, z], i * 3);
      }
      
  
      return positions;
    }, [count]);
  
    useFrame((state,delta) => {
      // const { clock } = state;
      
      // for (let i = 0; i < count; i++) {
      //   const i3 = i * 3;  
      //   points.current.geometry.attributes.position.array[i3] += Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
      //   points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
      //   points.current.geometry.attributes.position.array[i3 + 2] += Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
      // }
  
      // points.current.geometry.attributes.position.needsUpdate = true;
      points.current.rotation.y += delta/8;
    });
  
    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#EE96F1" sizeAttenuation depthWrite={false} />
      </points>
    );
  };

export default CustomParticles