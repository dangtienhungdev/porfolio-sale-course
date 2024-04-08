import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// create object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
console.log('🚀 ~ scene:', scene);

// create camera
const sizes = {
	width: 800,
	height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
console.log('🚀 ~ camera:', camera);
camera.position.z = 3;

scene.add(camera);

// render
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
