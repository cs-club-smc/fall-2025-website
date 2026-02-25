import PhotoGallery from '../components/PhotoGallery'

function About() {
  return (
    <main className="about-page">
      <div className="about-content">
        <h1 className="about-title">ABOUT US</h1>

        <div className="about-body">
          {/* Text column */}
          <div className="text-column">
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
                <p>Professors Koda Kol and Nathan Greenfield</p>
              </section>
            </div>
          </div>

          {/* Gallery column */}
          <div className="gallery-column">
            <PhotoGallery />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <p className="footer-meetings">Weekly Meetings on Wednesday @ 11:00 AM - 12:30 PM</p>
        <p className="footer-location">1900 Pico Blvd, Santa Monica, CA 90405</p>
      </footer>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: transparent;
          padding: clamp(140px, 12vh, 200px) clamp(24px, 5vw, 80px) 0;
          overflow-x: hidden;
        }

        .about-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
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

        .about-body {
          display: flex;
          flex-direction: row;
          gap: clamp(32px, 4vw, 60px);
          align-items: flex-start;
        }

        .text-column {
          flex: 0 0 45%;
        }

        .gallery-column {
          flex: 1;
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

        /* Tablet and below */
        @media (max-width: 1024px) {
          .about-body {
            flex-direction: column;
          }

          .text-column {
            flex: none;
            width: 100%;
          }

          .gallery-column {
            width: 100%;
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
