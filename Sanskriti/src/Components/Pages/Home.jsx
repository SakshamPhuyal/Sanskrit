import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
   <div className={` bg-[url("https://imgs.search.brave.com/7s08eU6zX_O-U96JE4TPVHNfJ7_GM-BUXqJPJ8PSxNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9rYXRo/bWFuZHUtbmVwYWwt/anVuZS1wYXRhbi1k/dXJiYXItc3F1YXJl/LTM2ODcyNTcxLmpw/Zw")] bg-cover bg-center bg-no-repeat min-h-[calc(100vh)] flex justify-center items-center flex-col`}>
        <div className="absolute inset-0 bg-black opacity-40 mt-16" ></div>
      <div className='w-240 items-center '>
        <div className='flex justify-center mb-4'>
  
</div>
        <p className='mb-1.5 text-8xl text-white + drop-shadow-lg text-center'><b>Sanskriti Bazar</b></p>
        <p className='mb-1.5 text-6xl text-white + drop-shadow-lg text-center'>-"Back to our roots"</p>
      <p className='text-4xl  text-white font-semibold + drop-shadow-lg text-center'>Learn about Nepali tradition and explore our traditional items that reflect our culture</p>
<div className='flex space-x-70 mt-6 justify-center'>
<button onClick={()=> navigate('/shop')} className='text-black text-2xl bg-orange-100 + drop-shadow-lg h-15 w-35 border-2 border-black cursor-pointer rounded-lg'>Shop Now</button>
<button onClick={()=> navigate('/explore')} className='text-black text-2xl bg-orange-100 + drop-shadow-lg h-15  w-35 border-2 border-black cursor-pointer rounded-lg'>Explore</button>
   </div>
    </div>
    </div>
  )
}

export default Home
