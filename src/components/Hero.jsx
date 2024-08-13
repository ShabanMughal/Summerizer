import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ShabanMughal")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Sumerize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro
        numquam quis placeat nobis dolor esse. Debitis dolore iure neque quas
        eaque sunt placeat quod quis.
      </h2>
    </header>
  );
};

export default Hero;
