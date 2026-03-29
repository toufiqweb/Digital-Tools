import React from "react";
import instagramImage from "../../../assets/Instagram.png";
import facebookImage from "../../../assets/Facebook.png";
import twitterImage from "../../../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white">
      <div className="container mx-auto">
        <div className="footer  sm:footer-horizontal   p-10 py-20">
          <aside>
            <h1 className="font-bold text-3xl md:text-5xl">DigiTools</h1>
            <p className="text-white/70 mt-5">
              Premium digital tools for creators,
              <br />
              professionals, and businesses. Work smarter
              <br />
              with our suite of powerful tools.
            </p>
          </aside>
          <nav>
            <h6 className="text-lg text-white">Product</h6>
            <a className="link link-hover text-white/70">Features</a>
            <a className="link link-hover text-white/70">Pricing</a>
            <a className="link link-hover text-white/70">Pricing</a>
            <a className="link link-hover text-white/70">Pricing</a>
          </nav>
          <nav>
            <h6 className="text-lg text-white">Company</h6>
            <a className="link link-hover text-white/70">About</a>
            <a className="link link-hover text-white/70">Blog</a>
            <a className="link link-hover text-white/70">Careers</a>
            <a className="link link-hover text-white/70">Press</a>
          </nav>
          <nav>
            <h6 className="text-lg text-white">Resources</h6>
            <a className="link link-hover text-white/70">Documentation</a>
            <a className="link link-hover text-white/70">Help Center</a>
            <a className="link link-hover text-white/70">Community</a>
            <a className="link link-hover text-white/70">Contact</a>
          </nav>
          <nav>
            <h6 className="text-lg text-white">Social links</h6>

            {/* Social Icons */}
            <div className="flex justify-center gap-3">
            
              <a
                href=""
                className=" w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <img src={instagramImage} alt="Threads" />
              </a>

              <a
                href=""
                className=" w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <img src={facebookImage} alt="Facebook" />
              </a>

              <a
                href=""
                className=" w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <img src={twitterImage} alt="Twitter" />
              </a>
            </div>
          </nav>
        </div>
        <div className="h-px w-full bg-white/30 my-5 mt-10"></div>
        <div className="footer sm:footer-horizontal  p-4 flex flex-col md:flex-row items-center  md:justify-between">
          <aside>
            <p className="text-white/50">
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
          <ul className="flex items-center gap-7 flex-wrap ">
            <li>
              <a className="link link-hover text-white/50">Privacy Policy  </a>
            </li>
            <li>
              <a className="link link-hover text-white/50">Terms of Service</a>
            </li>
            <li>
              <a className="link link-hover text-white/50">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
