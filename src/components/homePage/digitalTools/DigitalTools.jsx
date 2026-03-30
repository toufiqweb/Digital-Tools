import React from "react";

const DigitalTools = ({activeTab ,setActiveTab , carts}) => {


  return (
    <div className=" mt-20 text-center container mx-auto space-y-8">
      <div>
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-extrabold leading-normal">
          Premium Digital Tools
        </h1>
        <p className="py-2 text-black/60 leading-normal">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-transparent justify-center  items-center  shadow-none">
        
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab px-8   border-l-2 border-gray-200 rounded-full  ${activeTab === "product" && " border-none  gradient-bg text-white hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300"}`}
          aria-label="Products"
          onClick={() => setActiveTab("product")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab px-8 border-r-2 border-gray-200 rounded-full  ${activeTab === "cart" && " border-none gradient-bg text-white hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300"}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
    </div>
  );
};

export default DigitalTools;
