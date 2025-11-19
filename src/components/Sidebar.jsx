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
            const viewportHeight = window.innerHeight;

            const announcementsSection = document.getElementById("announcements");
            const projectsSection = document.getElementById("projects");

            // Check if announcements section is actually in view
            if (announcementsSection) {
                const announcementsTop = announcementsSection.offsetTop;
                const announcementsBottom = announcementsTop + announcementsSection.offsetHeight;
                
                // Only activate if the top of the viewport has reached the announcements section
                // and we haven't reached the projects section yet
                if (scrollPosition >= announcementsTop - 100 && 
                    (!projectsSection || scrollPosition < projectsSection.offsetTop - 100)) {
                    setActiveSection("announcements");
                } else if (projectsSection && scrollPosition >= projectsSection.offsetTop - 100) {
                    setActiveSection("projects");
                } else {
                    setActiveSection("home");
                }
            } else {
                // Fallback if announcements section doesn't exist
                if (projectsSection && scrollPosition >= projectsSection.offsetTop - 100) {
                    setActiveSection("projects");
                } else {
                    setActiveSection("home");
                }
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
                Home
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