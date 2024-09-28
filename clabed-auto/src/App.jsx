import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/home.css'
import './styles/Vehicle.css'
import './styles/about.css'
import './styles/choose.css'
import './styles/models-filters.css'
import './styles/vehicledetails.css'
import './styles/contact.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import VehiclesDetail from './pages/VehiclesDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Loading from './components/Loading'

function App() {  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or page load delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <div>
            <Navbar />  
            <section className="content">
              <Routes>
                <Route index element={<Home />}/>
                <Route path='vehicles' element={<Vehicles />}/>
                <Route path='vehicles/:id' element={<VehiclesDetail />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes>
            </section>
            <Footer />
          </div>
        )
      }
    </>
  )
}

export default App
