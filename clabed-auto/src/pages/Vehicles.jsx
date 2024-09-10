import VehicleList from "../components/VehicleList";
import Filters from "../components/Filters";
import ModelFilters from "../components/ModelFilters";

const Vehicles = () => {
    return (  
        <div className="vehicles">
            <Filters />
            <div className="right-side">
                <ModelFilters />
                <VehicleList />
            </div>
        </div>
    );
}
 
export default Vehicles;