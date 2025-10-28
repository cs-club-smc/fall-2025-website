import { NavLink } from "react-router-dom";

function Sidebar() {
    
    return (
        <>
        <NavLink to="/"
        end>
            <h1>Home</h1>
        </NavLink>
        
        <NavLink to="/Announcements"
        end>
            <h1>Announcements</h1>
        </NavLink>

        <NavLink to="/Projects"
        end>
            <h1>Projects</h1>
        </NavLink>
        
        <NavLink to="/Members"
        end>
            <h1>Members</h1>
        </NavLink>
        <NavLink to="/about"
        end>
            <h1>About</h1>
        </NavLink>
        </>
    );
}

export default Sidebar;