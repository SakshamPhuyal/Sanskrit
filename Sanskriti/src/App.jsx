import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import './index.css'
import Nav from './Components/nav/nav';
import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/cart';
import Flipcard from './Components/Pages/flipcard';
import Shop from './Components/Pages/shop';
function App() {
const [cartItems,setCartItems]=useState([]);
const handleAddToCart=(product)=>{
  setCartItems((prevItems)=>[...prevItems,product]);
};
  return (
    <>
  <div>
    <Nav />
    <Routes>
<Route path='/' element={<Home/>} /> 
<Route path='/explore' element={<Explore/>} /> 
<Route path='/contact' element={<Contact/>} />  
<Route path='/cart' element={<Cart items={cartItems} />} />
<Route path='/flipcard' element={<Flipcard/>} /> 
<Route path='/shop' element={<Shop onAddToCart={handleAddToCart} />} /> 
    </Routes>
    <ToastContainer />
  </div>
    </>
  ); 
}

export default App
