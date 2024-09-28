import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";
import { useAuthContext } from '../hooks/useAuthContext'
import { useProductsContext } from "../hooks/useProductsContext";
import ProductDetailsCard from "../components/ProductDetailsCard";

const Home = () => {
    const {products, dispatch} = useProductsContext()
    const { user } = useAuthContext()
    const [error, setError] = useState(null)
      
    useEffect(()=>{
        const fetchVehicles = async ()=>{
  
            try {
                const response = await fetch('https://clabed-server.vercel.app/api/vehicles', {
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
        <div className="home">
            <h1>Dashboard</h1>
            <div className="home-hero">
                <Search />
                <div className="product-details-container">
                    {products ? 
                        (products.slice(0, 6).map( product =>(
                                <ProductDetailsCard key={product._id} product={product} />
                        ))
                    ): (
                        <p>loading...</p>
                    )}
                </div>
                <NavLink className='btn' to='/vehicles'>View all</NavLink>
            </div>
        </div>
    );
}
 
export default Home;