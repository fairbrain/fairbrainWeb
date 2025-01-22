import * as THREE from "three";

// Renderer setup
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.querySelector(".earth-canvas").appendChild(renderer.domElement);

// Camera setup
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 20;

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
const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture,
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// Lights
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
scene.add(hemiLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Carousel images
const imagePaths = [
    "./images/hero-1.jpg",
    "./images/hero-2.jpg",
    "./images/hero-3.jpg",
    "./images/hero-4.jpg",
    "./images/hero-5.jpg",
    "./images/hero-6.jpg",
];
const sprites = [];
const radius = 10; // Distance from the Earth

imagePaths.forEach((path, index) => {
    textureLoader.load(path, (texture) => {
        // Use image dimensions to maintain aspect ratio
        const aspectRatio = texture.image.width / texture.image.height;
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);

        // Adjust the sprite size (increase for better visibility)
        const height = 4; // Set a fixed height for images
        const width = height * aspectRatio; // Calculate width based on aspect ratio
        sprite.scale.set(width, height, 1);

        // Position in a circular path
        const angle = (index / imagePaths.length) * Math.PI * 2;
        sprite.position.set(
            radius * Math.cos(angle),
            0,
            radius * Math.sin(angle)
        );

        scene.add(sprite);
        sprites.push(sprite);
    });
});

// Animation loop
function animate(time) {
    requestAnimationFrame(animate);

    // Rotate the Earth
    earthMesh.rotation.y = time / 5000;

    // Rotate the carousel images around the Earth
    sprites.forEach((sprite, index) => {
        const angle = (time / 5000 + (index / imagePaths.length) * Math.PI * 2);
        sprite.position.set(
            radius * Math.cos(angle),
            0,
            radius * Math.sin(angle)
        );
    });

    renderer.render(scene, camera);
}

animate();
