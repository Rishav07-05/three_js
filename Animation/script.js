import * as THREE from 'three'
import gsap from 'gsap'

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(2 , 2 , 2)
const material =  new THREE.MeshBasicMaterial({color: "crimson"})

const mesh = new THREE.Mesh(geometry , material)
scene.add(mesh)


const size = {
    width: 500,
    height: 600
    }
    
    const camera = new THREE.PerspectiveCamera(75 , size.width/size.height)
    
    camera.position.set(0 , 0 , 7);
    scene.add(camera)

    // const axesHelper = new THREE.AxesHelper( 2 );
    // scene.add( axesHelper );
    
    
    const target = document.querySelector(".webgl")
    const renderer = new THREE.WebGLRenderer({canvas: target})
    
    renderer.setSize(size.width , size.height)
    

    // let time = Date.now();
    let clock = new THREE.Clock();

    gsap.to(mesh.position , {
        x:2,
        duration:2,
        delay:1,
        opacity:0
    })
    
    const tick = () => {
        // using basic js idea
        // const currentTime = Date.now();
        // const diffTime = currentTime - time;
        // time = currentTime
        // console.log(diffTime);
        const elapsedTime = clock.getElapsedTime();
        camera.position.x += Math.cos(elapsedTime) /13
        camera.position.y += Math.sin(elapsedTime) /30
        camera.lookAt(mesh.position)
        // mesh.position.x += Math.sin(elapsedTime) /80
        // mesh.position.z += Math.sin(elapsedTime) /80
        renderer.render(scene , camera)
        console.log("Hello");
        window.requestAnimationFrame(tick)
    }

    tick();