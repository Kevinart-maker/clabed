import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationFilter from './filters/LocationFilter'
import PriceFilter from './filters/PriceFilter';

const VehiclesPage = () => {
    const [filters, setFilters] = useState({
        location: '',
        price: '',
        make: '',
        year: '',
        condition: '',
        transmission: '',
        color: '',
        fuelType: '',
    });

    const navigate = useNavigate();

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const applyFilters = () => {
        // Convert filters object to query string
        const query = new URLSearchParams(filters).toString();
        navigate(`/vehicles?${query}`);
    };

    return (
        <div>
            <PriceFilter />
        </div>
    );
};

export default VehiclesPage;