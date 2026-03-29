import React from "react";

const Stat = () => {
  return (
    <div className="w-full  gradient-bg text-white text-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center gap-3 p-10">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">50K+</h1>
          <p className="text-white/60  mt-2">Active Users</p>
        </div>
         <div className="w-0.5 h-20 bg-white/30 hidden sm:block"></div>
        <div className="h-0.5 w-20 bg-white/30 block sm:hidden"></div>
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">200+</h1>
          <p className="text-white/60  mt-2">Premium Tools</p>
        </div>
        
        <div className="w-0.5 h-20 bg-white/30 hidden sm:block"></div>
        <div className="h-0.5 w-20 bg-white/30 block sm:hidden"></div>
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">4.9</h1>
          <p className="text-white/60 mt-2">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
