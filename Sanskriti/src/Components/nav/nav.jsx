import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/sblogo.png";
const Nav = () => {
  return (
    <nav className="bg-[#5a3e36]/70 text-white shadow-md p-4 flex h-16 justify-between px-4 md:px-20 fixed top-0 w-full z-50">
      <div className="flex gap-1 md:gap-1 text-xs md:text-3xl items-center">
        <p>Sanskriti Bazar</p>
        <img
          className="h-4 w-4 md:h-20 mt-2 md:w-20 ml-0 rounded-lg"
          src={logo}//https://imgs.search.brave.com/7OKwT_y5F8aVe2VImisGFjaW_ThkDFcKGpodUJk0jec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEyNDQ0/Ny9zY3JlZW5zaG90/cy8xNzkyMzU2L3Nh/bnNrcml0aS5qcGc_/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy
          alt=""
        />
      </div>

      <div className="cursor-pointer flex gap-2 md:gap-19 text-sm md:text-2xl">
        <div>
          <NavLink to="/">Home</NavLink>
          <hr className="w-full border-none h-1 bg-orange-300 hidden" />
        </div>
        <div>
          <NavLink to="/explore">Explore</NavLink>
          <hr className="w-full border-none h-1 bg-orange-300 hidden" />
        </div>
        <div>
          <NavLink to="/shop">Shop</NavLink>
          <hr className="w-full border-none h-1 bg-orange-300 hidden" />
        </div>
        <div>
          <NavLink to="/cart">Cart</NavLink>
          <hr className="w-full border-none h-1 bg-orange-300 hidden" />
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
          <hr className="w-full border-none h-1 bg-orange-300 hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
