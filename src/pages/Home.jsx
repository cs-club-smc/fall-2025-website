import Landing from "../components/Home/Landing";
import Announcements from "../components/Home/Announcements/Announcements";
import Projects from "../components/Home/Projects";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="h-full">
        <div className="h-screen">
          <Landing/>
        </div>
        <div className="h-screen">
          <Announcements />
        </div>
        <div className="h-screen">
         <Projects />
        </div>
      </div>
    </>
  )
}

export default Home;
