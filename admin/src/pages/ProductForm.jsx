import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useProductsContext } from "../hooks/useProductsContext";
import storage from "../firebase";

const ProductForm = () => {
  const { dispatch } = useProductsContext();

  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    condition: 'local',
    available: 'available',
    engineType: '',
    transmission: '',
    fuelType: '',
    exteriorColor: '',
    interiorColor: '',
    interiorMaterial: '',
    registrationInfo: '',
    location: '',
    images: '',
  });

  const [ emptyFields, setEmptyFields ] = useState([ ])
  const [ error, setError ] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value
    }));
  };

  const handlePhotos = e =>{
    const selectedFiles = Array.from(e.target.files)
    setCar((prevCar) => ({
      ...prevCar,
      images: selectedFiles
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(car)
    if (car.images.length === 0) {
      setError("Please upload an image.");
      return;
    }

    try {
            const imageUrl = await Promise.all(
              car.images.map(async (image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const snapshot = await uploadBytes(storageRef, image);
                return await getDownloadURL(snapshot.ref);
              })
            );

            // Ensure imageUrls is an array of strings
            console.log("Image URLs: ", imageUrl)
            
            // Construct the car object with image URLs
            const carData = { ...car, images: imageUrl };

            console.log("Car Object: ", carData)

            const response = await fetch('https://clabed-server.vercel.app/api/vehicles', {
                method: 'POST',
                body: JSON.stringify(carData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setEmptyFields(json.emptyFields);
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
                  transmission: '',
                  fuelType: '',
                  exteriorColor: '',
                  interiorColor: '',
                  interiorMaterial: '',
                  registrationInfo: '',
                  location: '',
                  images: [],
                });
                setError(null);
                setEmptyFields([]);
                console.log('New vehicle added', json);
                // Dispatch action to update state
                dispatch({ type: 'CREATE_PRODUCTS', payload: json });
                navigate('/vehicles')
            }
        } catch (err) {
          console.error('Error:', err);
          setError('Failed to upload Vehicle Data.');
        }
    };

  return (

    <form onSubmit={handleSubmit}>
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
        <input type="text" name="transmission" value={car.transmission} onChange={handleChange} />
      </span>
    </label>
    

    <label>
      Fuel Type:

      <span className="input">
        <input type="text" name="fuelType" value={car.fuelType} onChange={handleChange} />
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
        <input type="text" name="interiorMaterial" value={car.interiorMaterial} onChange={handleChange} />
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
            required
        />
      </span>
    </label>


    <button type="submit">Submit</button>
    {error && <div style={{ color: 'red' }}>{error}</div>}
  </form>
  );
};

export default ProductForm;