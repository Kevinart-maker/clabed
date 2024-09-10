import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PriceFilter = () => {
    const [priceRange, setPriceRange] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);
    const [price, setPrice] = useState(true)

    const navigate = useNavigate();

    const handlePrice = () => {
      setPrice(!price)
    }

    const priceFilter = price ? 'price-up' : 'price-down'

    const PRICE_RANGES = {
      'under-2.5m': { min: '', max: '2500000' },
      '2.5-4.5m': { min: '2500000', max: '4500000' },
      '4.5-10m': { min: '4500000', max: '10000000' },
      '10-34m': { min: '10000000', max: '34000000' },
      'more-than-34m': { min: '34000000', max: '' },
    };
    
  
    const handlePriceRangeChange = (e) => {
      const selectedRange = PRICE_RANGES[e.target.value];
      setMinPrice(selectedRange.min);
      setMaxPrice(selectedRange.max);
      setPriceRange(e.target.value);
    };

    const handleMinPriceChange = (e) => {
      const value = e.target.value;
      if (!isNaN(value) && value >= 0) {
        setMinPrice(value);
        setIsFormValid(value <= maxPrice);
      }
    };
    
    const handleMaxPriceChange = (e) => {
      const value = e.target.value;
      if (!isNaN(value) && value >= 0) {
        setMaxPrice(value);
        setIsFormValid(minPrice <= value);
      }
    };
    
    
    const applyPriceFilter = () => {
      if(isFormValid){
        if (minPrice && maxPrice) {
          const priceRange = `${minPrice},${maxPrice}`;
          navigate(`/vehicles?price=${priceRange}`)
        }else{
          navigate('/vehicles')
        }
      }
    };
  
    const clearFilters = () => {
      setPriceRange('');
      setMinPrice('');
      setMaxPrice('');
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.delete('price');
      navigate('/vehicles')
    };
  
    return (
      <div className='price-container'>
        <div className="price-head">
        <h4>Price</h4>
        <span className='plus' onClick={handlePrice}>
          <span className="two"></span>
        </span>
        </div>
        <form className={`price-filters ${priceFilter}`}>
            <div className="price-range">
            <div>
              <input
                type="radio"
                id="under-2.5m"
                name="price-range"
                value="under-2.5m"
                checked={priceRange === 'under-2.5m'}
                onChange={handlePriceRangeChange}
              />
              <label htmlFor="under-2.5m">Under 2.5 M</label>
            </div>
            <div>
              <input
                type="radio"
                id="2.5-4.5m"
                name="price-range"
                value="2.5-4.5m"
                checked={priceRange === '2.5-4.5m'}
                onChange={handlePriceRangeChange}
              />
              <label htmlFor="2.5-4.5m">2.5 - 4.5 M</label>
            </div>
            <div>
              <input
                type="radio"
                id="4.5-10m"
                name="price-range"
                value="4.5-10m"
                checked={priceRange === '4.5-10m'}
                onChange={handlePriceRangeChange}
              />
              <label htmlFor="4.5-10m">4.5 - 10 M</label>
            </div>
            <div>
              <input
                type="radio"
                id="10-34m"
                name="price-range"
                value="10-34m"
                checked={priceRange === '10-34m'}
                onChange={handlePriceRangeChange}
              />
              <label htmlFor="10-34m">10 - 34 M</label>
            </div>
            <div>
              <input
                type="radio"
                id="more-than-34m"
                name="price-range"
                value="more-than-34m"
                checked={priceRange === 'more-than-34m'}
                onChange={handlePriceRangeChange}
              />
              <label htmlFor="more-than-34m">More than 34 M</label>
            </div>
          </div>
          <br />
          <div className="min-max">
            <label>
              <input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
                placeholder='min'
              />
            </label>
            <label>
              <input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                placeholder='max'
              />
            </label>
          </div>
          <div className="buttons">
            <button type="button" onClick={applyPriceFilter} disabled={!isFormValid}>
              Apply
            </button>
            <button type="button" className='clr-btn' onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </form>
      </div>
    );
  };

  
export default PriceFilter;
