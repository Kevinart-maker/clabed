import Slide from '../components/Slide'
import ModelFilters from '../components/ModelFilters'
import Choose from '../components/Choose'
import ProductList from '../components/ProductList'
import About from '../components/About'

const Home = () => {
    return (  
        <section>
            <Slide />
            <ModelFilters />
            <Choose />
            <ProductList />
            <About />
        </section>
    );
}
 
export default Home;