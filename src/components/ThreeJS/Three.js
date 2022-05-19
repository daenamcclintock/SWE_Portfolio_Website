import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import me from './me.jpg'
import * as THREE from 'three'

const yo = require('./me.jpg');

const Three = (props) => {
    // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.02, ref.current.rotation.y += 0.05))
  // Return the view, these are regular Threejs elements expressed in JSX
  const texture = new THREE.TextureLoader().load(yo);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(e) => click(!clicked)}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}>
      <cylinderGeometry args={[0.7, 0.7, 0.15, 100]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Three;
