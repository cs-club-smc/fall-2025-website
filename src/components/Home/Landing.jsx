import DownArrow from '../DownArrow';
import benefitIcon1 from '../../assets/icons/benefit-icon-1.svg';
import benefitIcon2 from '../../assets/icons/benefit-icon-2.svg';
import benefitIcon3 from '../../assets/icons/benefit-icon-3.svg';

/**
 * Landing Component
 * Main hero section of the home page - exact Figma implementation
 */
function Landing() {
  return (
    <div className="landing-container">
      {/* Main Content */}
      <div className="content-wrapper">
        {/* Hero Title */}
        <h1 className="hero-title">
          <div>SMC</div>
          <div>CS CLUB</div>
        </h1>

        {/* Mission Statement */}
        <p className="mission-text">
          Inspiring excellence through technology and teamwork. SMC CS Club is where passionate individuals come together to learn, innovate, and lead in the field of computer science.
        </p>

        {/* Benefits Section */}
        <div className="benefits-container">
          {/* Knowledge */}
          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <img src={benefitIcon1} alt="Knowledge" className="benefit-icon" />
            </div>
            <p className="benefit-label">Knowledge</p>
          </div>

          {/* Experience */}
          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <img src={benefitIcon2} alt="Experience" className="benefit-icon" />
            </div>
            <p className="benefit-label">Experience</p>
          </div>

          {/* Networking */}
          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <img src={benefitIcon3} alt="Networking" className="benefit-icon" />
            </div>
            <p className="benefit-label">Networking</p>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="arrow-wrapper">
          <DownArrow targetId="announcements" />
        </div>
      </div>

      <style jsx>{`
        .landing-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 1080px;
          overflow: hidden;
        }

        /* Content */
        .content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        /* Hero Title */
        .hero-title {
          position: absolute;
          left: 50%;
          top: 243px;
          transform: translateX(-50%);
          width: 1115px;
          height: 443px;
          font-family: 'Russo One', sans-serif;
          font-size: 200px;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #F1F5F9;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: 0;
        }

        .hero-title div {
          margin: 0;
        }

        /* Mission Text */
        .mission-text {
          position: absolute;
          left: 50%;
          top: 742px;
          transform: translateX(-50%);
          width: 1131px;
          height: 58px;
          font-family: 'Russo One', sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #F1F5F9;
          margin: 0;
        }

        /* Benefits */
        .benefits-container {
          position: absolute;
          top: 857px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(3rem, 18.8vw, 361px);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .benefit-icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0FB588 0%, #0088FE 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .benefit-icon {
          width: 28px;
          height: 28px;
          filter: brightness(0) invert(1);
        }

        .benefit-label {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1.25rem, 1.5vw, 1.5rem);
          font-weight: 400;
          line-height: normal;
          color: #F1F5F9;
          margin: 0;
          white-space: nowrap;
        }

        /* Arrow */
        .arrow-wrapper {
          position: absolute;
          left: 50%;
          bottom: 48px;
          transform: translateX(-50%);
        }

        /* Responsive Adjustments */
        @media (max-width: 1400px) {
          .hero-title {
            font-size: 160px;
            width: 900px;
            top: 200px;
          }

          .mission-text {
            font-size: 20px;
            width: 900px;
            top: 650px;
          }

          .benefits-container {
            top: 750px;
          }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 120px;
            width: 700px;
            top: 180px;
          }

          .mission-text {
            font-size: 18px;
            width: 700px;
            top: 550px;
          }

          .benefits-container {
            top: 680px;
          }
        }

        @media (max-width: 768px) {
          .landing-container {
            min-height: 100vh;
          }

          .hero-title {
            font-size: 72px;
            width: 90%;
            top: 120px;
          }

          .mission-text {
            font-size: 16px;
            width: 90%;
            top: 400px;
            height: auto;
          }

          .benefits-container {
            top: 500px;
            flex-direction: column;
            gap: 2rem;
            padding: 0 1rem;
          }

          .benefit-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .benefit-icon {
            width: 22px;
            height: 22px;
          }

          .arrow-wrapper {
            bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 48px;
            top: 100px;
          }

          .mission-text {
            font-size: 14px;
            top: 320px;
          }
        }
      `}</style>
    </div>
  );
}

export default Landing;
