gsap.registerPlugin(ScrollTrigger);

// Ensure images are loaded before animating
window.addEventListener("load", () => {
    // Footer Animation
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
        },
    });

    // Why Us Section Animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".why-choose-image",
            start: "top 50%",
            end: "50% 50%",
            scrub: 1,
        },
    });

    // Animate the `.person` element
    tl.to(".why-choose-image .person", {
        scale: 2,
        y: 150,
        duration: 2,
    });

    // Animate the `.qmark` element
    tl.fromTo(
        ".why-choose-image .qmark",
        {
            opacity: 0,
            y: 100,
            scale: 2,
        },
        {
            opacity: 1,
            scale: 1.2,
            duration: 2,
        },
        "-=1" // Overlap animations by 1 second
    );

    // Why Choose Content Heading Animation
    gsap.from(".why-choose-content h3", {
        opacity: 0,
        x: -100,
        duration: 2,
        scrollTrigger: {
            trigger: ".why-choose-content h3",
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
        },
    });

    // Why Choose Content Paragraph Animation
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
        },
    });

    // Process Steps Animation
    // gsap.from(".psteps", {
    //     opacity: 0,
    //     y: 50, // Slide in from below
    //     stagger: 0.3, // Delay between each step animation
    //     duration: 1.5, // Animation duration
    //     ease: "power3.out", // Smooth easing
    //     scrollTrigger: {
    //         trigger: ".process-steps",
    //         start: "top 90%",
    //         end: "bottom 70%",
    //         scrub: 1,
    //     },
    // });

    // Start New Project Animation
    gsap.from(".start-new-project", {
        opacity: 0,
        duration: 5,
        scrollTrigger: {
            trigger: ".start-new-project",
            start: "top 80%",
            end: "top 90%",
            scrub: 1,
        },
    });
});

gsap.to(".preloader", {
    y: "100%",
    duration: 0.5,
    delay: 2,
    display: "none",
}
)

gsap.from("header", {
    opacity: 0,
    y: -100,
    duration: 0.3,
    delay: 3,
});

const herotl = gsap.timeline();

herotl.from(".gsap-hero", {
    opacity: 0,
    y: -100,
    duration: 0.3,
    delay: 4,
    stagger: 0.5,
    ease: "back.out",
});

herotl.from(".earth-canvas", {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "back.out",
});
herotl.from(".photo-collage video", {
    opacity: 0,
    y: 100,
    duration: 2,
    ease: "back.out",
});

herotl.from("#img1", {
    opacity: 0,
    x: "-100%",
    duration: 2,
    ease: "back.out",
}, "<");

herotl.from("#img2", {
    opacity: 0,
    x: "100%",
    duration: 2,
    ease: "back.out",
}, "<");

herotl.from("#img3", {
    opacity: 0,
    x: "-100%",
    duration: 2,
    ease: "back.out",
}, "<");

herotl.from("#img4", {
    opacity: 0,
    x: "100%",
    duration: 2,
    ease: "back.out",
}, "<");


const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".photo-collage video",
        y: 0,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        markers: true,
    },
});

scrollTl.to(".photo-collage video", {
    duration: 5,
    scale: 0.8,
    ease: "back.out",

},"<")
.to("#img1", {
    duration: 5,
    x: "-100%",
    opacity: 0,
    ease: "back.out",
},"<")
.to("#img2", {
    duration: 5,
    x: "100%",
    opacity: 0,
    ease: "back.out",
},"<")
.to("#img3", {
    duration: 5,
    x: "-100%",
    opacity: 0,
    ease: "back.out",
},"<")
.to("#img4", {
    duration: 5,
    x: "100%",
    opacity: 0,
    ease: "back.out",
},"<")




