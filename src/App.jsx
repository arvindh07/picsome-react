import React from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const App = () => {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };

  return (
    <Provider template={AlertTemplate} {...options}>
      <div className='container'>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Photos/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Provider>
  )
}

export default App