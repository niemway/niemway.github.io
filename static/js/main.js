import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

// Determine the size of the window
const body = document.body;
const windowSize = {
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,
};

const camera = new THREE.PerspectiveCamera(
  45,
  windowSize.width / windowSize.height,
  0.1,
  1000,
);

let object;
let controls;
let objToRender = "Coffee";

const loader = new GLTFLoader();

loader.load(
  `static/models/${objToRender}.gltf`,
  (gltf) => {
    object = gltf.scene;
    scene.add(object);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  (error) => {
    console.error(error);
  },
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(windowSize.width, windowSize.height);
document.getElementById("model").appendChild(renderer.domElement);

renderer.toneMapping = THREE.NoToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding; // or LinearEncoding if you prefer
renderer.toneMappingExposure = 1.9;

camera.position.set(-3, 3, 4);
camera.lookAt(0, 0, 0);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.enablePan = false;
controls.enableZoom = false;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
});

animate();
