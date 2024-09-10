import manager from '/manager.png'
import browse from '/browse.png'
import inspect from '/inspect.jpg'

const About = () => {

    return ( 
        <div className="about-container" id='works'>
            <h1>How it works</h1>

            <div className="container">
                <div className="workings-box">
                    <img className="inspect-img" src={browse} alt="" />
                    <h2>Browse through vehicles</h2>
                    <p>Find the vehicle that meets your expectation</p>
                </div>
                <div className="not-absolute workings-box">
                    <img className="not-absolute" src={inspect} alt="" />
                    <h2>Inspect Vehicle</h2>
                    <p>Understand the true condition of a vehicle</p>
                </div>
                <div className="workings-box">
                    <img src={manager} alt="" />
                    <h2>Meet our Manager</h2>
                    <p>Check out the physically and make a deal!</p>
                </div>
            </div>
        </div>
    );
}
 
export default About;