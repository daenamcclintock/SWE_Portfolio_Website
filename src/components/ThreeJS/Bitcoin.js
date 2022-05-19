import React, { } from "react";
import * as THREE from 'three'

const Bitcoin = () => {

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 100, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({alpha: true})
  renderer.setSize(100, 100)
  scene.background = new THREE.Color( 0x000000 );

  // Adding ambient lighting
  scene.add(new THREE.AmbientLight(0xffffff,0.5))

  // Left point light
  const pointLightLeft = new THREE.PointLight(0xff4422, 1)
  pointLightLeft.position.set(-1,-1,3)
  scene.add(pointLightLeft)

  // Right point light
  const pointLightRight = new THREE.PointLight(0x44ff88, 1)
  pointLightRight.position.set(1,2,3)
  scene.add(pointLightRight)

  // Top point light
  const pointLightTop = new THREE.PointLight(0xdd3311, 1)
  pointLightTop.position.set(0,3,2)
  scene.add(pointLightTop)

  THREE.ImageUtils.crossOrigin = '';
  // IMPORTANT: This next line defines the texture of your coin. I didn't include the Minecraft texture (for copyright reasons) You should replace the url inside '.load(...)' with the path to your own image.
  const texture = new THREE.TextureLoader().load( "https://www.pngall.com/wp-content/uploads/1/Bitcoin-PNG-Transparent-HD-Photo.png" );

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness:0.7,
    roughness:0.3,
  })

  var geometry = new THREE.CylinderGeometry(3,3,0.4,100);
  const mesh = new THREE.Mesh(geometry,material)

  scene.add(mesh)
  camera.position.set(0,0,7)

  mesh.rotation.x = 2
  mesh.rotation.y = 1.5

  const animate = () => {
    mesh.rotation.x +=0.01
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return (
    <div>
        {animate}
    </div>
  )
}

export default Bitcoin

