import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/vehicles?search=${searchTerm}`);
    } else {
      navigate('/vehicles');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchTerm.trim() !== '') {
        navigate(`/vehicles?search=${searchTerm}`);
      } else {
        navigate('/vehicles');
      }
    }
  }

  return (
    <form className="search-input">
        <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
      <input
        type="search"
        placeholder="Search for vehicles"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </form>
  );
};

export default SearchBar;