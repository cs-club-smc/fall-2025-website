import Landing from "../components/Home/Landing";
import Announcements from "../components/Home/Announcements";
import Projects from "../components/Home/Projects";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>
        <Landing />
        <Announcements />
        <Projects />
      </div>
    </>
  )
}

export default Home;
