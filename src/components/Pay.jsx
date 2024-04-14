import React from 'react';

function Pay() {
  return (
    <div className="bg-white p-8 mt-20 lg:mr-32 flex flex-col justify-center items-center">
      <div className="text-center">
        <img className="qr-image" src="https://yenu.menu/demo/images/qr.jpg" alt="QR Code" />
        <p className="text-lg lg:text-xl mt-5">Scan the QR code to pay</p>
      </div>
      <div className="lg:flex  md:flex justify-center items-center mt-8">
        <div className="bg-gray-200 p-10 lg:mr-6  md:mr-5 mb-6 lg:mb-0  text-center">
          <img src="https://yenu.menu/demo/images/payment_processors/googlepay.png" alt="Google Pay" className="w-24 lg:w-32 mx-auto" />
          <h3 className="fw-bold text-lg lg:text-xl mt-4">Google Pay</h3>
          <p className="text-sm lg:text-base">yenumenu@icici</p>
        </div> 
        <div className="bg-gray-200 p-10  md:mb-5 lg:mb-0 text-center">
          <img src="https://yenu.menu/demo/images/payment_processors/phonepe.png" alt="PhonePe" className="w-24 lg:w-32 mx-auto" />
          <h3 className="fw-bold text-lg lg:text-xl mt-4">PhonePe</h3>
          <p className="text-sm lg:text-base">yenumenu@icici</p>
        </div>
      </div>
      <div className="lg:flex md:flex justify-center items-center mt-8">
        <div className="bg-gray-200 p-10 lg:mr-6  md:mr-5 mb-6 lg:mb-0  text-center">
          <img src="https://yenu.menu/demo/images/payment_processors/amazonpay.png" alt="Amazon Pay" className="w-24 lg:w-32 mx-auto" />
          <h3 className="fw-bold text-lg lg:text-xl mt-4">Amazon Pay</h3>
          <p className="text-sm lg:text-base">yenumenu@icici</p>
        </div>
        <div className="bg-gray-200 p-10  md:mb-5 lg:mb-0  text-center">
          <img src="https://yenu.menu/demo/images/payment_processors/paytm.png" alt="Paytm" className="w-24 lg:w-32 mx-auto" />
          <h3 className="fw-bold text-lg lg:text-xl mt-4">Paytm</h3>
          <p className="text-sm lg:text-base">yenumenu@icici</p>
        </div>
      </div>
    </div>
  );
}

export default Pay;
