import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-orange-100 shadow-md p-4 flex h-16 justify-between px-20">
      <div className='flex gap-1 text-2xl'><p>Sanskriti Bazar</p><img className='h-11.5 w-11.5' src="https://imgs.search.brave.com/7OKwT_y5F8aVe2VImisGFjaW_ThkDFcKGpodUJk0jec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEyNDQ0/Ny9zY3JlZW5zaG90/cy8xNzkyMzU2L3Nh/bnNrcml0aS5qcGc_/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy" alt="" /></div>
   <ul className='cursor-pointer text-2xl flex gap-x-19'>
    <li>Home</li>
    <li>Shop</li>
    <li>Cart</li>
    <li>About</li>
    <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
