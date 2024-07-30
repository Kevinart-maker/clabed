import { NavLink } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () =>{
        logout()
    }

    return ( 
        <nav>
            <div className="logo">
                CLABED
            </div>

            
            {user && (          
                <ul className="nav-list">
                    <div>
                        <span>signed in as {user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>  
                    <NavLink to='/'><i className="fa-solid fa-house"></i> Home</NavLink>
                    <NavLink to='/vehicles'><i className="fa-solid fa-car"></i> Vehicles</NavLink>
                </ul>
            )}
            {!user && (
                <div>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </div>
            )}
        </nav>
    );
}
 
export default Navbar;