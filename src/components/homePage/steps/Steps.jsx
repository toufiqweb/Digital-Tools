import React from "react";
import userImage from "../../../assets/user.png";
import packageImage from "../../../assets/package.png";
import rocketImage from "../../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="py-20 bg-base-200 mt-20">
      <div className="container mx-auto text-center ">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-extrabold leading-normal">
          Get Started in 3 Steps
        </h1>
        <p className="py-2 text-black/60 leading-normal">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-10 lg:20">

          <div className=" bg-white rounded-3xl shadow-sm p-10 pb-25 hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className="flex items-center justify-end">
              <div className="w-8 h-8 gradient-bg text-white rounded-full flex items-center justify-center text-sm font-semibold">
                01
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center">
               <img src={userImage} alt="" />
              </div>
            </div>

       
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
              Create Account
            </h2>

       
            <p className="text-center text-gray-600 leading-relaxed">
              Sign up for free in seconds. No credit card <br /> required to get started.
            </p>
          </div>
          
          <div className=" bg-white rounded-3xl  shadow-sm p-10 pb-25  hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className="flex items-center justify-end">
              <div className="w-8 h-8 gradient-bg text-white rounded-full flex items-center justify-center text-sm font-semibold">
                02
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center">
               <img src={packageImage} alt="" />
              </div>
            </div>

       
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
             Choose Products
            </h2>

       
            <p className="text-center text-gray-600 leading-relaxed">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>
          </div>
          <div className=" bg-white rounded-3xl  shadow-sm p-10 pb-25 hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300 ">
            <div className="flex items-center justify-end">
              <div className="w-8 h-8 gradient-bg text-white rounded-full flex items-center justify-center text-sm font-semibold">
                03
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center">
               <img src={rocketImage} alt="" />
              </div>
            </div>

       
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
              Start Creating
            </h2>

       
            <p className="text-center text-gray-600 leading-relaxed">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;
