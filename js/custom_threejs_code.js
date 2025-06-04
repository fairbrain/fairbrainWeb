import * as THREE from "three";

// Renderer setup
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.querySelector(".earth-canvas").appendChild(renderer.domElement);

// Camera setup
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 15;

// Scene setup
const scene = new THREE.Scene();

// Set a background (color or texture)
const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load("./clouds.jpg"); // Replace with your background texture
scene.background = backgroundTexture;

// Load Earth texture
const earthTexture = textureLoader.load("./images/earth.jpg");

// Earth geometry and material
const earthGeometry = new THREE.SphereGeometry(7, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: 20,
    specular: new THREE.Color(0x999999),
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// Lights
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2); // Brighter
scene.add(hemiLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Stronger directional light
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Soft ambient light
scene.add(ambientLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Earth
    earthMesh.rotation.y += 0.001;
    earthMesh.rotation.x += 0.0003;

    renderer.render(scene, camera);
}

animate();
