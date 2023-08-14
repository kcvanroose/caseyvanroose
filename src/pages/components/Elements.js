import { Stars, Text3D, Center, useMatcapTexture } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { motion } from "framer-motion-3d"
import * as THREE from 'three'
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"


const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshMatcapMaterial()

const SmallCube = ({ cubePosition, section }) => {
    const ref = useRef()
    const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    
    useEffect(() => {
        matcapTexture.colorSpace = THREE.SRGBColorSpace
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [matcapTexture])

    useFrame((state, delta) => {
        if (section === 0 || section === 3) {
            ref.current.rotation.x = 0
            ref.current.rotation.y = 0
        }
        if (section === 1 || section === 2) {
            ref.current.rotation.x += delta * 0.2
            ref.current.rotation.y += delta * 0.2
        }
        
    })

    const getPostions = () => {
       
       if (section === 1) {
        const array = [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]
        return array
       } 
       if (section === 2) {
        const array = [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]
        return array
       }
        if (section === 3 || section === 5 || section === 6) {
            const array = [1, ...initialPosition.slice(1)]
            console.log(array)
            return array
        } else {
            return initialPosition
       }
    }
    

   
    let initialPosition = cubePosition
   
    return (
        <>
        <motion.mesh 
            ref={ref}
            geometry={ boxGeometry } 
            material={ material } 
            position={initialPosition} 
            animate={{
                x: getPostions()[0],
                y: getPostions()[1],
                z: getPostions()[2]
            }}
            rotateX={0}
            rotateY={0}
            rotateZ={0}
            transition={{duration: 0.8}}
        />
      
        </>
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
            (x - (numCubes - 1) / 2) * 1.3,
            (y - (numCubes - 1) / 2) * 1.3,
            (z - (numCubes - 1) / 2) * 1.3,
          ];
  
          cubes.push(<SmallCube section={section} key={`${x}-${y}-${z}`} rotation={0} cubePosition={position} />);
        }
      }
    }

    const getPostion = () => {
        const initialPosition = [5,0,-10]
        if (section === 2) {
            const position = [-8,3,-10]
            return position
        }
        if (section === 3) {
            const position = [11,3,-10]
            return position
        }
        if (section === 4) {
            const position = [11.5,3,-10]
            return position
        }
        if (section === 5 || section === 6) {
            const position = [0, -2.5, 0]
            return position
        } else {
            return initialPosition
        }
    }

    useFrame((state, delta) => {
        if (section === 0) {
            ref.current.rotation.x += delta * 0.2
            ref.current.rotation.y += delta * 0.2
        }
        if (section === 3 || section === 4) {
            ref.current.rotation.x += delta * 0.2
            ref.current.rotation.y += delta * 0.2
        }
        if (section === 5 || section === 6) {
            ref.current.rotation.x = - Math.PI * 0.5
            ref.current.rotation.y = - 4.7
        }
       
    });

    return (
        <motion.group 
        ref={ref}
        scale={[1, 1, 1]}
        animate={{
            x: getPostion()[0],
            y: getPostion()[1],
            z: getPostion()[2]
         }}
        position={[5,0,-10]}
        >
            {cubes}
        </motion.group>
    )
}

const Elements = (props) => {
    const { section } = props
    return (
        <>
             <EffectComposer>
                <Bloom
                    mipmapBlur
                    intensity={ 1 }
                    luminanceThreshold={ 0}
                />
             </EffectComposer> 
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <BigCubeOfSmallCubes section={section} />
           
        </>
    )
}
export default Elements