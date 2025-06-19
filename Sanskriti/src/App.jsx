import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Nav from './Components/nav/nav';
import Home from './Components/Pages/Home';
import Collection from './Components/Pages/Collection';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Product from './Components/Pages/product';
import Cart from './Components/Pages/cart';
import Login from './Components/Pages/Login';
import Orders from './Components/Pages/Orders';
import Shop from './Components/Pages/shop';
import Productdetails from './Components/Pages/productdetails';
function App() {


  return (
    <>
  <div>
    <Nav />
    <Routes>
<Route path='/' element={<Home/>} /> 
<Route path='/collection' element={<Collection/>} /> 
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />  
<Route path='/product/:productId' element={<Product/>} /> 
<Route path='/cart' element={<Cart/>} /> 
<Route path='/login' element={<Login/>} /> 
<Route path='/orders' element={<Orders/>} /> 
<Route path='/shop' element={<Shop/>} /> 
<Route path='/productdetails' element={<Productdetails/>} /> 
    </Routes>
  </div>
    </>
  ); 
}

export default App
