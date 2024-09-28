import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import SearchBar from "./Search";

const Navbar = () => {

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState(false);

    const handleClick = ()=>{
        setShow(!show);
    }

    const handleSearch = ()=>{
        setSearch(!search);
    }

    const navig = show ? 'show' : '';
    const look = search ? 'look' : '';
    const hide = search ? 'hide' : '';

    
    
    return ( 
        <nav>
            <div className="not-mobile-nav">
                <div className="left-sec">
                    <div className="logo">
                        <NavLink to='/'>CLABED</NavLink>
                    </div>
                    <div className="line"></div>
                    <NavLink to="/vehicles">Shop</NavLink>
                    <a href="https://api.whatsapp.com/send/?phone=2348033218452&text&type=phone_number&app_absent=0" className="sell-btn">Sell on Clabed</a>
                </div>
                <div className="right-sec">
                    <SearchBar />
                </div>
                <div className="bottom-sec">
                    <li>
                        <NavLink to='/vehicles'>Shop</NavLink>
                    </li>
                    <li>Brands</li>
                    <li>
                        <HashLink to='/#works'>How it works</HashLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </li>
                </div>
            </div>


            <div className="mobile-nav">
                <div className="logo">
                            <NavLink to='/'>CLABED</NavLink>
                </div>

                <div className="nav-end">
                    <i onClick={handleClick}  className="fa-solid fa-bars ham-open"></i>
                </div>

                <div className={`nav-mobile ${navig}`}>
                    <div className="top-sec">
                        <i onClick={handleClick} className="fa-solid fa-xmark ham-close"></i>
                        <div className="right-sec">
                            <SearchBar />
                        </div>
                        <a href="https://api.whatsapp.com/send/?phone=2348033218452&text&type=phone_number&app_absent=0">
                            Sell on Clabed
                        </a>
                    </div>
                    <div className="list-sec">
                        <li>
                            <NavLink to='/vehicles'>Shop</NavLink>
                        </li>
                        <li>Brands</li>
                        <li>
                            <HashLink smooth to="/#works">How it works</HashLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;