import { OrbitControls } from 'OrbitControls';
import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 25, 25, 25 );
const material = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(geometry, material);

scene.add(box);

scene.background = new THREE.Color(0xc0c0c0);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 100);

animate();

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}
