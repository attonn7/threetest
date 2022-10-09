const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.CylinderGeometry( 1, 1, 8 );
const material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
const cylinder = new THREE.Mesh( geometry, material );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('touchstart', handleMouseDown);

document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('touchend', handleMouseUp);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.add( cylinder );
camera.position.z = 10;
renderer.render( scene, camera );

let myAnimationRequest;

function animate() {
    myAnimationRequest = requestAnimationFrame( animate );
    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.02;
    cylinder.rotation.z -= 0.02;
    renderer.render( scene, camera );
}

function stopAnimation() {
    cancelAnimationFrame(myAnimationRequest);
}

function handleMouseDown() {
    console.log("Mouse is down.");
    animate();
}

function handleMouseUp(){
    console.log("Mouse is up.");
    stopAnimation();
}