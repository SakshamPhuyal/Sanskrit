import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../../index.css'; 
const Flipcard = ({title,image,description,useText}
) => {
  const navigate=useNavigate();
 return (
    
    <div className='w-72 h-86 mt-4 perspective'>
      
      <div className='flip-card-inner'>
        <div className='flip-card-front bg-white/55 p-6 flex flex-col items-center justify-center '>
<img className="h-48 w-50 rounded-2xl" src={image} alt={title} />
<h1 className='text-3xl text-gray-800 mt-4 font-bold'>{title} </h1>
<p className='text-1xl text-gray-800 mt-2'>{description}</p>
        </div>
        <div className='flip-card-back p-6 flex flex-col items-center justify-center'>
          <h2 className='text-2xl text-gray-800 font-semibold mb-2'>Use</h2>
          <p className='text-lg text-gray-700 text-center'>{useText}</p>
 <button onClick={() => navigate('/shop')} className='text-white w-20 h-10 bg-black rounded-3xl mt-4'>Shop</button>
        </div>
      </div>
      
    </div>
  )
}

export default Flipcard
