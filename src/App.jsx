import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<About />} path="/about" />
          <Route element={<Members />} path="/members" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
    </>
  )
}

export default App;
