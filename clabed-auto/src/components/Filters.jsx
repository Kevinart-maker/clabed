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
            {/* <LocationFilter onChange={(value) => handleFilterChange('location', value)} />
            <PriceFilter onChange={(value) => handleFilterChange('price', value)} />
            <MakeFilter onChange={(value) => handleFilterChange('make', value)} />
            <YearFilter onChange={(value) => handleFilterChange('year', value)} />
            <ConditionFilter onChange={(value) => handleFilterChange('condition', value)} />
            <TransmissionFilter onChange={(value) => handleFilterChange('transmission', value)} />
            <ColorFilter onChange={(value) => handleFilterChange('color', value)} />
            <FuelTypeFilter onChange={(value) => handleFilterChange('fuelType', value)} />

            <button onClick={applyFilters}>Apply Filters</button> */}
        </div>
    );
};

export default VehiclesPage;