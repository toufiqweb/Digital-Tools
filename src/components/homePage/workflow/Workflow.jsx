import React from "react";

const Workflow = () => {
  return (
    <div className="gradient-bg ">
      <div className="container mx-auto text-center py-30 flex flex-col justify-center items-center text-white space-y-2 px-5 ">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-extrabold leading-normal">
          Ready to Transform Your Workflow?
        </h1>
        <p className="py-2 text-white/70 leading-normal">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-5">
          <button className="btn border-none font-normal shadow-none rounded-full hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <h1 className="gradient-text ">
              Explore Products
            </h1>
          </button>
          <button className="btn bg-transparent shadow-none border font-normal border-white rounded-full text-white hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            View Pricing
          </button>
        </div>
        <p className="py-2 text-white/70 leading-normal">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
