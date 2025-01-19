import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
renderer.shadowMap.enabled = true; // Enable shadows for better lighting effects
const section = document.querySelector(".earth-canvas");
section.appendChild(renderer.domElement);

// Camera setup
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 9; // Adjusted for a better view of the earth

// Scene setup
const scene = new THREE.Scene();

// Load textures
const textureLoader = new THREE.TextureLoader();
const cloudTexture = textureLoader.load("./clouds.jpg"); // Cloud background texture
scene.background = cloudTexture;

const earthTexture = textureLoader.load("./images/earth.jpg"); // Earth texture

// Earth geometry and material
const geo = new THREE.IcosahedronGeometry(5, 50);
const mat = new THREE.MeshStandardMaterial({
    map: earthTexture,
});

const earthMesh = new THREE.Mesh(geo, mat);
earthMesh.castShadow = true; // Allow the earth to cast shadows
scene.add(earthMesh);

// Hemisphere light for general ambient lighting
const hemolight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5); // Softer ambient light
scene.add(hemolight);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
// sunLight.position.set(-2, 0.5, 2);
scene.add(sunLight);

// Animation loop
function animate(t = 0) {
    requestAnimationFrame(animate);
    earthMesh.position.set(-0.5, -0.5, 0)
    // Rotate the earth
    earthMesh.rotation.y = t / 5000;
    earthMesh.position;

    renderer.render(scene, camera);
}

animate();
