import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
  const { cart, removeFromCart, setCart } = useCart();
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    setItemsInCart(cart.length);
  }, [cart]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0);
  };

  const calculateTaxes = () => {
    const tax = cart.reduce((total, item) => {
      const taxRate = Math.random() * (0.1 - 0.05) + 0.05; // Generate tax rate between 5% and 10%
      return total + parseFloat(item.price * item.quantity * taxRate);
    }, 0);
    return tax.toFixed(2); // Round to two decimal places
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxes = parseFloat(calculateTaxes());
    const total = subtotal + taxes;
    return total.toFixed();
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // Remove item if quantity becomes 0
    }
    setCart(updatedCart);
  };

  return (
    <div className="container mt-20 lg:mx-auto lg:max-w-3xl flex-col items-center">
      <div className="">
        {itemsInCart > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 justify-center items-center gap-8">
            {cart.map((item, index) => (
              <div key={index} className="rounded-lg md:max-w-xl md:ml-20 lg:max-w-xl lg:ml-20 bg-slate-50 overflow-hidden">
                <div className="flex flex-row lg:flex-row items-center justify-between p-4 border-b">
                  <div className="flex lg:ml-5 gap-2 lg:gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="lg:w-40 w-20 lg:h-40 object-contain  mb-4 lg:mb-0 rounded-lg"
                    />
                       <div className="flex justify-between items-center  text-black absolute border border-gray-300   lg:text-xl bg-white lg:w-24  lg:ml-8 w-20 mt-10 lg:mt-28  mr-10 h-8 shadow-lg  rounded-lg p-2">
                        <button onClick={() => decrementQuantity(index)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQuantity(index)}>+</button>
                      </div>
                    <div className="lg:mt-14">
                      <h3 className="font-semibold text-md lg:text-xl">{item.name}</h3>
                      <p className="text-gray-600 text-sm lg:text-lg">Price: ${item.price}</p>
                   
                    </div>
                  </div>
                  <button
  onClick={() => removeFromCart(index)}
  className=" text-black lg:text-lg px-4 py-2 lg:w-20 text-sm w-16 h-8 flex items-center justify-center lg:px-6 lg:py-2"
>
  <FontAwesomeIcon icon={faTrash} />
</button>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-20 justify-center">
            <div className="bg-white p-8">
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
              <div className="justify-between flex">
                <button className="btn btn-primary bg-gray-100 p-3 lg:w-72 rounded-lg">Copy Order</button>
                <button className="btn btn-secondary bg-blue-400 lg:w-72 text-white p-3 rounded-lg">Order via Whatsapp</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {itemsInCart > 0 && (
        <div className="bg-white items-center lg:max-w-xl md:max-w-xl md:ml-20 lg:ml-20 mb-10 p-4 justify-center">
          <div className="flex mt-20 justify-between items-center">
            <span className="text-lg">Sub Total:</span>
            <span className="font-bold">{calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg">Taxes:</span>
            <span className="font-bold">{calculateTaxes()}</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg">Total:</span>
            <span className="font-bold">{calculateTotal()}</span>
          </div>
          <div className="justify-between flex">
            <button className="btn btn-primary bg-gray-100 p-3 lg:w-64 w-28 md:w-64 text-sm h-10 flex items-center justify-center  rounded-lg">Copy Order</button>
            <button className="btn btn-secondary bg-blue-400 lg:w-64 md:w-64 text-sm w-40 h-10 text-white p-3 flex items-center justify-center rounded-lg">Order via Whatsapp</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
