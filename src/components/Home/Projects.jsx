import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Projects Section - Responsive flexbox layout with fluid scaling
 * Now wrapped by parent for scroll animations
 */
function Projects() {
  return (
    <div className="projects-section">
      {/* Blurred content wrapper */}
      <div className="content-blur">
        <div className="projects-layout">
          {/* Projects Blocks - decorative shapes with stagger */}
          <div className="blocks-container">
            <div className="blocks-inner">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <motion.div
                  key={num}
                  className={`block block-${num}`}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: num % 2 === 0 ? 5 : -5,
                    transition: { duration: 0.3 }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="description-container">
            <motion.h1
              className="projects-title"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              PROJECTS
            </motion.h1>
            <motion.p
              className="projects-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link to="/ProjectsPage">
                <motion.button
                  className="see-projects-button"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Coming soon overlay */}
      <div className="coming-soon-overlay">
        <h2 className="coming-soon-text">Coming Spring 2026</h2>
      </div>

      <style jsx>{`
        .projects-section {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 5vh, 4rem) clamp(1rem, 5vw, 3rem);
          box-sizing: border-box;
        }

        .content-blur {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: blur(8px);
          opacity: 0.5;
          pointer-events: none;
        }

        .coming-soon-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .coming-soon-text {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(32px, 6vw, 96px);
          color: #F1F5F9;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          text-align: center;
          margin: 0;
        }

        .projects-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(2rem, 5vw, 6rem);
          width: 100%;
          max-width: 1600px;
        }

        /* Blocks Container - scales with viewport */
        .blocks-container {
          flex-shrink: 0;
          width: clamp(280px, 35vw, 500px);
          aspect-ratio: 740 / 768;
        }

        .blocks-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .block {
          position: absolute;
        }

        /* Block 1 - Top left small */
        .block-1 {
          left: 0%;
          top: 23.2%;
          width: 18.9%;
          height: 17.1%;
          background: #0FB588;
          border-radius: clamp(10px, 2vw, 26px);
        }

        /* Block 2 - Top right large */
        .block-2 {
          left: 57.3%;
          top: 0%;
          width: 42.7%;
          height: 38.5%;
          background: #66C48A;
          border-radius: clamp(30px, 6vw, 87px);
        }

        /* Block 3 - Center tall */
        .block-3 {
          left: 22.8%;
          top: 12.2%;
          width: 59.2%;
          height: 70.3%;
          background: #014B51;
          border-radius: clamp(40px, 8vw, 117px);
        }

        /* Block 4 - Bottom left */
        .block-4 {
          left: 0.5%;
          top: 63.5%;
          width: 40.4%;
          height: 36.5%;
          background: #66C48A;
          border-radius: clamp(30px, 6vw, 87px);
        }

        /* Block 5 - Bottom right tiny */
        .block-5 {
          left: 46.4%;
          top: 86.2%;
          width: 12%;
          height: 10.9%;
          background: #0FB588;
          border-radius: clamp(10px, 2vw, 26px);
        }

        /* Description Container */
        .description-container {
          flex: 1;
          max-width: 600px;
          text-align: center;
        }

        .projects-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(40px, 7vw, 128px);
          font-weight: 400;
          line-height: 1.1;
          color: #F1F5F9;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: 0 0 clamp(1rem, 3vh, 2.5rem) 0;
        }

        .projects-description {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(14px, 1.5vw, 24px);
          font-weight: 300;
          line-height: 1.5;
          color: #F1F5F9;
          margin: 0 0 clamp(1.5rem, 4vh, 3rem) 0;
        }

        .see-projects-button {
          width: clamp(200px, 20vw, 349px);
          height: clamp(50px, 5vw, 70px);
          background: #66C48A;
          border: none;
          border-radius: clamp(14px, 1.5vw, 21px);
          font-family: 'Russo One', sans-serif;
          font-size: clamp(16px, 1.5vw, 24px);
          font-weight: 400;
          color: #000000;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .see-projects-button:hover {
          background: #0FB588;
          transform: translateY(-2px);
        }

        /* Stack vertically on smaller screens */
        @media (max-width: 900px) {
          .projects-layout {
            flex-direction: column;
            gap: clamp(2rem, 4vh, 3rem);
          }

          .blocks-container {
            width: clamp(200px, 50vw, 350px);
          }

          .description-container {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
