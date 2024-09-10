import { NavLink } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () =>{
        logout()
    }
    console.log('Logged in user: ', user)

    return ( 
        <nav>
            <div className="logo">
                CLABED
            </div>

            
            {user && (          
                <ul className="nav-list">
                    <NavLink to='/'><i className="fa-solid fa-house"></i> <span>Home</span></NavLink>
                    <NavLink to='/vehicles'><i className="fa-solid fa-car"></i> <span>Vehicles</span></NavLink>
                    {user.role === 'admin' && (
                        <NavLink to='/admins'><i className="fa-solid fa-user"></i> <span>Admins</span></NavLink>
                    )}
                    <a onClick={handleClick}><i className="fa-solid fa-right-from-bracket"></i> <span>Log out</span></a>
                    <p className="signed">
                        <div>Signed in as: </div> 
                        <div className="email">{user.email}</div>
                    </p>
                </ul>
            )}
        </nav>
    );
}
 
export default Navbar;