import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ items }) => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] p-10 gap-10 flex justify-center">
        <div className='w-190 h-auto mt-10 p-10 bg-amber-50 rounded-2xl flex flex-col'>
          <h1 className='text-center text-amber-950 text-4xl '>
            Your Cart <FontAwesomeIcon icon={faCartShopping} />
          </h1>

          {items.map((item, index) => (
            <div
              key={index}
              className='bg-white h-40 w-170 mt-4 rounded-2xl border border-gray flex p-4 items-center justify-between'
            >
              <p className='text-3xl text-amber-950'>{item.title}</p>
              <div className='flex items-center gap-2'>
                <button className='bg-black text-white w-10 h-10 rounded-full'>+</button>
                <p className='text-xl'>Qty</p>
                <button className='bg-black text-white w-10 h-10 rounded-full'>-</button>
              </div>
              <p className='text-2xl'>Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;