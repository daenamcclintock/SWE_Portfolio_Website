import { useEffect } from 'react';
import * as THREE from 'three';
import { CubeReflectionMapping } from 'three';

const Three = () => {
    useEffect(() => {
        setUp()
        animate()
    })
    // Setup 3d Render
    const setUp = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer()
        
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild( renderer.domElement );
        
        renderer.render(scene, camera)
        
        const daenaTexture = new THREE.TextureLoader().load('me.png')
        
        const geometry = new THREE.BoxGeometry(3, 3, 3)
        const material = new THREE.MeshBasicMaterial({ map: daenaTexture })
    
        const daena = new THREE.Mesh(geometry, material)
        
        scene.add(daena)
    
        camera.position.z = 5
    }

    const animate = () => {
        requestAnimationFrame( animate );

        daena.rotation.x += 0.01;
        daena.rotation.y += 0.01;

        renderer.render( scene, camera );
    }
}

export default Three;


