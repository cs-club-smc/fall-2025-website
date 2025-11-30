import topPhoto from '../assets/about/image-6.png';
import bottomPhoto from '../assets/about/whatsapp-image.png';
import maskPolaroid from '../assets/about/image-5.svg';
import maskRounded from '../assets/about/rectangle-33.svg';

/**
 * About Page - Exact Figma Implementation
 * Text content on left, layered photos on right
 */
function About() {
  return (
    <div className="about-page">
      {/* Title */}
      <h1 className="page-title">ABOUT US</h1>

      {/* Text Content */}
      <div className="text-content">
        <p className="text-section">Description Of the Club</p>
        <p className="text-paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <br />

        <p className="text-section">Mission Statement</p>
        <p className="text-paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <br />

        <p className="text-section">Goals</p>
        <p className="text-paragraph">
          "Lorem ipsum dolor sit amet afowaifawi aofiwafioafafaoifafoafaifbiawofbao foaifbwoaa teoaifbwaoi
        </p>
        <br />

        <p className="text-section">Advisors</p>
        <p className="text-paragraph">
          "Lorem ipsum dolor sit amet
        </p>
        <br />

        <p className="text-section">Affiliated Organizations</p>
        <p className="text-paragraph">
          "Lorem ipsum dolor
        </p>
      </div>

      {/* Top Polaroid Photo with Mask */}
      <div className="photo-polaroid">
        <img src={topPhoto} alt="CS Club" className="polaroid-img" />
      </div>

      {/* Dark Rounded Rectangle Overlay */}
      <div className="dark-overlay" />

      {/* Bottom Photo with Rounded Mask */}
      <div className="photo-bottom">
        <img src={bottomPhoto} alt="CS Club event" className="bottom-img" />
      </div>

      <style jsx>{`
        .about-page {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .page-title {
          position: absolute;
          left: 278px;
          top: 199px;
          width: 553px;
          height: 133px;
          font-family: 'Russo One', sans-serif;
          font-size: 100px;
          font-weight: 400;
          line-height: normal;
          color: #F1F5F9;
          margin: 0;
        }

        .text-content {
          position: absolute;
          left: 278px;
          top: 377px;
          width: 642px;
          height: 441px;
          font-family: 'Roboto Mono', monospace;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          color: #F1F5F9;
        }

        .text-section {
          margin: 0 0 4px 0;
        }

        .text-paragraph {
          margin: 0 0 4px 0;
        }

        /* Top Polaroid Photo */
        .photo-polaroid {
          position: absolute;
          left: 1036px;
          top: 199px;
          width: 413px;
          height: 531px;
          -webkit-mask-image: url(${maskPolaroid});
          mask-image: url(${maskPolaroid});
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        }

        .polaroid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Dark Rounded Rectangle Overlay */
        .dark-overlay {
          position: absolute;
          left: 1309px;
          top: 397px;
          width: 472px;
          height: 588px;
          background: #060612;
          border-radius: 62px;
          -webkit-mask-image: url(${maskRounded});
          mask-image: url(${maskRounded});
          -webkit-mask-size: 472px 644px;
          mask-size: 472px 644px;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: 0px -35px;
          mask-position: 0px -35px;
        }

        /* Bottom Photo with Rounded Mask */
        .photo-bottom {
          position: absolute;
          left: 1221px;
          top: 472px;
          width: 592px;
          height: 413px;
          -webkit-mask-image: url(${maskRounded});
          mask-image: url(${maskRounded});
          -webkit-mask-size: 472px 644px;
          mask-size: 472px 644px;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: 88px -110px;
          mask-position: 88px -110px;
        }

        .bottom-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Responsive */
        @media (max-width: 1920px) {
          .about-page {
            overflow-x: hidden;
          }

          .background {
            width: 100%;
            min-width: 1920px;
          }
        }

        @media (max-width: 1400px) {
          .page-title {
            font-size: 80px;
            width: 450px;
            left: 150px;
          }

          .text-content {
            left: 150px;
            width: 500px;
            font-size: 14px;
          }

          .photo-polaroid {
            left: 850px;
            transform: scale(0.85);
          }

          .dark-overlay {
            left: 1050px;
            transform: scale(0.85);
          }

          .photo-bottom {
            left: 980px;
            transform: scale(0.85);
          }
        }

        @media (max-width: 1024px) {
          .page-title {
            position: relative;
            left: auto;
            top: auto;
            font-size: 64px;
            width: 360px;
            margin: 100px auto 40px;
          }

          .text-content {
            position: relative;
            left: auto;
            top: auto;
            width: 90%;
            max-width: 600px;
            margin: 0 auto 50px;
            font-size: 14px;
          }

          .photo-polaroid,
          .dark-overlay,
          .photo-bottom {
            position: relative;
            left: 50%;
            top: auto;
            transform: translateX(-50%) scale(0.7);
            margin: 20px auto;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 48px;
            width: 280px;
          }

          .text-content {
            font-size: 13px;
          }

          .photo-polaroid,
          .dark-overlay,
          .photo-bottom {
            transform: translateX(-50%) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}

export default About;
