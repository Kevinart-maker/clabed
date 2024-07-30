import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </AuthContextProvider>
    </Router>
  </React.StrictMode>,
)