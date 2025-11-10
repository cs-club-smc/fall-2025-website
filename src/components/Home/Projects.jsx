import { Link } from "react-router-dom";
/**
 * Projects Section - Figma Implementation
 * Project blocks grid on left, description on right, footer at bottom
 */
function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Projects Blocks - Left Side */}
      <div className="blocks-container">
        <div className="block block-1"></div>
        <div className="block block-2"></div>
        <div className="block block-3"></div>
        <div className="block block-4"></div>
        <div className="block block-5"></div>
      </div>

      {/* Description - Right Side */}
      <div className="description-container">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Link to="/ProjectsPage"><button className="see-projects-button" to='/ProjectsPage'>See Projects</button></Link>
      </div>

      <style jsx>{`
        .projects-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 170px 0 0;
        }

        /* Blocks Container */
        .blocks-container {
          position: absolute;
          left: 291px;
          top: 170px;
          width: 740px;
          height: 768px;
        }

        .block {
          position: absolute;
        }

        /* Block 1 - Top left small */
        .block-1 {
          left: 0;
          top: 178px;
          width: 140px;
          height: 131px;
          background: #0FB588;
          border-radius: 26px;
        }

        /* Block 2 - Top right large */
        .block-2 {
          left: 424px;
          top: 0;
          width: 316px;
          height: 296px;
          background: #66C48A;
          border-radius: 87px;
        }

        /* Block 3 - Center tall */
        .block-3 {
          left: 169px;
          top: 94px;
          width: 438px;
          height: 540px;
          background: #014B51;
          border-radius: 117px;
        }

        /* Block 4 - Bottom left */
        .block-4 {
          left: 4px;
          top: 488px;
          width: 299px;
          height: 280px;
          background: #66C48A;
          border-radius: 87px;
        }

        /* Block 5 - Bottom right tiny */
        .block-5 {
          left: 343px;
          top: 662px;
          width: 89px;
          height: 84px;
          background: #0FB588;
          border-radius: 26px;
        }

        /* Description Container */
        .description-container {
          position: absolute;
          left: 1106px;
          top: 225px;
          width: 676px;
        }

        .projects-title {
          font-family: 'Russo One', sans-serif;
          font-size: 128px;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #F1F5F9;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: 0 0 40px 0;
        }

        .projects-description {
          font-family: 'Roboto Mono', monospace;
          font-size: 24px;
          font-weight: 300;
          line-height: normal;
          color: #F1F5F9;
          margin: 0 0 50px 0;
        }

        .see-projects-button {
          width: 349px;
          height: 70px;
          background: #66C48A;
          border: none;
          border-radius: 21px;
          font-family: 'Russo One', sans-serif;
          font-size: 24px;
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

        /* Responsive */
        @media (max-width: 1400px) {
          .blocks-container {
            left: 100px;
            transform: scale(0.8);
          }

          .description-container {
            left: 800px;
            width: 500px;
          }

          .projects-title {
            font-size: 96px;
          }

          .projects-description {
            font-size: 20px;
          }
        }

        @media (max-width: 1024px) {
          .projects-section {
            padding: 120px 2rem 0;
          }

          .blocks-container {
            position: relative;
            left: 50%;
            transform: translateX(-50%) scale(0.7);
            margin-bottom: 60px;
          }

          .description-container {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          }

          .projects-title {
            font-size: 72px;
          }

          .projects-description {
            font-size: 18px;
          }

          .see-projects-button {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .blocks-container {
            transform: translateX(-50%) scale(0.5);
          }

          .projects-title {
            font-size: 56px;
          }

          .projects-description {
            font-size: 16px;
          }

          .see-projects-button {
            width: 280px;
            height: 60px;
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
