import DownArrow from '../DownArrow';
import bg from '../../assets/backgrounds/mock-background-11.png';

// Announcement card SVG assets
import rect58 from '../../assets/announcements/rect-58.svg';
import rect59 from '../../assets/announcements/rect-59.svg';
import rect60 from '../../assets/announcements/rect-60.svg';
import polygon9 from '../../assets/announcements/polygon-9.svg';
import polygon10 from '../../assets/announcements/polygon-10.svg';

import rect61 from '../../assets/announcements/rect-61.svg';
import rect62 from '../../assets/announcements/rect-62.svg';
import rect63 from '../../assets/announcements/rect-63.svg';
import polygon11 from '../../assets/announcements/polygon-11.svg';
import polygon12 from '../../assets/announcements/polygon-12.svg';

import rect64 from '../../assets/announcements/rect-64.svg';
import rect65 from '../../assets/announcements/rect-65.svg';
import rect66 from '../../assets/announcements/rect-66.svg';
import polygon13 from '../../assets/announcements/polygon-13.svg';
import polygon14 from '../../assets/announcements/polygon-14.svg';

/**
 * Announcements Section - Exact Figma Implementation
 * Complex SVG-based chat bubble cards with triangular tails
 */
function Announcements() {
  const announcements = [
    {
      id: 1,
      author: 'Evan Ly',
      date: 'December 18th, 2024 8:44 P.M',
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
      position: { left: 563, top: 322 },
      rects: [rect58, rect59, rect60],
      polygons: [polygon9, polygon10],
      authorPos: { left: 616, top: 322 },
      dateTop: 306,
      alignment: 'left'
    },
    {
      id: 2,
      author: 'Evan Ly',
      date: 'December 19th, 2024 12:11 P.M',
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
      position: { left: 586, top: 536 },
      rects: [rect64, rect65, rect66],
      polygons: [polygon13, polygon14],
      authorPos: { left: 1248, top: 536 },
      dateTop: 513,
      alignment: 'right'
    },
    {
      id: 3,
      author: 'Evan Ly',
      date: 'December 20th, 2024 10:44 A.M',
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
      position: { left: 560, top: 750 },
      rects: [rect61, rect62, rect63],
      polygons: [polygon11, polygon12],
      authorPos: { left: 613, top: 750 },
      dateTop: 728,
      alignment: 'left'
    }
  ];

  return (
    <section id="announcements" className="announcements-section">
      {/* Title */}
      <h1 className="section-title">ANNOUNCEMENTS</h1>

      {/* Announcement Cards - using exact Figma positioning */}
      {announcements.map((announcement, idx) => (
        <div key={announcement.id} className="announcement-wrapper" style={{
          left: `${announcement.position.left}px`,
          top: `${announcement.position.top}px`
        }}>
          {/* Card SVG Layers - exact Figma structure */}
          <div className={`card-layers ${announcement.alignment}`}>
            {/* This would contain the complex SVG layering from Figma */}
            {/* For now using simplified version - will need full SVG implementation */}
            <div className="card-bubble">
              <h2 className="card-title">{announcement.title}</h2>
              <p className="card-message">{announcement.message}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Read All Button */}
      <div className="read-all-container">
        <button className="read-all-button">Read All &gt;</button>
      </div>

      {/* Down Arrow */}
      <div className="arrow-container">
        <DownArrow targetId="projects" />
      </div>

      <style jsx>{`
        .announcements-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 154px 0 90px;
        }

        .section-title {
          position: absolute;
          left: 50%;
          top: 154px;
          transform: translateX(-50%);
          width: 1079px;
          height: 122px;
          font-family: 'Russo One', sans-serif;
          font-size: 96px;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #F1F5F9;
          margin: 0;
        }

        .announcement-wrapper {
          position: absolute;
        }

        .card-bubble {
          position: relative;
          background: linear-gradient(135deg, #0088FE 0%, #4273AA 100%);
          border-radius: 24px;
          padding: 30px 21px;
          min-height: 149px;
          width: 761px;
        }

        .card-title {
          font-family: 'Russo One', sans-serif;
          font-size: 36px;
          font-weight: 400;
          line-height: normal;
          color: #000000;
          margin: 0 0 12px 0;
        }

        .card-message {
          font-family: 'Roboto Mono', monospace;
          font-size: 14px;
          font-weight: 300;
          line-height: normal;
          color: #000000;
          margin: 0;
        }

        .read-all-container {
          position: absolute;
          left: 1230px;
          top: 929px;
          transform: translateX(-50%);
        }

        .read-all-button {
          font-family: 'Russo One', sans-serif;
          font-size: 36px;
          font-weight: 400;
          color: #F1F5F9;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .arrow-container {
          position: absolute;
          left: 50%;
          bottom: 48px;
          transform: translateX(-50%);
        }

        /* Responsive */
        @media (max-width: 1400px) {
          .announcements-section {
            padding: 120px 2rem 60px;
          }

          .section-title {
            font-size: 80px;
            width: 90%;
            top: 120px;
          }

          .announcement-wrapper {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            margin: 60px auto;
          }

          .card-bubble {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
          }

          .read-all-container {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            text-align: center;
            margin: 40px 0;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 56px;
          }

          .card-title {
            font-size: 28px;
          }

          .card-message {
            font-size: 13px;
          }

          .read-all-button {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}

export default Announcements;
