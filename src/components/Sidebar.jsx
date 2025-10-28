import { NavLink } from "react-router-dom";

function Sidebar() {
    
    return (
        <>
        <NavLink to="/"
        end>
            <p>Home</p>
        </NavLink>
        
        <NavLink to="/Announcements"
        end>
            <p>Announcements</p>
        </NavLink>

        <NavLink to="/Projects"
        end>
            <p>Projects</p>
        </NavLink>
        
        <NavLink to="/Members"
        end>
            <p>Members</p>
        </NavLink>
        <NavLink to="/about"
        end>
            <p>About</p>
        </NavLink>
        </>
    );
}

export default Sidebar;