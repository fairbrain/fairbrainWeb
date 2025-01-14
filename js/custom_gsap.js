gsap.from(".hero", {
    opacity: 0,
    filter: "blur(4px)",
    duration: 2,
})
gsap.from(".hero__content h1", {
    opacity: 0,
    y: 100,
    duration: 1
})
gsap.from(".hero__content p", {
    opacity: 0,
    scale: 0.5,
    duration: 2
})
gsap.from(".hero__search", {
    opacity: 0,
    y: 200,
    duration: 1
})
