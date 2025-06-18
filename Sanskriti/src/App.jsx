import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home';
import Collection from './Components/Pages/Collection';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import product from './Components/Pages/product';
import cart from './Components/Pages/cart';
import Login from './Components/Pages/Login';
import Orders from './Components/Pages/Orders';
import shop from './Components/Pages/shop';
import productdetails from './Components/Pages/productdetails';
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
<Route path='/product/:productId' element={<product/>} /> 
<Route path='/cart' element={<cart/>} /> 
<Route path='/login' element={<Login/>} /> 
<Route path='/orders' element={<Orders/>} /> 
<Route path='/shop' element={<shop/>} /> 
<Route path='/productdetails' element={<productdetails/>} /> 
    </Routes>
  </div>
    </>
  ); 
}

export default App
