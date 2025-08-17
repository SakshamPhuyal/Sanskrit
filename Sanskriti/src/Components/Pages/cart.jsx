import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ items: initialItems }) => {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState([]);

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
    if (updated[index] > 1) updated[index]--;
    setQuantities(updated);
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
    return total + price * (quantities[index] || 1);
  }, 0);

  const handleOrderNow = () => {
    if (items.length === 0) {
      toast.error("Cart is empty. Add items before ordering!");
      return;
    }
    toast.success("Order placed successfully!", {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      theme: 'colored',
    });
    setItems([]);
    setQuantities([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] p-4 sm:p-6 md:p-10 flex justify-center">
      <div className="w-full sm:w-11/12 md:w-190 h-auto mt-10 p-4 sm:p-6 md:p-10 bg-amber-50 rounded-2xl flex flex-col">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-amber-950 mb-6">
          Your Cart <FontAwesomeIcon icon={faCartShopping} />
        </h1>

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full sm:w-full md:w-170 h-auto sm:h-32 mt-4 rounded-2xl border border-gray flex flex-col sm:flex-row sm:items-center p-4 justify-between gap-4"
          >
            <p className="text-lg sm:text-2xl text-amber-950 text-center sm:text-left">{item.title}</p>
            <div className="flex items-center gap-2 justify-center">
              <button
                onClick={() => increaseQty(index)}
                className="bg-black flex justify-center items-center text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full text-lg sm:text-2xl"
              >
                +
              </button>
              <p className="text-lg sm:text-2xl">Qty: {quantities[index]}</p>
              <button
                onClick={() => decreaseQty(index)}
                className="bg-black flex justify-center items-center text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full text-lg sm:text-2xl"
              >
                -
              </button>
            </div>
            <p className="text-lg sm:text-2xl text-center sm:text-left">
              Price: Rs. {parseInt(item.price.replace(/[^\d]/g, '')) * quantities[index]}
            </p>
            <button
              onClick={() => handleRemove(index)}
              className="cursor-pointer text-red-600 text-lg sm:text-2xl self-center sm:self-auto"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}

        <div className="mt-4 text-amber-950 flex flex-col sm:flex-row justify-between text-center sm:text-left gap-2 sm:gap-0">
          <p className="text-2xl sm:text-3xl">Total Price:</p>
          <p className="text-2xl sm:text-3xl">Rs. {totalPrice}</p>
        </div>

        <div className="flex justify-center mt-6 sm:mt-10">
          <button
            className="bg-black text-white w-36 sm:w-40 h-10 rounded-2xl justify-center cursor-pointer hover:opacity-85 text-lg sm:text-2xl"
            onClick={handleOrderNow}
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
