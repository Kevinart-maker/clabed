import { useNavigate } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ProductDetailsCard = ({product}) => {
    const navigate = useNavigate()

    console.log(product)
    
    return (
        <div className="details-card">
            {
            product ? (
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
                        <i className="fa-solid fa-caret-right" onClick={()=> navigate('/vehicles')}></i>
                    </div>
                </div>
                <div className="line"></div>
            </div>
            ) : <p>loading...</p>
        }
        </div>
    );
}
 
export default ProductDetailsCard;