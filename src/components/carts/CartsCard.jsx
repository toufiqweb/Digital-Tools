import React from "react";

const CartsCard = ({ cart, carts, setCarts }) => {

  const handleRemove = () => {
    const filteredCarts = carts.filter((item) => cart.id !== item.id);

    setCarts(filteredCarts)
  };

  return (
    <div className="p-10 bg-gray-200 w-full btn flex justify-between item center rounded-3xl">
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
        <button onClick={handleRemove} className="btn bg-transparent text-red-600">remove</button>
      </div>
    </div>
  );
};

export default CartsCard;
