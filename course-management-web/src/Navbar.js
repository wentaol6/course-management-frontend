import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <div class="menu-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 style={{fontSize:"2em"}}> Course Management</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                &nbsp;&nbsp;
                <NavLink to="/manage">Manage</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;