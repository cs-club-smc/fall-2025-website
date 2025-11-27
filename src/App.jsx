import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./components/Home/ProjectsPage";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import AnimatedBackground from "./components/AnimatedBackground";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/ProjectsPage" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
