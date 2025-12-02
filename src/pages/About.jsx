import meeting from '../assets/About/meeting.png'
import logo from '../assets/About/logo.jpg'

function About() {
  return (
    <main className="about-page">
      <div className="about-content">
        {/* Left side - Text content */}
        <div className="text-section">
          <h1 className="about-title">ABOUT US</h1>

          <div className="about-text">
            <section>
              <h2>Description:</h2>
              <p>
                Our club brings together students who are passionate about
                computer science and technology. We organize workshops,
                hackathons, and social events to help members learn new skills,
                collaborate, and explore career opportunities in tech.
              </p>
            </section>

            <section>
              <h2>Mission Statement:</h2>
              <p>
                To create a supportive and inclusive space where students can
                grow their technical and professional skills while building
                lasting connections through shared curiosity and creativity.
              </p>
            </section>

            <section>
              <h2>Goals:</h2>
              <p>
                – Host coding workshops and guest speaker events. <br />
                – Encourage collaboration on open-source or student projects. <br />
                – Help members prepare for internships and tech interviews. <br />
                – Promote diversity and accessibility in STEM fields.
              </p>
            </section>

            <section>
              <h2>Advisors:</h2>
              <p>Prof. John Doe and Dr. Jane Smith</p>
            </section>

            <section>
              <h2>Affiliated Organizations:</h2>
              <p>Santa Monica College Computer Science Department, ACM</p>
            </section>
          </div>
        </div>

        {/* Right side - Image cluster */}
        <div className="image-section">
          <div className="image-cluster">
            <div className="image-card image-card-1">
              <div className="image-shadow" />
              <img src={meeting} alt="CS Club meeting" />
            </div>

            <div className="image-card image-card-2">
              <div className="image-shadow" />
              <img src={logo} alt="CS Club logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <p className="footer-meetings">Weekly Meetings on Thursday @ 11:15 AM - 12:30 PM</p>
        <p className="footer-location">1900 Pico Blvd, Santa Monica, CA 90405, Drescher Hall 305</p>
      </footer>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: transparent;
          padding: clamp(100px, 8vw, 140px) clamp(24px, 5vw, 80px) 0;
          overflow-x: hidden;
        }

        .about-content {
          flex: 1;
          display: flex;
          flex-direction: row;
          gap: clamp(40px, 5vw, 100px);
          align-items: flex-start;
          max-width: 1800px;
          margin: 0 auto;
        }

        .text-section {
          flex: 1;
          min-width: 0;
        }

        .about-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(48px, 7vw, 130px);
          font-weight: 400;
          line-height: 100%;
          color: #F1F5F9;
          margin: 0 0 clamp(32px, 4vw, 70px) 0;
          text-align: center;
        }

        .about-text {
          font-family: 'Roboto Mono', ui-monospace, monospace;
          font-size: clamp(14px, 1.15vw, 20px);
          line-height: 175%;
          color: #F1F5F9;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.5vw, 45px);
        }

        .about-text section h2 {
          font-size: clamp(18px, 1.5vw, 28px);
          font-weight: 600;
          color: #66C48A;
          margin: 0 0 clamp(8px, 0.8vw, 14px) 0;
        }

        .about-text section p {
          margin: 0;
        }

        .image-section {
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          padding-top: clamp(16px, 2vw, 40px);
        }

        .image-cluster {
          position: relative;
          width: clamp(280px, 28vw, 500px);
          height: clamp(400px, 40vw, 700px);
        }

        .image-card {
          position: absolute;
          transition: transform 0.5s ease;
        }

        .image-card:hover {
          transform: translateY(-10px);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: clamp(12px, 1.2vw, 24px);
        }

        .image-shadow {
          position: absolute;
          inset: 0;
          border-radius: clamp(14px, 1.4vw, 28px);
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          z-index: -1;
          transform: translate(clamp(6px, 0.6vw, 12px), clamp(6px, 0.6vw, 12px));
        }

        .image-card-1 {
          top: 0;
          left: 0;
          width: clamp(220px, 22vw, 400px);
          height: clamp(260px, 26vw, 460px);
          z-index: 10;
        }

        .image-card-2 {
          top: clamp(120px, 12vw, 220px);
          left: clamp(80px, 9vw, 160px);
          width: clamp(180px, 18vw, 320px);
          height: clamp(220px, 22vw, 380px);
          z-index: 20;
        }

        /* Tablet and below - stack vertically */
        @media (max-width: 1024px) {
          .about-content {
            flex-direction: column;
            gap: 50px;
          }

          .about-title {
            font-size: clamp(40px, 10vw, 80px);
            margin-bottom: 30px;
          }

          .about-text {
            font-size: clamp(14px, 2.5vw, 18px);
            gap: 24px;
          }

          .about-text section h2 {
            font-size: clamp(16px, 3.5vw, 24px);
            margin-bottom: 10px;
          }

          .image-section {
            width: 100%;
            justify-content: center;
            padding-top: 0;
          }

          .image-cluster {
            width: min(500px, 85vw);
            height: min(650px, 110vw);
          }

          .image-card-1 {
            width: min(380px, 65vw);
            height: min(450px, 75vw);
          }

          .image-card-2 {
            top: min(250px, 42vw);
            left: min(150px, 28vw);
            width: min(320px, 55vw);
            height: min(380px, 62vw);
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .about-page {
            padding: 100px 20px 0;
          }

          .about-title {
            font-size: 13vw;
          }

          .about-text {
            font-size: 15px;
            gap: 20px;
          }

          .about-text section h2 {
            font-size: 18px;
          }
        }

        /* Footer */
        .page-footer {
          position: relative;
          width: 100vw;
          margin-left: calc(-1 * clamp(24px, 5vw, 80px));
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: clamp(1.5rem, 3vh, 2rem) clamp(1rem, 8vw, 145px);
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vh, 1rem);
          box-sizing: border-box;
          margin-top: clamp(3rem, 5vh, 5rem);
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

        @media (max-width: 640px) {
          .page-footer {
            margin-left: -20px;
          }
        }
      `}</style>
    </main>
  )
}

export default About
