import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
<nav className=" bg-[#5a3e36]/70 text-white shadow-md p-4 flex h-16 justify-between px-20 fixed top-0 w-full z-50">
      <div className='flex gap-3 text-3xl'><p>Sanskriti Bazar</p><img className='h-9 w-9 rounded-lg' src="https://imgs.search.brave.com/7OKwT_y5F8aVe2VImisGFjaW_ThkDFcKGpodUJk0jec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEyNDQ0/Ny9zY3JlZW5zaG90/cy8xNzkyMzU2L3Nh/bnNrcml0aS5qcGc_/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy" alt="" /></div>
   <div className='cursor-pointer text-2xl flex gap-x-19'>
    <div><NavLink to='/'>Home  </NavLink>
    <hr className='w-4/4 border-none h-1 bg-orange-300 hidden' />
    </div>
    <div>
       <NavLink to='/explore'>Explore </NavLink>
       <hr className='block w-4/4 border-0 h-1 bg-orange-300 hidden' />
       </div>
       <div><NavLink to='/shop'>Shop</NavLink>
<hr className='w-4/4 border-none h-1 bg-orange-300 hidden' />
</div>

       <div >
       <NavLink to='/cart'>Cart</NavLink>
       <hr className='w-4/4 border-none h-1 bg-orange-300 hidden' />
       </div>
       <div>
        <NavLink to='/contact'>Contact</NavLink>
        <hr className='w-4/4 border-none h-1 bg-orange-300 hidden' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
