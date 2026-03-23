import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Landing from "../components/Home/Landing";
import InstagramFeed from "../components/Home/InstagramFeed";

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

        {/* Footer */}
        <footer className="home-footer">
          <p className="footer-text">Built with ❤️ by the CS Club Website Committee</p>
          <p className="footer-text">1900 Pico Blvd, Santa Monica, CA 90405</p>
        </footer>
      </div>

      <style jsx>{`
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

        /* Footer */
        .home-footer {
          position: relative;
          width: 100%;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: clamp(1.5rem, 3vh, 2rem) clamp(1rem, 8vw, 145px);
          z-index: 5;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vh, 1rem);
          box-sizing: border-box;
        }

        .footer-text {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(12px, 1.5vw, 24px);
          font-weight: 300;
          color: #F1F5F9;
          margin: 0;
        }


        @media (max-width: 950px) {
          .home-footer {
            flex-direction: column;
            text-align: center;
            padding: clamp(1rem, 3vh, 1.5rem) clamp(1rem, 5vw, 2rem);
          }
        }

      `}</style>
    </>
  );
}

export default Home;
