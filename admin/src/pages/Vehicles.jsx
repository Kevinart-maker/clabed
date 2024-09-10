import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";
import { useAuthContext } from '../hooks/useAuthContext'
import ProductDetails from "./ProductDetails";
import Search from "../components/Search";

const Vehicles = () => {
    const {products, dispatch} = useProductsContext()
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
  
    useEffect(()=>{
        const fetchVehicles = async ()=>{
  
            try {
                const response = await fetch('/api/vehicles', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                
                // Check if the response is okay and the content type is JSON
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Response is not JSON");
                }
  
  
                const json = await response.json()
    
                if(response.ok){
                    dispatch({type: 'SET_PRODUCTS', payload: json})
                }
  
            } catch (err) {
                console.error("Fetch error: ", err);
                setError(err.message);
            }
            
        }
  
        fetchVehicles()
    }, [dispatch])


    return (
        <div className="vehicles">
            <div className="products">
                <h1>Vehicles</h1>
                <div className="vehicle-nav">
                    <Search />
                    <button>
                        <NavLink to='/create'>
                            <span>Add Vehicle</span> 
                            <i className="fa-solid fa-plus"></i>
                        </NavLink>
                    </button>
                </div>
            </div>

            <div className="product-details-container">
                {products ? 
                    (products.map( product =>(
                            <ProductDetails key={product._id} product={product} />
                    ))
                ): (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
}
 
export default Vehicles;