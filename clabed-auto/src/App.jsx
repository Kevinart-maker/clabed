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

function App() {

  return (
    <>
      <Navbar />  
      <section className="content">
        <Routes>
          <Route index element={<Home />}/>
          <Route path='vehicles' element={<Vehicles />}/>
          <Route path='vehicles/:id' element={<VehiclesDetail />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
