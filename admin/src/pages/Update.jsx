import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useProductsContext } from "../hooks/useProductsContext";
import { useAuthContext } from '../hooks/useAuthContext'
import storage from "../firebase";

const Update = () => {
  
  const { dispatch } = useProductsContext();
  const { user } = useAuthContext();
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    condition: 'local',
    available: 'available',
    engineType: '',
    transmission: 'Automatic',
    fuelType: 'petrol',
    exteriorColor: '',
    interiorColor: '',
    interiorMaterial: 'leather',
    quantity: '',
    location: '',
    images: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      if (id) {
        try {
          const response = await fetch(`https://clabed-server.vercel.app/api/vehicles/${id}`);
          const data = await response.json();
          if (response.ok) {
            setCar(data);
          } else {
            setError(data.error);
          }
        } catch (err) {
          console.error('Error fetching vehicle:', err);
          setError('Failed to fetch vehicle.');
        }
      }
    };

    fetchCar();
  }, [id]);
  
  const handlePhotos = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setCar((prevCar) => ({
      ...prevCar,
      images: selectedFiles,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (car.images.length === 0 && !id) {
      setError("Please upload an image.");
      return;
    }

    try {
      let imageUrl = car.images;
      if (car.images.length > 0 && typeof car.images[0] !== 'string') {
        imageUrl = await Promise.all(
          car.images.map(async (image) => {
            const storageRef = ref(storage, `images/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            return await getDownloadURL(snapshot.ref);
          })
        );
      }

      const updatedCar = { ...car, images: imageUrl };

      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedCar),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setCar({
          make: '',
          model: '',
          year: '',
          price: '',
          mileage: '',
          condition: 'local',
          available: 'available',
          engineType: '',
          transmission: 'Automatic',
          fuelType: 'petrol',
          exteriorColor: '',
          interiorColor: '',
          interiorMaterial: 'leather',
          quantity: '',
          location: '',
          images: [],
        });
        setError(null);
        console.log('Updated vehicle', json);
        dispatch({ type: 'UPDATE_PRODUCTS', payload: json });
        navigate('/vehicles');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update vehicle.');
    }
  };

  return (
    
    <div>
      <h1 className="crumb">
        <NavLink to='/vehicles'>Vehicles /</NavLink>
        <NavLink to='' className='scnd-nav'>Edit Vehicle</NavLink>
      </h1>
      <form className="create" onSubmit={handleSubmit}>
        <label>
          Make:
          <span className="input">
            <input
              type="text"
              name="make"
              value={car.make}
              onChange={handleChange}
              placeholder="Make"
            />
          </span>
        </label>

        <label>
          Model:
          <span className="input">
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={handleChange}
              placeholder="Model"
            />
          </span>
        </label>

        <label>
          Year:
          <span className="input">
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleChange}
              placeholder="Year"
            />
          </span>
        </label>

        <label>
          Price:
          <span className="input">
            <input
              type="number"
              name="price"
              value={car.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </span>
        </label>

        <label>
          Mileage:
          <span className="input">
            <input
              type="number"
              name="mileage"
              value={car.mileage}
              onChange={handleChange}
              placeholder="Mileage"
            />
          </span>
        </label>

        <label>
          Condition:
          <span className="input">
            <select name="condition" value={car.condition} onChange={handleChange}>
              <option value="foreign">Foreign</option>
              <option value="local">Local</option>
            </select>
          </span>
        </label>

        <label>
          Available:
          <span className="input">
            <select name="available" value={car.available} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
            </select>
          </span>
        </label>

        <label>
          Engine Type:

          <span className="input">
            <input type="text" name="engineType" value={car.engineType} onChange={handleChange} />
          </span>
        </label>

        <label>
          Transmission:
          <span className="input">
            <select name="transmission" value={car.transmission} onChange={handleChange}>
              <option value="Automatic">Automatic</option>
              <option value="CVT">CVT</option>
              <option value="AMT">AMT</option>
              <option value="Manual">Manual</option>
            </select>
          </span>
        </label>

        <label>
          Fuel Type:
          <span className="input">
            <select name="fuelType" value={car.fuelType} onChange={handleChange}>
              <option value="petrol">petrol</option>
              <option value="diesel">diesel</option>
              <option value="hybrid">hybrid</option>
              <option value="electric">electric</option>
              <option value="cng">CNG</option>
            </select>
          </span>
        </label>
        

        <label>
          Exterior Color:

          <span className="input">
            <input type="text" name="exteriorColor" value={car.exteriorColor} onChange={handleChange} />
          </span>
        </label>
        

        <label>
          Interior Color:
          
          <span className="input">
            <input type="text" name="interiorColor" value={car.interiorColor} onChange={handleChange} />
          </span>
        </label>
        
        <label>
          Interior Material:
          <span className="input">
            <select name="interiorMaterial" value={car.interiorMaterial} onChange={handleChange}>
              <option value="fabric">fabric</option>
              <option value="leather">leather</option>
            </select>
          </span>
        </label>


        <label>
          Quantity:

          <span className="input">
            <input type="number" name="quantity" value={car.quantity} onChange={handleChange} />
          </span>
        </label>
        

        <label>
          Location:
          <span className="input">
            <input type="text" name="location" value={car.location} onChange={handleChange} />
          </span>
        </label>
        

        <label>
          Photos (URLs):
          
          <span className="input">
            <input
                type="file"
                onChange={handlePhotos}
                placeholder="Images"
                multiple
                required={!id}
            />
          </span>
        </label>


      <button type="submit">Submit</button>
    </form>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}

export default Update;