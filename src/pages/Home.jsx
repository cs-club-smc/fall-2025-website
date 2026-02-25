import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Landing from "../components/Home/Landing";
import Announcements from "../components/Home/Announcements";
import Projects from "../components/Home/Projects";
import Sidebar from "../components/Sidebar";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);
  const landingRef = useRef(null);
  const transition1Ref = useRef(null);
  const announcementsRef = useRef(null);
  const transition2Ref = useRef(null);
  const projectsRef = useRef(null);

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

    // First transition - parallax text
    const transition1Content = transition1Ref.current?.querySelector('.transition-content');
    if (transition1Content) {
      gsap.fromTo(transition1Content,
        { y: 80, opacity: 0 },
        {
          y: -80,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: transition1Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          }
        }
      );
    }

    // Announcements section - fade in from below
    gsap.from(announcementsRef.current.querySelector('.announcements-inner'), {
      scrollTrigger: {
        trigger: announcementsRef.current,
        start: "top 85%",
        end: "top 20%",
        scrub: 0.5,
      },
      y: 100,
      opacity: 0,
      ease: "none",
    });

    // Second transition - parallax text
    const transition2Content = transition2Ref.current?.querySelector('.transition-content');
    if (transition2Content) {
      gsap.fromTo(transition2Content,
        { y: 80, opacity: 0 },
        {
          y: -80,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: transition2Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          }
        }
      );
    }

    // Projects section - scale up reveal
    gsap.from(projectsRef.current.querySelector('.projects-inner'), {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 85%",
        end: "top 20%",
        scrub: 0.5,
      },
      scale: 0.9,
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
      <Sidebar />
      <div className="home-container" ref={containerRef}>
        {/* Landing Section */}
        <section className="home-section section-landing" ref={landingRef}>
          <Landing />
        </section>

        {/* Transition 1: Landing to Announcements */}
        <section className="transition-section" ref={transition1Ref}>
          <div className="transition-content">
            <div className="transition-line" />
            <span className="transition-text">STAY UPDATED</span>
            <div className="transition-line" />
          </div>
        </section>

        {/* Announcements Section */}
        <section id="announcements" className="home-section section-announcements" ref={announcementsRef}>
          <div className="announcements-inner">
            <Announcements />
          </div>
        </section>

        {/* Transition 2: Announcements to Projects */}
        <section className="transition-section" ref={transition2Ref}>
          <div className="transition-content">
            <div className="transition-line" />
            <span className="transition-text">EXPLORE OUR WORK</span>
            <div className="transition-line" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="home-section section-projects" ref={projectsRef}>
          <div className="projects-inner">
            <Projects />
          </div>
        </section>

        {/* Footer */}
        <footer className="home-footer">
          <p className="footer-meetings">Weekly Meetings on Wednesday @ 11:00 AM - 12:30 PM</p>
          <p className="footer-location">1900 Pico Blvd, Santa Monica, CA 90405</p>
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

        .section-announcements {
          z-index: 2;
        }

        .section-projects {
          z-index: 1;
        }

        .announcements-inner,
        .projects-inner {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Transition Sections - spacers with parallax content */
        .transition-section {
          position: relative;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .transition-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 3vw, 2rem);
          width: 100%;
          max-width: 1200px;
          padding: 0 2rem;
        }

        .transition-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(15, 181, 136, 0.4), transparent);
          max-width: 300px;
        }

        .transition-text {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(12px, 1.8vw, 20px);
          color: rgba(241, 245, 249, 0.4);
          letter-spacing: 0.3em;
          white-space: nowrap;
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

        .footer-meetings,
        .footer-location {
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

        @media (max-width: 768px) {
          .transition-section {
            height: 30vh;
          }

          .transition-content {
            flex-direction: column;
            gap: 1rem;
          }

          .transition-line {
            width: 80px;
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
