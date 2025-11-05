import Landing from "../components/Home/Landing";
import Announcements from "../components/Home/Announcements/Announcements";
import Projects from "../components/Home/Projects";

function Home() {
  return (
    <div className="h-full">
      <div className="h-screen">
        <Landing/>
      </div>
      <div id="announcements" className="h-screen">
        <Announcements />
      </div>
      <div id="projects" className="h-screen">
       <Projects />
      </div>
    </div>
  );
}

export default Home;
