import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import ProductList from '../components/ProductList'

const VehiclesDetail = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState([]);
    
    useEffect(() => {
        // Fetch the product details using the ID from the URL
        const fetchProduct = async () => {
          try {
            const response = await fetch(`/api/vehicles/${id}`);
            const data = await response.json();
            setVehicle(data); // Update state with the fetched product details
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchProduct();
      }, [id]);

    if(!vehicle) return <div>Loading...</div>;

    console.log('images: ', vehicle.images)
    const vehicleImages = vehicle && vehicle.images ? vehicle.images.map((data, index) => (
      <SplideSlide key={index} className="detail">
        <img src={data} alt="" />
      </SplideSlide>
    )) : null;

    return (
        <div className="vehicles-detail">
          <div className="top-sec">
            <Splide
              options={{
                arrows: true,
                rewind: true,
                type : 'loop',
                gap: '1rem',
                autoplay : true,
              }}
              aria-label = "My Favorite Images"
              className="vehicle-slide-container"
            >
              {vehicleImages}
            </Splide>

            <div className="left-sec">
              <p>
                <i className="fa-solid fa-location-dot"></i>
                <span>{vehicle.location}</span>
              </p>
              <h1>{vehicle.make} {vehicle.model}</h1>
              <h2><i className="fa-solid fa-naira-sign"></i>{vehicle.price}</h2>
              <div className="briefs">
                <div className="condition">
                  {vehicle.condition}
                </div>
                <div className="engine">
                  {vehicle.engineType}
                </div>
                <div className="mile">
                  {vehicle.mileage}
                </div>
              </div>
              <a href="https://api.whatsapp.com/send/?phone=2348033218452&text&type=phone_number&app_absent=0">Whatsapp</a>

            </div>
          </div>

          <div className="detail-sec">
            <div className="overview">
              <h2>Vehicle overview</h2>
              <div className="icons">
                <div className="trans-icn">
                  <img src="/manual-transmission.png" alt="" />
                  <p>{vehicle.transmission}</p>
                </div>
                <div className="fuel-icn">
                  <img src="/gas-station.png" alt="" />
                  <p>{vehicle.fuelType}</p>
                </div>
              </div>
            </div>
            <div className="info">
              <h1>General Information</h1>
              <div className="info-hero">
                <div className="info-cards">
                  <p>{vehicle.make}</p>
                  <span>MAKE</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.model}</p>
                  <span>MODEL</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.year}</p>
                  <span>YEAR</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.exteriorColor}</p>
                  <span>COLOR</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.condition}</p>
                  <span>CONDITION</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.engineType}</p>
                  <span>ENGINE</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.interiorMaterial}</p>
                  <span>INTERIOR MATERIAL</span>
                </div>
                <div className="info-cards">
                  <p>{vehicle.mileage}</p>
                  <span>MILEAGE</span>
                </div>
              </div>
            </div>
          </div>

         <ProductList />
        </div>
    );
}
 
export default VehiclesDetail;