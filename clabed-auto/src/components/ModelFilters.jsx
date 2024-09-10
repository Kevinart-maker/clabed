import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const models = [
  { name: 'Toyota', logo: '/toyota.png' },
  { name: 'Lexus', logo: '/lexus.png' },
  { name: 'Honda', logo: '/honda.png' },
  { name: 'Mercedes-Benz', logo: '/mercedes-benz.png' },
  { name: 'Nissan', logo: '/nissan.png' },
  { name: 'Ford', logo: '/ford.png' },
  { name: 'Land Rover', logo: '/land-rover.png' },
  { name: 'Acura', logo: '/acura.png' },
];

const ModelFilters = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState(null);

  const handleFilterClick = (model) => {
    setSelectedModel(model);
    navigate(`/vehicles?make=${model}`);
  };

  return (
    <div className="model-filters">
      {models.map((model) => (
        <div key={model.name} className="model-filter" onClick={() => handleFilterClick(model.name)}>
          <img src={model.logo} alt={model.name} />
          <p>{model.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ModelFilters;