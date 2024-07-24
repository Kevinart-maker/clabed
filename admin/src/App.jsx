import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import ProductForm from './pages/ProductForm'
import { Routes, Route } from 'react-router-dom'

// styles
import './styles/home.css'
import './styles/orders.css'
import './styles/settings.css'
import './styles/vehicles.css'
import './styles/create.css'
import Update from './pages/Update'

function App() {

  return (
    <section className='app-container'>
      <Navbar />
      <div className="left-sec">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/vehicles' element={<Vehicles />}/>
          <Route path='/create' element={<ProductForm />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
