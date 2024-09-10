import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/vehicles'); // Adjust the URL as necessary
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='products-list'>
      <div className='vehicle-container'>
        {products.slice(0, 20).map((product) => (
          <div className='vehicle-box' key={product._id}>
            <NavLink to={`/vehicles/${product._id}`}>
              <div className="car-img">
                <img src={product.images} alt="" />
              </div>
              <h2>{product.make} {product.model}</h2>
              <p className='price'><i className="fa-solid fa-naira-sign"></i>{product.price}</p>
              <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <div>{product.location}</div>
              </div>
              <div className="bottom">
                <p className='cond'>{product.condition} used</p>
                <p className={product.available}>{product.available}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <NavLink className='btn' to='/vehicles'>Browse more vehicles</NavLink>
    </div>
  );
};

export default ProductList;