import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams
    return (
        <h1>Vehicle Details for Product ID: { id }</h1>
    );
}
 
export default Details;