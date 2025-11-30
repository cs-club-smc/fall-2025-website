import line3 from '../assets/team/line-3.svg';

const boardMembers = [
  { name: "Evan Ly Cheang", role: "Co-President" },
  { name: "Kai Shimoda", role: "Co-President" },
  { name: "Sean Esla", role: "Vice President" },
  { name: "Aidana Kudaibergenova", role: "ICC Delegate" },
  { name: "Akua Baryeh", role: "Publicity Officer" },
  { name: "Kathleen Gantasia", role: "Secretary" },
  { name: "Ryon Chan", role: "Treasurer" },
];

/**
 * Team Page - Modern Responsive Implementation
 * CSS Grid layout with fluid typography and natural scrolling
 */
function Team() {
  return (
    <div className="team-page">
      {/* Title */}
      <h1 className="page-title">OUR TEAM</h1>

      {/* Title Underline */}
      <div className="title-underline">
        <img src={line3} alt="" />
      </div>

      {/* Cards Grid Container */}
      <div className="cards-grid">
        {boardMembers.map((member, index) => (
          <div
            key={member.name}
            className="card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-bg" />
            <div className="name-area">
              <p className="member-name">{member.name}</p>
            </div>
            <p className="role-title">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="bottom-line">
        <img src={line3} alt="" />
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <p className="footer-meetings">Weekly Meetings on Thursday @ 11:15 AM - 12:30 PM</p>
        <p className="footer-location">1900 Pico Blvd, Santa Monica, CA 90405, Drescher Hall 305</p>
      </footer>

      <style jsx>{`
        .team-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: clamp(2rem, 7.5vh, 9rem) clamp(1.5rem, 5vw, 5rem) 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }

        .page-title {
          width: fit-content;
          font-family: 'Russo One', sans-serif;
          font-size: clamp(3rem, 5.2vw, 6.25rem);
          font-weight: 400;
          line-height: normal;
          color: #F1F5F9;
          margin: 0 0 clamp(1rem, 2vh, 2rem) 0;
          text-align: center;
        }

        .title-underline {
          width: clamp(300px, 33.6vw, 646px);
          height: 3px;
          margin-bottom: clamp(2rem, 4vh, 4rem);
        }

        .title-underline img {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Cards Grid - Modern Responsive Layout */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 367px));
          gap: clamp(1.5rem, 3vw, 3rem);
          justify-content: center;
          width: 100%;
          max-width: 1600px;
          margin-bottom: clamp(2rem, 4vh, 4rem);
        }

        /* Force 3 columns on large screens */
        @media (min-width: 1200px) {
          .cards-grid {
            grid-template-columns: repeat(3, minmax(320px, 367px));
          }
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes borderCycle {
          0% {
            border-color: #66C48A;
            box-shadow: 0 4px 25px rgba(102, 196, 138, 0.4);
          }
          25% {
            border-color: #4ECDC4;
            box-shadow: 0 4px 25px rgba(78, 205, 196, 0.4);
          }
          50% {
            border-color: #45B7D1;
            box-shadow: 0 4px 25px rgba(69, 183, 209, 0.4);
          }
          75% {
            border-color: #96E6A1;
            box-shadow: 0 4px 25px rgba(150, 230, 161, 0.4);
          }
          100% {
            border-color: #66C48A;
            box-shadow: 0 4px 25px rgba(102, 196, 138, 0.4);
          }
        }

        /* Officer Cards */
        .card {
          position: relative;
          width: 100%;
          max-width: 367px;
          justify-self: center;
          opacity: 0;
          animation:
            cardAppear 0.6s ease-out forwards,
            float 3.5s ease-in-out 0.6s infinite;
        }

        .card-bg {
          width: 100%;
          aspect-ratio: 367 / 533;
          background: #F1F5F9;
          border: 5px solid #66C48A;
          border-radius: 12px;
          animation: borderCycle 6s ease-in-out infinite;
        }

        .name-area {
          position: absolute;
          left: 4.6%;
          top: 5.25%;
          width: 90.7%;
          height: 76.4%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .member-name {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1.5rem, 2vw, 2rem);
          font-weight: 400;
          line-height: 1.3;
          text-align: center;
          color: #000000;
          margin: 0;
          padding: 1rem;
        }

        .role-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 5.25%;
          width: 78.7%;
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1.25rem, 1.5vw, 1.5rem);
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #000000;
          margin: 0;
        }

        /* Bottom Line */
        .bottom-line {
          width: clamp(300px, 91.4vw, 1754px);
          height: 5px;
          margin-top: auto;
        }

        .bottom-line img {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Tablet - 2 Column Layout */
        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, minmax(280px, 367px));
            gap: clamp(1.25rem, 2.5vw, 2.5rem);
          }

          .page-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }
        }

        /* Mobile - Single Column Layout */
        @media (max-width: 768px) {
          .team-page {
            padding: clamp(1.5rem, 5vh, 3rem) clamp(1rem, 4vw, 2rem) 0;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: clamp(1rem, 2vh, 2rem);
            max-width: 400px;
          }

          .page-title {
            font-size: clamp(2rem, 7vw, 3rem);
            margin-bottom: clamp(0.75rem, 1.5vh, 1.5rem);
          }

          .title-underline {
            margin-bottom: clamp(1.5rem, 3vh, 3rem);
          }

          .role-title {
            font-size: clamp(1rem, 4vw, 1.25rem);
          }
        }

        /* Footer */
        .page-footer {
          position: relative;
          width: 100vw;
          margin-left: calc(-1 * clamp(1.5rem, 5vw, 5rem));
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: clamp(1.5rem, 3vh, 2rem) clamp(1rem, 8vw, 145px);
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vh, 1rem);
          box-sizing: border-box;
          margin-top: clamp(2rem, 4vh, 4rem);
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
          .page-footer {
            flex-direction: column;
            text-align: center;
            padding: clamp(1rem, 3vh, 1.5rem) clamp(1rem, 5vw, 2rem);
          }
        }

        @media (max-width: 768px) {
          .page-footer {
            margin-left: calc(-1 * clamp(1rem, 4vw, 2rem));
          }
        }
      `}</style>
    </div>
  );
}

export default Team;
