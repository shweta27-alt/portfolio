import React from "react";
import {HERO_CONTENT} from '../constants/index'
import Image22 from "../assets/Image22.jpeg"

function Hero() {
  return (
    <div className="border-b border-pink-300 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-6xl">
              Shweta Saindane
            </h1>
            <span className="bg-gradient-to-r from-red-600 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={Image22} alt="Profile picture" className="w-96 h-96 border-red-600 rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
