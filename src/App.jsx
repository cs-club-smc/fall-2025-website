import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./components/Home/ProjectsPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Background from './assets/Background.png';

function App() {
  return (
    <div className="min-h-screen">
      <div
        className="fixed -z-10"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: 0,
          left: 0,
          right: 0,
          bottom: '-100vh',
          height: 'calc(100% + 100vh)'
        }}
      />
      <Router>
        <Navbar />
        <ConditionalSidebar />
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<About />} path="/about" />
          <Route element={<Team />} path="/team" />
          <Route element={<ProjectsPage />} path="/ProjectsPage" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

function ConditionalSidebar() {
  const location = useLocation();
  if (location.pathname === "/ProjectsPage") return null;
  return <Sidebar />;
}

export default App;
