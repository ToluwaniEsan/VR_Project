import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

let scene, camera, renderer, model;

// Initialize the scene
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 3);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Load the OBJ model
  const objLoader = new OBJLoader();
  objLoader.load(
    'http://127.0.0.1:8080/FinalBaseMesh.obj', // Update with your file location
    (object) => {
      model = object;
      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(0, -1, 0);
      scene.add(model);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      console.error('An error occurred while loading the OBJ model:', error);
    }
  );

  // Lighting
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  light.position.set(0.5, 1, 0.75);
  scene.add(light);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Initialize and animate
init();
animate();
