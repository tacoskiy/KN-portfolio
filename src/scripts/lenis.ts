import { initAnimations } from './animations';

if (typeof window !== "undefined") {
    document.addEventListener('DOMContentLoaded', async () => {
        // Lenis is loaded via CDN, it is attached to window
        // @ts-ignore
        if (typeof window.Lenis !== 'undefined') {
            // @ts-ignore
            const lenis = new window.Lenis({
                duration: 1.2,
                easing: (t: number) => 1 - Math.pow(2, -10 * t),
                smooth: true,
            });

            // GSAP and ScrollTrigger are loaded via CDN, so they are attached to window
            // @ts-ignore
            const gsap = window.gsap;
            // @ts-ignore
            const ScrollTrigger = window.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time: number) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);
            
            console.log("load lenis");
            
            initAnimations(gsap, ScrollTrigger);
        }
    });

    window.onload = function () {
        const loader = document.querySelector(".loading-screen");
        if(loader){
            loader.classList.add("loaded");
        }
    };
}
