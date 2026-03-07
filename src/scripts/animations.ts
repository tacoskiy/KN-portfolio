export const initAnimations = (gsap: any, ScrollTrigger: any) => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".polygon-1", {
        y: -300,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".polygon-1",
            start: "top 100%",
            end: "300% 0%",
            scrub: true,
        },
    });

    gsap.from(".polygon-2", {
        y: -300,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".polygon-2",
            start: "top 100%",
            end: "300% 0%",
            scrub: true,
        },
    });

    gsap.from(".polygon-3", {
        y: -300,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".polygon-3",
            start: "top 100%",
            end: "300% 0%",
            scrub: true,
        },
    });

    gsap.from(".works .content", {
        y: -600,
        opacity: 0,
        scale: 0.8,
        filter: 'blur(24px)',
        scrollTrigger: {
            trigger: ".works",
            start: "top 100%",
            end: "top 20%",
            scrub: true,
        },
    });

    gsap.fromTo(".works .content", {
        y: 0,
        opacity: 1,
        scale: 1,
    },{ 
        y: "80vh",
        scrollTrigger: {
            trigger: ".works",
            start: "top 20%",
            end: "top -600%",
            scrub: true,
        },
    });

    gsap.from(".works .dim", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".works",
            start: "top 100%",
            end: "top 20%",
            scrub: 1,
        },
    });

    gsap.fromTo(".works .dim", {
        backgroundColor: "#0F1419",
        opacity: 0,
    },{
        backgroundColor: "#07A0C3",
        opacity: 1,
        scrollTrigger: {
            trigger: ".works",
            start: "bottom 100%",
            end: "bottom 20%",
            scrub: 1,
        },
    });

    gsap.from(".name-jp span", {
        top: "150%",
        scrollTrigger: {
            trigger: ".name-jp",
            start: "top 100%",
            end: "bottom 40%",
            scrub: true,
        },
    });

    gsap.from(".name-en", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".name-en",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
        },
    });

    gsap.utils.toArray(".description span").forEach((el: any) => {
        gsap.to(el, {
        backgroundPosition: "0% center",
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
        }
    });

    });

    gsap.from(".profile-img img", {
        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        scrollTrigger: {
            trigger: ".profile-img",
            start: "top 100%",
            end: "bottom 40%",
            scrub: true,
        },
    });

    const elements = document.querySelectorAll('.work-item');
    const target = document.querySelector(".work-item.first");

    if (elements.length > 0 && target) {
        ScrollTrigger.create({
            trigger: ".about",
            start: "150% 80%",
            end: "150% 0%",
            onEnter: () => {
                elements.forEach(item => item.classList.remove('hovered'));
                target.classList.add("hovered");
            },
            onLeaveBack: () => target.classList.remove("hovered"),
        });
    }

    const track = document.getElementById('loop-track');
    if (track) {
        const word = track.querySelector('.email');
        const wordCount = 20; 

        if (word) {
            for (let i = 1; i < wordCount; i++) {
                const clone = word.cloneNode(true);
                track.appendChild(clone);
            }

            let animation = gsap.to(track, {
                x: '-50%',
                ease: 'linear',
                duration: 15,
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x: any) => parseFloat(x) % 100)
                }
            });

            const loopTrackWrapper = document.querySelector('.loop-track');
            if (loopTrackWrapper) {
                loopTrackWrapper.addEventListener('mouseenter', () => {
                    gsap.to(animation, { timeScale: 0, duration: 3, ease: "power2.out" });
                });
            
                loopTrackWrapper.addEventListener('mouseleave', () => {
                    gsap.to(animation, { timeScale: 1, duration: 3, ease: "power2.in" });
                });
            }
        }
    }

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
        gsap.utils.toArray(".skills .card").forEach((card: any, i: number) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".skills-wrapper",
                        start: `${i * 5}% top`,
                        end: `${(i+1) * 5}% top`,
                        scrub: true,
                    }
                }
            );
        });

        gsap.fromTo(".skills .card.manager", 
                {borderBottomRightRadius: "0px"},
                {
                    borderBottomRightRadius: "999px",
                    scrollTrigger: {
                        trigger: ".skills-wrapper",
                        start: `25% top`,
                        end: `60% top`,
                        scrub: true,
                    }
                }
        );

        gsap.fromTo(".skills .card.figma", 
                {borderBottomLeftRadius: "0px"},
                {
                    borderBottomLeftRadius: "999px",
                    scrollTrigger: {
                        trigger: ".skills-wrapper",
                        start: `25% top`,
                        end: `60% top`,
                        scrub: true,
                    }
                }
        );

        gsap.fromTo(".skills .card.php", 
                {borderTopRightRadius: "0px"},
                {
                    borderTopRightRadius: "999px",
                    scrollTrigger: {
                        trigger: ".skills-wrapper",
                        start: `25% top`,
                        end: `60% top`,
                        scrub: true,
                    }
                }
        );

        gsap.fromTo(".skills .card.html", 
                {borderTopLeftRadius: "0px"},
                {
                    borderTopLeftRadius: "999px",
                    scrollTrigger: {
                        trigger: ".skills-wrapper",
                        start: `25% top`,
                        end: `60% top`,
                        scrub: true,
                    }
                }
        );

        gsap.fromTo(".skills .card.canva", 
                {borderBottomLeftRadius: "0px",borderBottomRightRadius: "0px"},
                {
                    borderBottomLeftRadius: "999px",
                    borderBottomRightRadius: "999px",
                    scrollTrigger: {
                        trigger: ".skills-wrapper",
                        start: `25% top`,
                        end: `60% top`,
                        scrub: true,
                    }
                }
        );

        gsap.fromTo(".skills .card .content", 
            {width: "100%",height:"100%"},
            {
                width: "85%",height:"85%",
                scrollTrigger: {
                    trigger: ".skills-wrapper",
                    start: `25% top`,
                    end: `50% top`,
                    scrub: true,
                }
            }
        );

        gsap.fromTo(".skills .skills-font",
            {opacity:0, filter: "blur(240px)"},
            {
                opacity:1,
                filter: "blur(0px)",
                scrollTrigger: {
                    trigger: ".skills-wrapper",
                    start: `15% top`,
                    end: `40% top`,
                    scrub: true,
                }
            }
        );

        gsap.fromTo(".skills",
            {scale: 1, x: 0},
            {
                scale: 8,
                x: "50vw", // Use responsive unit to prevent clipping on ultra-wide screens
                scrollTrigger: {
                    trigger: ".skills-wrapper",
                    start: `50% top`,
                    end: `100% top`,
                    scrub: true,
                }
            }
        );

        gsap.fromTo(".skills .card .content",
            {opacity:1, filter: "blur(0px)", y: 0},
            {
                opacity:1,
                filter: "blur(24px)",
                scrollTrigger: {
                    trigger: ".skills-wrapper",
                    start: `55% top`,
                    end: `100% top`,
                    scrub: true,
                }
            }
        );

        gsap.fromTo(".skills .skills-font",
            {filter: "blur(0px)", y: 0, scale: 1},
            {
                y: "-20vh", // Use vh to make translation responsive
                scale: .5,
                filter: "blur(12px)",
                scrollTrigger: {
                    trigger: ".skills-wrapper",
                    start: `55% top`,
                    end: `100% top`,
                    scrub: true,
                }
            }
        );
    });

    mm.add("(max-width: 799px)", () => {
        // Simple native CSS `position: sticky` is used for mobile stacking layout.
        // GSAP is only used to add a smooth fade-in as they appear, without pinning to prevent scroll bugs.
        const cards = gsap.utils.toArray(".skills .card");
        
        cards.forEach((card: any) => {
            gsap.fromTo(card, 
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", // Start fading in when the card's top is 80% down the screen
                        end: "top 20%",
                        scrub: 1, // Smoothly link opacity to scroll position
                    }
                }
            );
        });
    });
};
