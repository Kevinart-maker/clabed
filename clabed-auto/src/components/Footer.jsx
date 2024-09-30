import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
    return ( 
        <footer>
            <div className="top-sec">
                <h1>
                    Nigerian Based Vehicle Marketplace Making trading effortlessly simple and secure.
                </h1>
                <button>Go to Shop</button>
            </div>

            <div className="line"></div>
            
            <div className="bottom-sec">
                <div className="left-sec">
                    <div className="logo">
                        <NavLink to='/'>CLABED</NavLink>
                    </div>
                    <div className="label">
                        <p>Suscribe to receive inventory & price updates</p>
                        <label>
                            <input type="text" placeholder="enter email"/>
                            <button>Suscribe</button>
                        </label>
                    </div>
                </div>

                <div className="right-sec">
                    <div className="clabed">
                        <h3>Clabed</h3>
                        <div className="lists">
                            <li><NavLink to="/vehicles">Shop</NavLink></li>
                            <li><HashLink to='/#works'>How it works</HashLink></li>
                        </div>
                    </div>
                    <div className="trading">
                        <h3>Trading</h3>
                        <div className="lists">
                            <li><a href="https://api.whatsapp.com/send/?phone=2348033218452&text&type=phone_number&app_absent=0" className="sell-btn">Sell on Clabed</a></li>
                            <li><a href="#">Lowest Price</a></li>
                            <li><a href="#">Highest Bids</a></li>
                        </div>
                    </div>
                    <div className="help">
                        <h3>Help</h3>
                        <div className="lists">
                            <li><a href="#">Payments</a></li>
                            <li><NavLink to='/contact'>Contact Us</NavLink></li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="final-bottom-sec">
                <div className="left-sec">
                    © 2024 Clabed Autos. All rights reserved.
                    <div className="des">
                        Designed by <a className="des-link" href="http://niveksti.vercel.app">Niveksti</a>
                    </div>
                </div>
                <div className="right-sec">
                    <h3>FOLLOW US ON SOCIAL MEDIA</h3>
                    <ul className="social-icons">

                        <a href="https://www.facebook.com/clabedautosng?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
                        
                        <a href="https://www.instagram.com/clabedautos?igsh=MzRlODBiNWFlZA=="><i className="fa-brands fa-instagram"></i></a>

                        <a href="https://x.com/clabedautos?t=55GxUl-cLFF8bPmOOqnuLw&s=09"><i className="fa-brands fa-twitter"></i></a>

                        <a href="https://www.tiktok.com/@clabedautos?_t=8pbkwAJPluH&_r=1"><i className="fa-brands fa-tiktok"></i></a>
                        
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;