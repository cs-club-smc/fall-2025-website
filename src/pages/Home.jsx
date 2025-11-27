import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Landing from "../components/Home/Landing";
import Announcements from "../components/Home/Announcements";
import Projects from "../components/Home/Projects";
import Sidebar from "../components/Sidebar";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Parallax effect for landing section
  const landingY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const landingOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Dramatic animation variants
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 150,
      scale: 0.8,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom easing curve
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Sidebar />
      <div ref={ref} className="home-container">
      {/* Landing Section - Parallax fade out on scroll */}
      <motion.div
        className="min-h-screen mb-32"
        style={{ y: landingY, opacity: landingOpacity }}
      >
        <Landing/>
      </motion.div>

      {/* Announcements Section - Dramatic entrance */}
      <motion.div
        className="min-h-screen mb-32 perspective-1000"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Announcements />
      </motion.div>

      {/* Projects Section - Dramatic entrance */}
      <motion.div
        id="projects"
        className="min-h-screen perspective-1000"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
       <Projects />
      </motion.div>

      {/* Footer - At bottom of page content, not animated */}
      <footer className="home-footer">
        <p className="footer-meetings">Weekly Meetings on Thursday @ 11:15 AM - 12:30 PM</p>
        <p className="footer-location">1900 Pico Blvd, Santa Monica, CA 90405, Drescher Hall 305</p>
      </footer>

      <style jsx>{`
        .home-container {
          position: relative;
          min-height: 100vh;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .home-footer {
          position: relative;
          width: 100%;
          height: 78px;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 145px;
          z-index: 5;
        }

        .footer-meetings,
        .footer-location {
          font-family: 'Roboto Mono', monospace;
          font-size: 24px;
          font-weight: 300;
          color: #F1F5F9;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .home-footer {
            flex-direction: column;
            gap: 12px;
            padding: 20px;
            text-align: center;
            height: auto;
          }

          .footer-meetings,
          .footer-location {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .footer-meetings,
          .footer-location {
            font-size: 14px;
          }
        }
      `}</style>
      </div>
    </>
  );
}

export default Home;
