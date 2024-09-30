import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';

const VehicleList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [slice, setSlice] = useState(15)

  const handleSlice = ()=>{
    setSlice(slice + 5)
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');
    
    const make = queryParams.get('make');
    const locationFilter = queryParams.get('location');
    const price = queryParams.get('price');
    const year = queryParams.get('year');
    const condition = queryParams.get('condition');
    const transmission = queryParams.get('transmission');
    const color = queryParams.get('color');
    const fuelType = queryParams.get('fuelType');

    console.log(searchQuery)
    console.log(price)

    const fetchVehicles = async () => {
      try {
        const response = await fetch('https://clabed-server.vercel.app/api/vehicles');
        const data = await response.json();
        if (response.ok) {
          setVehicles(data);

          // Filter the vehicles based on query parameters
          let filtered = data;

          if (make) {
            filtered = filtered.filter(vehicles => vehicles.make.toLowerCase() === make.toLowerCase());
          }

          if (locationFilter) {
            filtered = filtered.filter(vehicles => vehicles.location.toLowerCase() === locationFilter.toLowerCase());
          }

          if (price) {
            const priceRange = price.split(',');
            if (priceRange.length === 2) {
              const minPrice = parseInt(priceRange[0], 10);
              const maxPrice = parseInt(priceRange[1], 10);
              filtered = filtered.filter(vehicles => vehicles.price >= minPrice && vehicles.price <= maxPrice);
            } else if (priceRange.length === 1) {
              const singlePrice = parseInt(priceRange[0], 10);
              filtered = filtered.filter(vehicles => vehicles.price <= singlePrice);
            }
          }

          if (year) {
            filtered = filtered.filter(vehicles => vehicles.year === parseInt(year, 10));
          }

          if (condition) {
            filtered = filtered.filter(vehicles => vehicles.condition.toLowerCase() === condition.toLowerCase());
          }

          if (transmission) {
            filtered = filtered.filter(vehicles => vehicles.transmission.toLowerCase() === transmission.toLowerCase());
          }

          if (color) {
            filtered = filtered.filter(vehicles => vehicles.color.toLowerCase() === color.toLowerCase());
          }

          if (fuelType) {
            filtered = filtered.filter(vehicles => vehicles.fuelType.toLowerCase() === fuelType.toLowerCase());
          }

          if (searchQuery) {
            filtered = filtered.filter(vehicles => {
              const makeModel = `${vehicles.make} ${vehicles.model}`;
              return makeModel.toLowerCase().includes(searchQuery.toLowerCase());
            });
          }

          setFilteredVehicles(filtered)
        }
      } catch (error) {
        console.error('Failed to fetch vehicles:', error);
      }

      console.log("location search", location.search)
      console.log("vehicles",filteredVehicles)
    };

    fetchVehicles();
  }, [location.search]);

  console.log('slice is ', slice)
  console.log('filtered llegnth ', filteredVehicles.length)

  return (
    <div className="vehi">
      <div className="vehicle-container" id='info'>
        {filteredVehicles.slice(0, slice).map(vehicle => (
            <div className='vehicle-box' key={vehicle._id}>
              <NavLink to={`/vehicles/${vehicle._id}`}>
                <div className="car-img">
                  <img src={vehicle.images} alt="" />
                </div>
                <h2>{vehicle.make} {vehicle.model}</h2>
                <p className='price'><i className="fa-solid fa-naira-sign"></i>{vehicle.price}</p>
                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>{vehicle.location}</div>
                </div>
                <div className="bottom">
                  <p className='cond'>{vehicle.condition} used</p>
                  <p className={vehicle.available}>{vehicle.available}</p>
                </div>
              </NavLink>
          </div>
        ))}
      </div>
      {
        slice >= filteredVehicles.length ? 'no more vehicles..' : (
          <button onClick={handleSlice}>Load More</button>
        )
      }
    </div>
  );
};

export default VehicleList;