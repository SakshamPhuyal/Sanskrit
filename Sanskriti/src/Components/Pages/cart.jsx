//send to login after button
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ items: initialItems }) => {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    const initialQuantities = items.map(() => 1);
    setQuantities(initialQuantities);
  }, [items]);
  
  useEffect(() => {
    setItems(initialItems);
    setQuantities(initialItems.map(() => 1));
  }, [initialItems]);
  
  const increaseQty = (index) => {
    const updated = [...quantities];
    updated[index]++;
    setQuantities(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...quantities];
    if (updated[index] > 1) {
      updated[index]--;
      setQuantities(updated);
    }
  };
  const handleRemove = (index) => {
    const updatedItems = [...items];
    const updatedQuantities = [...quantities];
    updatedItems.splice(index, 1);
    updatedQuantities.splice(index, 1);
    setItems(updatedItems);
    setQuantities(updatedQuantities);
  };
    const totalPrice = items.reduce((total, item, index) => {
    const price = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    const quantity = quantities[index] || 1;
    return total + price * quantity;
  }, 0);
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
              className='bg-white h-32 w-170 mt-4 rounded-2xl border border-gray flex p-4 items-center justify-between'
            >
              <p className='text-2xl text-amber-950'>{item.title}</p>
              <div className='flex items-center gap-2'>
                <button onClick={() => increaseQty(index)} className='bg-black flex justify-center item-center text-white w-10 h-10 rounded-full text-2xl size-fit'>+</button>
                <p className='text-2xl'>Qty:{quantities[index]}</p>
                <button onClick={() => decreaseQty(index)}  className='bg-black flex justify-center item-center text-white w-10 h-10 rounded-full text-2xl size-fit'>-</button>
              </div>
              <p className='text-2xl'>
  Price: Rs. {parseInt(item.price.replace(/[^\d]/g, '')) * quantities[index]}
</p>
<button onClick={() => handleRemove(index)} className="cursor-pointer text-red-600 text-2xl">
  <FontAwesomeIcon icon={faTrash} />
</button>

            </div>
          ))}
          <div className='mt-4 text-amber-950 flex felx-col justify-between'>
                    <p className='text-3xl'>Total Price:</p>
                    <p className='text-3xl mr-2'>Rs. {totalPrice}</p>
          </div>
          <div className='flex justify-center mt-10'>
          <button className='bg-black text-white w-40 h-10 rounded-2xl justify-center  cursor-pointer hover:opacity-85 text-2xl'> Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;