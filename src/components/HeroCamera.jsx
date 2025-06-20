import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';



const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef();
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0,0,45], 0.65, delta);
        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/4 , state.pointer.x/4, 0], 0.25, delta);
        }
        


    }
)

  return (
    <group ref={groupRef}> {children} </group>
    )
}

export default HeroCamera;