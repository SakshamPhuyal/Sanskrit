import React from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../assets/Background.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex justify-center items-center flex-col relative"
    >
      <div className="absolute inset-0 bg-black opacity-40 mt-16"></div>

      <div className="relative w-full max-w-6xl px-4 flex flex-col items-center text-center">
        <p className="mb-2 text-5xl md:text-8xl text-white drop-shadow-lg font-bold">
          Sanskriti Bazar
        </p>
        <p className="mb-2 text-3xl md:text-6xl text-white drop-shadow-lg">
          -"Back to our roots"
        </p>
        <p className="mb-6 text-xl md:text-4xl text-white font-semibold drop-shadow-lg">
          Learn about Nepali tradition and explore our traditional items that reflect our culture
        </p>

        <div className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 mt-6 justify-center">
          <button
            onClick={() => navigate('/shop')}
            className="text-black text-xl md:text-2xl bg-orange-100 h-12 md:h-15 w-44 md:w-35 border-2 border-black cursor-pointer rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            Shop Now
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="text-black text-xl md:text-2xl bg-orange-100 h-12 md:h-15 w-44 md:w-35 border-2 border-black cursor-pointer rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;