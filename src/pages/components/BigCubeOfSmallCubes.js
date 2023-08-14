import Cube from "./Cube"
import CustomParticles from "./CustomParticles"
import Points from "./Points"
import { useMatcapTexture } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import * as THREE from 'three'

import { useRef, useEffect, Suspense } from "react"
import { useFrame } from "@react-three/fiber"

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshMatcapMaterial()

const SmallCube = ({ position }) => {
    const cubes = useRef([])
    // const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    useEffect(() => {
        // matcapTexture.colorSpace = THREE.SRGBColorSpace
        // matcapTexture.needsUpdate = true

        // material.matcap = matcapTexture
        // material.needsUpdate = true
    }, [])
    return (
      <mesh geometry={ boxGeometry } material={ material } position={position}>
        <boxGeometry args={[5, 5, 5]} />
        <meshBasicMaterial  metalness={ 0 } roughness={ 3 }/>
      </mesh>
    );
};
  
const BigCubeOfSmallCubes = (props) => {
    const ref = useRef()
    const { section } = props
    const numCubes = 5;
    const cubes = [];
  
    for (let x = 0; x < numCubes; x++) {
      for (let y = 0; y < numCubes; y++) {
        for (let z = 0; z < numCubes; z++) {
          const position = [
            (x - (numCubes - 1) / 2) * 1.5,
            (y - (numCubes - 1) / 2) * 1.5,
            (z - (numCubes - 1) / 2) * 1.5,
          ];
  
          cubes.push(<SmallCube key={`${x}-${y}-${z}`} position={position} />);
        }
      }
    }

    useFrame((state, delta) => {
        ref.current.rotation.x += delta * 0.2
        ref.current.rotation.y += delta * 0.2
    });

    return (
        <motion.group 
        ref={ref}
        scale={[0, 0, 0]}
        animate={{scale: section === 0 ? 1 : 0  }}
        position={[3,0,-10]}>
            {cubes}
        </motion.group> 
    )
}
export default BigCubeOfSmallCubes