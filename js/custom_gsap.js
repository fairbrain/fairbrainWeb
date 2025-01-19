
// FOOTER Animation
gsap.from(".footer-box", {
    opacity: 0,
    x: -100,
    duration: 5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".footer-box",
        start: "top 90%",
        end: "70% 90%",
        scrub: 1,
    }
})

// Why us

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".why-choose-image", // The container to trigger the animation
        start: "top 50%",            // Start when the container's top reaches 75% of the viewport height
        end: "50% 50%",          // End when the container's bottom reaches 50% of the viewport height
        scrub: 1,                   // Smooth scrubbing effect            // Debug markers to visualize trigger points (remove in production)
    }
});

// Animate the `.person` element
tl.to(".why-choose-image .person", {
    scale: 2,
    y: 150,
    duration: 2,
});

// Animate the `.qmark` element after `.person` animation finishes
tl.fromTo(".why-choose-image .qmark", {
    opacity: 0,
    y: 100,
    scale: 2,
}, {
    opacity: 1,
    scale: 1.2,
    duration: 2,
}, "-=1"); // Overlap the animations by 1 second

gsap.from(".why-choose-content h3", {
    opacity: 0,
    x: -100,
    duration: 2,
    scrollTrigger: {
        trigger: ".why-choose-content h3",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
    }
});
gsap.from(".why-choose-content p", {
    opacity: 0,
    x: -100,
    stagger: 0.5,
    duration: 2,
    scrollTrigger: {
        trigger: ".why-choose-content",
        start: "top 80%",
        end: "50% 70%",
        scrub: 1,
    }
});



gsap.from(".psteps", {
    opacity: 0.5,
    x: -100,
    stagger: 0.5,
    duration: 2,
    scrollTrigger: {
        trigger: ".process-steps",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
    }
})

gsap.from(".start-new-project", {
    opacity: 0,
    duration: 5,
    scrollTrigger: {
        trigger: ".start-new-project",
        start: "top 80%",
        end: "top 90%",
        scrub: 1,
    }
})




