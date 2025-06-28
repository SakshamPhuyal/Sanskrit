import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css'
import './index.css'
import Nav from './Components/nav/nav';
import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Product from './Components/Pages/product';
import Cart from './Components/Pages/cart';
import Login from './Components/Pages/Login';
import Flipcard from './Components/Pages/flipcard';
import Shop from './Components/Pages/shop';
import Productdetails from './Components/Pages/productdetails';
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
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />  
<Route path='/product/:productId' element={<Product/>} /> 
<Route path='/cart' element={<Cart items={cartItems} />} />
<Route path='/login' element={<Login/>} /> 
<Route path='/flipcard' element={<Flipcard/>} /> 
<Route path='/shop' element={<Shop onAddToCart={handleAddToCart} />} /> 
<Route path='/productdetails' element={<Productdetails/>} /> 
    </Routes>
  </div>
    </>
  ); 
}

export default App
