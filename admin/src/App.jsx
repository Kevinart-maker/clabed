import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import ProductForm from './pages/ProductForm'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './styles/home.css'
import './styles/orders.css'
import './styles/settings.css'
import './styles/vehicles.css'
import './styles/create.css'
import './styles/admins.css'
import Update from './pages/Update'
import Admins from './pages/Admins'

function App() {
  const { user } = useAuthContext()

  return (
    <section className='app-container'>
      <Navbar />
      <div className="left-sec">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
          <Route path="/signup" element={user ? <Signup /> : <Navigate to="/login" />}/>
          <Route path="/admins" element={user ? <Admins /> : <Navigate to="/login" />}/>
          <Route path='/vehicles' element={user ? <Vehicles /> : <Navigate to="/login"/>}/>
          <Route path='/create' element={user ? <ProductForm /> : <Navigate to="/login"/>} />
          <Route path="/update/:id" element={user ? <Update /> : <Navigate to="/login"/>} />
        </Routes>
      </div>
    </section>
  )
}

export default App
