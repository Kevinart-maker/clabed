const LocationFilter = ({ onChange }) => {
    const handleLocationChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label>Location:</label>
            <input type="search" onChange={handleLocationChange} />
        </div>
    );
};

export default LocationFilter;