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

function Team() {
  return (
    <div className="team-page">
      <h1 className="page-title">OUR TEAM</h1>

      <div className="title-underline">
        <img src={line3} alt="" />
      </div>

      <div className="cards-grid">
        {boardMembers.map((member, index) => (
          <div
            key={member.name}
            className="card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="member-name">{member.name}</p>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="bottom-line">
        <img src={line3} alt="" />
      </div>

      <style jsx>{`
        .team-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: clamp(8rem, 12vh, 12rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 5vh, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .page-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(3rem, 5.2vw, 6.25rem);
          font-weight: 400;
          color: #F1F5F9;
          margin: 0 0 clamp(1rem, 2vh, 2rem) 0;
          text-align: center;
        }

        .title-underline {
          width: clamp(300px, 33.6vw, 646px);
          height: 3px;
          margin-bottom: clamp(3rem, 5vh, 5rem);
        }

        .title-underline img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
          gap: clamp(1.5rem, 3vw, 2.5rem);
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin-bottom: clamp(3rem, 5vh, 5rem);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: clamp(1.5rem, 2vw, 2rem) clamp(1.25rem, 2vw, 1.75rem);
          text-align: center;
          animation: float 4s ease-in-out infinite;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .card:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(102, 196, 138, 0.4);
        }

        .member-name {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1.25rem, 1.8vw, 1.5rem);
          color: #F1F5F9;
          margin: 0 0 0.5rem 0;
        }

        .member-role {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(0.9rem, 1.2vw, 1rem);
          color: #66C48A;
          margin: 0;
          font-weight: 500;
        }

        .bottom-line {
          width: clamp(300px, 80vw, 1200px);
          height: 3px;
          margin-top: auto;
        }

        .bottom-line img {
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 768px) {
          .team-page {
            padding: clamp(7rem, 10vh, 9rem) clamp(1rem, 4vw, 2rem);
          }

          .cards-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;
