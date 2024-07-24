import { useState } from "react";

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClick = ()=>{
        setShow(!show);
    }

    const navig = show ? 'show' : '';
    
    
    return ( 
        <nav>
            <div className="not-mobile-nav">
                <div className="left-sec">
                    <div className="logo">
                        CLABED
                    </div>
                    <div className="line"></div>
                    <a href="#">Shop</a>
                    <a href="#" className="sell-btn">Sell on Clabed</a>
                </div>
                <div className="right-sec">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <a href="#">Log In</a>
                    <a href="#" className="create-btn">Create an Account</a>
                </div>
                <div className="bottom-sec">
                    <li>Shop</li>
                    <li>Brands</li>
                    <li>How it works</li>
                    <li>Grading Process</li>
                    <li>Return Policy</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </div>
            </div>


            <div className="mobile-nav">
                <div className="logo">
                    CLABED
                </div>

                <div className="nav-end">
                    <i onClick={handleClick}  className="fa-solid fa-bars ham-open"></i>
                </div>

                <div className={`nav-mobile ${navig}`}>
                    <div className="top-sec">
                        <i onClick={handleClick} className="fa-solid fa-xmark ham-close"></i>
                        <i className="fa-solid fa-magnifying-glass search-icn"></i>
                        <a href="#">
                            Login / Register
                        </a>
                    </div>
                    <div className="list-sec">
                        <li>Shop</li>
                        <li>Brands</li>
                        <li>Sell on Clabed</li>
                        <li>How it Works</li>
                        <li>Grading Process</li>
                        <li>Return Policy</li>
                        <li>Help</li>
                        <li>Contact Us</li>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;