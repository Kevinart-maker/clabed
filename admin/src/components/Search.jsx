// src/components/Search.js

import React, { useState, useCallback } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';
import debounce from 'lodash.debounce';

const Search = () => {
    const [query, setQuery] = useState('');
    const { dispatch } = useProductsContext();

    const fetchSearchResults = async (searchQuery) => {
        try {
            let response;
            if (!searchQuery) {
                // Fetch all products if searchQuery is empty
                
                response = await fetch('https://clabed-server.vercel.app/api/vehicles');
            } else {
                response = await fetch(`https://clabed-server.vercel.app/api/vehicle/search?query=${searchQuery}`);
            }
            
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            } else {
                console.error(data.error);
            }
        } catch (err) {
            console.error('Error fetching vehicles:', err);
        }
    };

    const debouncedFetch = useCallback(debounce(fetchSearchResults, 300), []);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value);
        debouncedFetch(value);
    };

    return (
        <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                    type="search"
                    placeholder="Search for vehicles"
                    value={query}
                    onChange={handleChange}
                />
        </div>
    );
};

export default Search;
