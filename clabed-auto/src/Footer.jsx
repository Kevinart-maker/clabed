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
                    <h1 className="logo">CLABED</h1>
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
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Grading Process</a></li>
                        </div>
                    </div>
                    <div className="trading">
                        <h3>Trading</h3>
                        <div className="lists">
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Apply to sell</a></li>
                            <li><a href="#">Lowest Price</a></li>
                            <li><a href="#">Highest Bids</a></li>
                        </div>
                    </div>
                    <div className="help">
                        <h3>Help</h3>
                        <div className="lists">
                            <li><a href="#">Payments</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="final-bottom-sec">
                <div className="left-sec">
                    © 2024 Clabed Autos. All rights reserved.
                </div>
                <div className="right-sec">
                    <h3>FOLLOW US ON SOCIAL MEDIA</h3>
                    <ul className="social-icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;