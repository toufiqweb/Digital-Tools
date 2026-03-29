import { Check } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product.features);

  return (
    <div className=" shadow-md text-left rounded-2xl flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
      <div className=" pt-12 pb-8 px-8 flex-1 flex flex-col space-y-4 relative ">
        <div
          className={`badge absolute top-4 right-4 px-4 py-3 rounded-full text-sm font-semibold 
                ${product.tagType === "Best seller" && "bg-yellow-100 text-yellow-600"}
                ${product.tagType === "Popular" && "bg-purple-100 text-purple-600"}
                ${product.tagType === "New" && "bg-green-100 text-green-600"}
                ${product.tagType === "" || "bg-gray-100 text-gray-600"}
            `}
        >
          {product.tagType ? product.tagType : "Default"}
        </div>
        <div className=" w-12 h-12 p-2 border border-gray-100 rounded-full flex items-center justify-center">
          <img src={product.icon} alt="" />
        </div>
        <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
        <p className="text-black/80 line-clamp-2">{product.description}</p>

        <div className="mt-8 mb-7">
          {product.price === 0 ? (
            <span className="text-3xl font-bold text-green-400">Free</span>
          ) : (
            <span className="text-3xl font-bold ">${product.price}</span>
          )}
          {product.price === 0 || (
            <span className="text-md  text-black/80">/{product.period}</span>
          )}
        </div>

        <ul className="space-y-1.5 mb-7 text-gray-600">
          {product.features.map((feature) => (
            <li className="flex items-start gap-3">
              <Check color="lightgreen" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full text-white mt-auto btn btn-primary rounded-full gradient-bg hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
