import React from "react";
import { toast } from "react-toastify";

const CartsCard = ({ cart, carts, setCarts }) => {

  const handleRemove = () => {
    const filteredCarts = carts.filter((item) => cart.id !== item.id);

    setCarts(filteredCarts)
    toast.warning("Item is removed !");
  };

  return (
    <div className="py-10 px-5 bg-gray-100 w-full btn flex justify-between item center rounded-3xl hover:bg-linear-to-r from-[#9614fa18] to-[#4f39f618] hover:shadow-md hover:shadow-indigo-400/50 transition duration-300">
      <div className="flex gap-2 items-center">
        <div className=" w-12 h-12 p-3 border border-gray-400 bg-white rounded-full flex items-center justify-center">
          <img src={cart.icon} alt="" />
        </div>
        <div className="flex flex-col text-left justify-center">
          <h2 className="font-bold text-lg">{cart.name}</h2>
          <p className="text-black/80">${cart.price}</p>
        </div>
      </div>

      <div>
        <button onClick={handleRemove} className=" btn border-none shadow-none bg-transparent text-red-600 hover:btn rounded-2xl hover:bg-white  hover:shadow-lg hover:shadow-indigo-400/50 transition duration-500">remove</button>
      </div>
    </div>
  );
};

export default CartsCard;
