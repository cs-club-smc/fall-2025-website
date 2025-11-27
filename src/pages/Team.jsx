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
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-bg" />
            <p className="member-name">{member.name}</p>
            <p className="role-title">{member.role}</p>
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
          padding: clamp(2rem, 7.5vh, 9rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 5vh, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
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

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 367px));
          gap: clamp(1.5rem, 3vw, 3rem);
          justify-content: center;
          width: 100%;
          max-width: 1600px;
          margin-bottom: clamp(2rem, 4vh, 4rem);
        }

        @media (min-width: 1200px) {
          .cards-grid {
            grid-template-columns: repeat(3, minmax(320px, 367px));
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

        .card {
          position: relative;
          width: 100%;
          max-width: 367px;
          justify-self: center;
          animation: float 3.5s ease-in-out infinite;
        }

        .card-bg {
          width: 100%;
          aspect-ratio: 367 / 400;
          background: #F1F5F9;
          border-radius: 8px;
        }

        .member-name {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 35%;
          width: 85%;
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1.5rem, 2vw, 2rem);
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #000000;
          margin: 0;
        }

        .role-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 12%;
          width: 78.7%;
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1.25rem, 1.5vw, 1.5rem);
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #000000;
          margin: 0;
        }

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

        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, minmax(280px, 367px));
            gap: clamp(1.25rem, 2.5vw, 2.5rem);
          }

          .page-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }
        }

        @media (max-width: 768px) {
          .team-page {
            padding: clamp(1.5rem, 5vh, 3rem) clamp(1rem, 4vw, 2rem);
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
      `}</style>
    </div>
  );
}

export default Team;
