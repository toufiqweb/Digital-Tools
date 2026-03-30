import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="py-30 px-5">
      <div className="container mx-auto text-center ">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-extrabold leading-normal">
          Simple, Transparent Pricing
        </h1>
        <p className="py-2 text-black/60 leading-normal">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-10 lg:20 xl:gap-25">
          {/* starter */}
          <div className=" bg-gray-100 shadow-md text-left rounded-2xl flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className=" pt-12 pb-8 px-8 flex-1 flex flex-col">
              <h2 className="text-3xl font-bold mb-1">Starter</h2>
              <p className="text-black/80 ">Perfect for getting started</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold ">$0</span>
                <span className="text-xl  text-black/80">/Month</span>
              </div>

              <ul className="space-y-1.5 mb-10 text-gray-600">
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Unlimited projects</span>
                </li>
              </ul>

              <button className="w-full text-white mt-auto btn btn-primary rounded-full gradient-bg hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
                Get Started Free
              </button>
            </div>
          </div>

          {/* pro */}
          <div className=" gradient-bg text-white text-left rounded-2xl  relative flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div
              className="badge absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  
                bg-yellow-100 text-yellow-600 px-4 py-3 rounded-full text-[10px] sm:text-sm font-semibold shadow-md"
            >
              Most Popular
            </div>

            <div className=" pt-12 pb-8 px-8 flex-1 flex flex-col">
              <h2 className="text-3xl font-bold mb-1">Pro</h2>
              <p className="text-white/80 ">Best for professionals</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold ">$29</span>
                <span className="text-xl  text-white/80">/Month</span>
              </div>

              <ul className="space-y-1.5 mb-10">
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Advanced analytics</span>
                </li>
              </ul>

              <button className="w-full mt-auto bg-white  font-semibold py-4 rounded-full btn border-none  shadow-none hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
                <h1 className="gradient-text ">Start Pro Trial</h1>
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className=" bg-gray-100 shadow-md text-left rounded-2xl  flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className="pt-12 pb-8 px-8 flex-1 flex flex-col">
              <h2 className="text-3xl font-bold mb-1">Enterprise</h2>
              <p className="text-black/80 ">For teams and businesses</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold ">$99</span>
                <span className="text-xl  text-black/80">/Month</span>
              </div>

              <ul className="space-y-1.5 mb-10 text-gray-600">
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>SLA guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Custom branding</span>
                </li>
              </ul>

              <button className="w-full text-white mt-auto btn btn-primary rounded-full gradient-bg hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
