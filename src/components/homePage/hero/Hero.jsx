import React from "react";
import bannerImage from "../../../assets/banner.png";
import playImage from "../../../assets/Play.png";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 mt-6 md:mt-10 lg:mt-5">
        <div className="flex-1">
          <img
            src={bannerImage}
            alt="banner"
            className=" rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 space-y-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div class="flex items-center w-fit gap-3 px-6 py-3 bg-linear-to-r from-purple-100 to-indigo-100 rounded-full">
            <div class="relative flex items-center justify-center">
              <div class="w-5 h-5 bg-purple-300 rounded-full absolute opacity-40"></div>

              <div class="w-3.5 h-3.5 bg-purple-400 rounded-full absolute"></div>

              <div class="w-2 h-2 bg-purple-600 rounded-full relative animate-pulse"></div>
            </div>

            <span class="gradient-text font-medium text-sm">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-extrabold leading-normal">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-black/50 leading-normal">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary rounded-full gradient-bg">
              Explore Products
            </button>
            <div className="btn bg-transparent border-none p-0">
              <div className="p-0.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                  <img  src={playImage} alt="video play icon" />
                  <span className="gradient-text ">Watch Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
