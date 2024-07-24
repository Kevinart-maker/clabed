import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';



const Home = () => {
    return ( 
        <section className="home">
            <Splide
                options={{
                    arrows: false,
                    rewind: true,
                    type : 'loop',
                    gap: '1rem',
                    autoplay : true,
                }}
                aria-label = "My Favorite Images"
                className="slide-container"
            >

                <SplideSlide className="first-slide">
                    <div className="text">
                        <div className="wow-text">
                            The Best Vehicle Marketplace For Reliable and Affordable Cars
                        </div>
                        <p>Shop for foreign and nigerian used vehicles and more.</p>
                        <button className="shop-btn">Shop Now</button>
                    </div>
                    <img className='car-img' src="/rd2.png" alt="Image 2"/>
                    <img className='resp-car-img' src="/rd2.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide className='second-slide'>
                    <div className="text">
                        <div className="wow-text">
                            Buy & Sell with Confidence
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, distinctio earum.
                        </p>
                        <button className="shop-btn">Shop Now</button>
                    </div>
                </SplideSlide>
                <SplideSlide className='third-slide'>
                    <div className="text">
                        <p>
                            <i className="fa-solid fa-circle-down"></i>
                            Introducing Price Drop
                        </p>
                        <div className="wow-text">
                            Enjoy Lower Prices On Limited Vehicles
                        </div>
                        <button className="shop-btn">Shop Now</button>
                    </div>
                </SplideSlide>

            </Splide>



        </section>
    );
}
 
export default Home;