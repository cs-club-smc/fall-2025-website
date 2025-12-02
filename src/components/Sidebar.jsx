import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
    const [activeSection, setActiveSection] = useState("home");
    const [hoveredSection, setHoveredSection] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Only run scroll detection on home page
        if (location.pathname !== "/") {
            setActiveSection("");
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offset = 200; // Trigger section change when scrolled 200px past section start

            const announcementsSection = document.getElementById("announcements");
            const projectsSection = document.getElementById("projects");

            if (projectsSection && scrollPosition >= projectsSection.offsetTop - offset) {
                setActiveSection("projects");
            } else if (announcementsSection && scrollPosition >= announcementsSection.offsetTop - offset) {
                setActiveSection("announcements");
            } else {
                setActiveSection("home");
            }
        };

        handleScroll(); // Check on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <div className="sidebar">
            <a
                className={`sidebarComponent ${activeSection === "home" ? "active" : ""} ${hoveredSection === "home" ? "active" : ""}`}
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onMouseEnter={() => setHoveredSection("home")}
                onMouseLeave={() => setHoveredSection(null)}
            >
                Landing
            </a>

            <a
                className={`sidebarComponent ${activeSection === "announcements" ? "active" : ""} ${hoveredSection === "announcements" ? "active" : ""}`}
                href="#announcements"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("announcements")?.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={() => setHoveredSection("announcements")}
                onMouseLeave={() => setHoveredSection(null)}
            >
                Announcements
            </a>

            <a
                className={`sidebarComponent ${activeSection === "projects" ? "active" : ""} ${hoveredSection === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={() => setHoveredSection("projects")}
                onMouseLeave={() => setHoveredSection(null)}
            >
                Projects
            </a>
        </div>
    );
}

export default Sidebar;