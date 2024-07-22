import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";

function Technologies() {
  return (
    <div className="border-b border-pink-300 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <RiHtml5Line className="text-7xl text-red-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <RiCss3Line className="text-7xl text-yellow-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <SiMongodb className="text-7xl text-green-700" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-pink-100">
          <RiJavaLine className="text-7xl text-neutral-600" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
