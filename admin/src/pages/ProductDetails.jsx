import { NavLink } from 'react-router-dom'
import { useProductsContext } from '../hooks/useProductsContext'
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from 'react'

const ProductDetails = ({product}) => {
    const [ info, setInfo ] = useState(false)
    const { user } = useAuthContext()
    
    const { dispatch } = useProductsContext()
    const handleClick = async () =>{
        const response = await fetch('https://clabed-server.vercel.app/api/vehicles/' + product._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_PRODUCTS', payload: json})
        }
    }

    
    const toggleInfo = () =>{
        setInfo(!info)
    }
    
    const toggle = info ? 'visib' : ''

    return ( 
        <div className="product-details">
            <div className="top-sec">
                <div className="image">
                    <img src={[product.images]} alt="" />
                    <p className={`avail ${product.available}`}>{product.available}</p>
                </div>
                <div className="text">
                    <h4>{product.make}</h4>
                    <p>{product.model}</p>
                    <p>{product.year}</p>
                    <p>{product.quantity}</p>
                    <p><strong><i id='price' className="fa-solid fa-naira-sign"></i></strong>{product.price}</p>
                    <p><strong>Location: </strong>{product.location}</p>
                    <p>{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}</p>
                    <NavLink to={`/update/${product._id}`}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </NavLink>
                    <i className="fa-solid fa-trash" onClick={handleClick}></i>
                    <i className="fa-solid fa-caret-down" onClick={toggleInfo}></i>
                </div>
            </div>
            <div className={`more-details ${toggle}`}>
                <h2>More information</h2>
                <div className="info">
                    
                    <p>
                        {product.condition}
                        <p className='sub-info'>CONDITION</p>
                    </p>
                    <p>
                        {product.mileage}
                        <p className='sub-info'>MILEAGE</p>
                    </p>
                    <p>
                        {product.engineType}
                        <p className='sub-info'>ENGINE TYPE</p>
                    </p>
                    <p>
                        {product.transmission}
                        <p className='sub-info'>TRANSMISSION</p>
                    </p>
                    <p>
                        {product.fuelType}
                        <p className='sub-info'>FUEL TYPE</p>
                    </p>
                    <p>
                        {product.exteriorColor}
                        <p className='sub-info'>EXTERIOR COLOR</p>
                    </p>
                    <p>
                        {product.interiorColor}
                        <p className='sub-info'>INTERIOR COLOR</p>
                    </p>
                    <p>
                        {product.interiorMaterial}
                        <p className='sub-info'>INTERIOR MATERIAL</p>
                    </p>
                </div>
            </div>
            <div className="line"></div>
        </div>
     );
}
 
export default ProductDetails;