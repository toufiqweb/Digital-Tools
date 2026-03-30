import React from "react";
import CartsCard from "./CartsCard";
import { toast } from "react-toastify";

const Carts = ({ carts, setCarts }) => {
  // console.log(carts);

  const totalPrice = carts.reduce ((sum , cart ) => (sum + cart.price ), 0)

  const handleToProceed = () => {

    setCarts([])
   toast.success("Payment Successful!");
  }


  return (
    <div className="container mx-auto my-12 px-3 md:px-5">
      {carts.length === 0 ? (
        <div className="h-[50vh] flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl">🛒</span>
          </div>
          <h2 className="text-3xl font-semibold text-gray-400 mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-500 max-w-xs">
            Looks like you haven't added anything yet. Start exploring our
            plans!
          </p>
        </div>
      ) : (
        <div className="space-y-12 ">
          <div className="bg-white border border-gray-200 rounded-3xl p-4 md:p-10 shadow-xl  bottom-6">
            <div className=" mb-10">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-6">
                Your Cart
              </h1>
              <div className="space-y-5 py-5 mt-7">
                {/* cards here */}
                {
                    carts.map(cart => <CartsCard key={cart.id} cart={cart} carts={carts} setCarts={setCarts} />)
                }
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-black/80">
                Total Amount
              </h2>
              <div className="text-right">
                <p className="text-3xl md:text-5xl font-bold text-gray-900 ">
                  ${totalPrice.toFixed(2)} 
                </p>
              </div>
            </div>

            <button
              className="w-full gradient-bg  hover:shadow-indigo-400/50
                     transition-all duration-300 active:scale-[0.985] text-white text-xl md:text-2xl 
                     font-semibold py-5 rounded-2xl shadow-lg shadow-red-purple/30 
                     hover:shadow-lg "

                     onClick={handleToProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;
