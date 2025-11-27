import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
    const [activeSection, setActiveSection] = useState("home");
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
                className={`sidebarComponent ${activeSection === "home" ? "active" : ""}`}
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                Landing
            </a>

            <a
                className={`sidebarComponent ${activeSection === "announcements" ? "active" : ""}`}
                href="#announcements"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("announcements")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                Announcements
            </a>

            <a
                className={`sidebarComponent ${activeSection === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                Projects
            </a>
        </div>
    );
}

export default Sidebar;