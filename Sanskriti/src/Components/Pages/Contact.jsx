import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[#d6b98c] p-6 flex justify-center items-center'>
   <div className='p-4 text-amber-960  border-2 border-yellow-800 items-center h-150 w-200 justify-center items-center'>
<h1 className='text-center  text-4xl'>Get in Touch</h1>
    <p className='text-2xl'>This project is built to reconnect new generation with our cultural roots. Whether you want to buy goods or want to know about our culture, feel free to drop a message! </p>
    <div className="flex flex-col items-center">
   <p className='text-left w-full ml-93 mt-1 text-1xl'>Name:</p>
   <input className='mt-1 mb-3 w-100 h-12 border-black border-2 rounded-2xl p-5 bg-yellow-100' type="text" placeholder='Your Name'/><br />
   <p className='text-left w-full ml-93 mt-1 text-1xl'>Email</p>
<input className='mt-1 mb-3 w-100 h-12 border-black border-2 rounded-2xl p-5 bg-yellow-100' type="text" placeholder='Email'/><br />
   <p className='text-left w-full ml-93 mt-1 text-1xl'>Message:</p>
<input className='mt-1 mb-3 w-100 h-22 border-black border-2 rounded-2xl p-5 bg-yellow-100' type="text" placeholder='Type your message . . . . .'/><br />
  <button className="bg-amber-950 rounded-2xl w-40 h-10 mt-1 text-white cursor-pointer">
    Submit
  </button>
  </div>
   </div>
    </div>

  )
}

export default Contact
