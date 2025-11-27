import Landing from "../components/Home/Landing";
import Announcements from "../components/Home/Announcements";
import Projects from "../components/Home/Projects";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="home-container">
        <section className="home-section">
          <Landing />
        </section>

        <section id="announcements" className="home-section">
          <Announcements />
        </section>

        <section id="projects" className="home-section">
          <Projects />
        </section>

        <footer className="home-footer">
          <p className="footer-meetings">Weekly Meetings on Thursday @ 11:15 AM - 12:30 PM</p>
          <p className="footer-location">1900 Pico Blvd, Santa Monica, CA 90405, Drescher Hall 305</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
