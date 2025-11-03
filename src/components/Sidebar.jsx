import { NavLink } from "react-router-dom";


function Sidebar() {
    

    return (
        <>
        <div className="sidebar">
    
       <NavLink className="sidebarComponent" to="/" end>
            <p>Home</p>
        </NavLink>
        
        <NavLink className="sidebarComponent" to="/" end>
            <p>Announcements</p>
        </NavLink>

        <NavLink className="sidebarComponent" to="/Projects" end>
            <p>Projects</p>
        </NavLink>

        </div>
        </>
    );
}

export default Sidebar;