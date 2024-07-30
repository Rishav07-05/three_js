import * as THREE from 'three'

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(3 ,3 , 3);
const material = new THREE.MeshBasicMaterial({color: "lightblue"})

const mesh = new THREE.Mesh(geometry , material)
scene.add(mesh)

const ratio = {
    width: 700,
    height: 500
}

const camera = new THREE.PerspectiveCamera(75 , ratio.width/ratio.height)

camera.position.z = 4
scene.add(camera)


const target  = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas: target})

renderer.setSize(ratio.width , ratio.height)
renderer.render(scene , camera)