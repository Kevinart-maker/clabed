import React, { useState, useEffect, useCallback } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios';
import debounce from 'lodash.debounce';

const SearchUser = ({ onUsersFetched }) => {
    const [query, setQuery] = useState('');
    const { user } = useAuthContext()

    
    const fetchSearchResults = async (searchQuery) => {

        try {
            let response;
            if (!searchQuery) {
                // Fetch all users if searchQuery is empty
                response = await fetch('https://clabed-server.vercel.app/api/user', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
            } else {
                response = await fetch(`https://clabed-server.vercel.app/api/user/search?query=${searchQuery}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
            }

            const data = await response.json();

            if (response.ok){
                onUsersFetched(data)
            }else{
                console.error(data.error)
            }
        } catch (err) {
            console.error('Error fetching users:', err);
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
                    type="text"
                    placeholder="Search for users"
                    value={query}
                    onChange={handleChange}
                />
        </div>
    );
};

export default SearchUser;