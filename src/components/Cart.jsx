import React from 'react';

const Cart = () => {
  return (
    <div className="flex flex-col items-center mt-20 lg:mr-52 justify-center 0">
      <div className="bg-white p-8 ">
        <h2 className="text-2xl font-bold mb-4">Looks Like You Haven't Added Any Product In The Cart</h2>
        <div className="flex justify-between items-center ">
          <span className="text-lg">Sub Total:</span>
          <span className="font-bold">Rs 0</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg">Taxes:</span>
          <span className="font-bold">Rs 0</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg">Total:</span>
          <span className="font-bold">Rs 0</span>
        </div>
        <div className=' justify-between flex'>
        <button className="btn btn-primary bg-gray-100 p-3 w-72 rounded-lg">Copy Order</button>
        <button className="btn btn-secondary bg-blue-400 w-72 text-white p-3 rounded-lg">Order via Whatsapp</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;