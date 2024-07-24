import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                CLABED
            </div>
            <ul className="nav-list">
                <NavLink to='/'><i className="fa-solid fa-house"></i> Home</NavLink>
                <NavLink to='/vehicles'><i className="fa-solid fa-car"></i> Vehicles</NavLink>
            </ul>
        </nav>
    );
}
 
export default Navbar;