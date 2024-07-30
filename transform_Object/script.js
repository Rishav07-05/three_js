import * as THREE from 'three'


const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(2 , 2 , 2)
const material =  new THREE.MeshBasicMaterial({color: "lightseagreen"})

const mesh = new THREE.Mesh(geometry , material)
mesh.position.set(0.7,-0.6,1)
scene.add(mesh)
// mesh.position.normalize()

mesh.rotation.reorder("XYZ")
mesh.rotation.x = 5
// mesh.rotation.y = 2
mesh.rotation.z = 2


mesh.scale.set(2 , 0.25 , 0.5)


const size = {
    width: 500,
    height: 600
    }
    
    const camera = new THREE.PerspectiveCamera(75 , size.width/size.height)
    
    camera.position.set(0 , 0 , 6);
    scene.add(camera)

    const axesHelper = new THREE.AxesHelper( 2 );
    scene.add( axesHelper );
    
    
    const target = document.querySelector(".webgl")
    const renderer = new THREE.WebGLRenderer({canvas: target})
    
    renderer.setSize(size.width , size.height)
    renderer.render(scene , camera)