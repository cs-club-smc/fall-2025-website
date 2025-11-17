import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Background from './assets/Background.png';

function App() {
  return (
    <div className="min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${Background})` }}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<About />} path="/about" />
          <Route element={<Members />} path="/members" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
