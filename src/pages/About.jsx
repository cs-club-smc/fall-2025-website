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

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: transparent;
          padding: 8vw 5vw 5vw 5vw;
        }

        .about-content {
          display: flex;
          flex-direction: row;
          gap: 5vw;
          align-items: flex-start;
          height: 100%;
        }

        .text-section {
          flex: 1;
          min-width: 0;
        }

        .about-title {
          font-family: 'Russo One', sans-serif;
          font-size: 8vw;
          font-weight: 400;
          line-height: 100%;
          color: #F1F5F9;
          margin: 0 0 4vw 0;
          text-align: left;
        }

        .about-text {
          font-family: 'Roboto Mono', ui-monospace, monospace;
          font-size: 1.1vw;
          line-height: 180%;
          color: #F1F5F9;
          display: flex;
          flex-direction: column;
          gap: 2.5vw;
        }

        .about-text section h2 {
          font-size: 1.5vw;
          font-weight: 600;
          color: #66C48A;
          margin: 0 0 0.8vw 0;
        }

        .about-text section p {
          margin: 0;
        }

        .image-section {
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          padding-top: 2vw;
        }

        .image-cluster {
          position: relative;
          width: 30vw;
          height: 42vw;
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
          border-radius: 1.5vw;
        }

        .image-shadow {
          position: absolute;
          inset: 0;
          border-radius: 1.8vw;
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          z-index: -1;
          transform: translate(0.8vw, 0.8vw);
        }

        .image-card-1 {
          top: 0;
          left: 0;
          width: 24vw;
          height: 28vw;
          z-index: 10;
        }

        .image-card-2 {
          top: 14vw;
          left: 10vw;
          width: 20vw;
          height: 24vw;
          z-index: 20;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-page {
            padding: 120px 5vw 5vw 5vw;
          }

          .about-content {
            flex-direction: column;
            gap: 8vw;
          }

          .about-title {
            font-size: 12vw;
            margin-bottom: 6vw;
          }

          .about-text {
            font-size: 2.2vw;
            gap: 4vw;
          }

          .about-text section h2 {
            font-size: 3vw;
            margin-bottom: 1.5vw;
          }

          .image-section {
            width: 100%;
            justify-content: center;
          }

          .image-cluster {
            width: 70vw;
            height: 90vw;
          }

          .image-card-1 {
            width: 55vw;
            height: 65vw;
          }

          .image-card-2 {
            top: 35vw;
            left: 25vw;
            width: 45vw;
            height: 52vw;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .about-title {
            font-size: 14vw;
          }

          .about-text {
            font-size: 3.5vw;
            gap: 5vw;
          }

          .about-text section h2 {
            font-size: 4.5vw;
            margin-bottom: 2vw;
          }
        }
      `}</style>
    </main>
  )
}

export default About
