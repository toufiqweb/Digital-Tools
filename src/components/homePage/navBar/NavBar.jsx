import React from "react";
import shoppingImage from "../../../assets/products/shopping-cart.png";

const NavBar = ({carts}) => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="container mx-auto navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-black/80"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <h1 className="leading-[1.3] text-xl md:text-2xl lg:text-4xl font-extrabold  gradient-text">
            DigiTools
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-black/80">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center justify-between gap-4 px-3">
            {/* //////////////////////////// */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost "
            >
              <div className="indicator">
                <img src={shoppingImage} alt="shopping cart" />
                {
                  carts.length > 0 && <span className="badge badge-sm indicator-item btn-circle rounded-full text-white bg-red-500">{carts.length}</span> 
                }
              </div>
            </div>

            {/* //////////////// */}

            <p className="font-semibold text-black/80">Login</p>

            <a className="btn rounded-full gradient-bg text-white hidden sm:flex hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
