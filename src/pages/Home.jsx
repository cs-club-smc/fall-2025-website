import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Landing from "../components/Home/Landing";
import InstagramFeed from "../components/Home/InstagramFeed";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);
  const landingRef = useRef(null);
  const instagramRef = useRef(null);

  useGSAP(() => {
    // Preserve scroll position on horizontal resize to prevent jumps
    let scrollY = 0;
    const saveScroll = () => { scrollY = window.scrollY; };
    const restoreScroll = () => { window.scrollTo(0, scrollY); };

    ScrollTrigger.addEventListener("refreshInit", saveScroll);
    ScrollTrigger.addEventListener("refresh", restoreScroll);

    // Landing section - fade and scale as it scrolls away
    gsap.to(landingRef.current, {
      scrollTrigger: {
        trigger: landingRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
      scale: 0.95,
      opacity: 0,
      filter: "blur(8px)",
      ease: "none",
    });

    // Instagram section - fade in from below
    gsap.from(instagramRef.current.querySelector('.instagram-inner'), {
      scrollTrigger: {
        trigger: instagramRef.current,
        start: "top 85%",
        end: "top 20%",
        scrub: 0.5,
      },
      y: 100,
      opacity: 0,
      ease: "none",
    });

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", saveScroll);
      ScrollTrigger.removeEventListener("refresh", restoreScroll);
    };
  }, { scope: containerRef });

  return (
    <>
      <div className="home-container" ref={containerRef}>
        {/* Landing Section */}
        <section className="home-section section-landing" ref={landingRef}>
          <Landing />
        </section>

        {/* Instagram Section */}
        <section id="instagram" className="home-section section-instagram" ref={instagramRef}>
          <div className="instagram-inner">
            <InstagramFeed />
          </div>
        </section>

        <Footer />
      </div>

      <style>{`
        .home-container {
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .home-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .section-landing {
          z-index: 3;
        }

        .section-instagram {
          z-index: 2;
        }

        .instagram-inner {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 6vh, 5rem) 0;
        }



      `}</style>
    </>
  );
}

export default Home;
