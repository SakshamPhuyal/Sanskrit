import React from 'react'

const About = () => {
  return (
    <div>
           <div className="min-h-screen bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] p-10 gap-10 flex justify-center">
             <div className='w-190 h-170 mt-10 p-10 bg-amber-50 rounded-2xl flex flex-col'>
               <h1 className='text-center text-amber-950 text-4xl '>Your Cart <FontAwesomeIcon icon={faCartShopping} /></h1>
   <div className='bg-white h-40 w-170 mt-4 rounded-2xl border-1 border-gray flex p-4'>
   <p className='text-3xl text-shadow-amber-950 text-center mr-30'>Doko</p>
   <button className='bg-black text-white w-10 h-10 mr-2 rounded-4xl'>+</button>
   <p className='mr-2 text-3xl'>Qty</p>
   <button className='mr-2 rounded-4xl bg-black text-white w-10 h-10' >-</button>
   <p className='ml-50 text-2xl'>Price:1000</p>
   </div>
   <div className='bg-white h-40 w-170 mt-4 rounded-2xl border-1 border-gray flex p-4'>
   <p className='text-3xl text-shadow-amber-950 text-center mr-30'>Doko</p>
   <button className='bg-black text-white w-10 h-10 mr-2 rounded-4xl'>+</button>
   <p className='mr-2 text-3xl'>Qty</p>
   <button className='mr-2 rounded-4xl bg-black text-white w-10 h-10' >-</button>
   <p className='ml-50 text-2xl'>Price:1000</p>
   </div>
             </div>
           </div>
         </div>
  )
}

export default About
