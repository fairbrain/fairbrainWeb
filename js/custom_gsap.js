
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
gsap.from(".earth-canvas", {
    opacity: 1,
    scale: 0.2,
    y: -350,
    duration: 5,
    scrollTrigger: {
        trigger: ".hero",
        start: "top 5%",
        end: "bottom 50%",
        scrub: 1,
    }
})
gsap.from(".hero-image", {
    opacity: 0,
    stagger: 0.1,
    duration: 5,
    
    scrollTrigger: {
        trigger: ".hero",
        start: "top 5%",
        end: "50% 50%",
        scrub: 1,
        markers: true
    }
})


