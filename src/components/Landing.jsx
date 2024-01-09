import React from "react";

export const Landing = ({ setStart }) => {
  return (
    <section className="max-w-[50rem] m-auto p-8 bg-gradient-to-b from-[#338375] from-0% to-[#072a24] to-100% rounded-lg shadow-sm text-center">
      <p className="text-xl">Are you ready to take this quiz?</p>
      <button
        className="mt-8 text-[#3f7a70] font-Condensed text-[0.9rem] py-4 px-8 bg-gradient-to-b from-[#81f1fb] from-0% to-[#73d2f8] to-100% hover:from-[#3f7a70] hover:to-[#55b9a9] hover:text-white cursor-pointer transition-all duration-700 ease-in-out rounded-3xl text-xl"
        onClick={() => setStart(true)}
      >
        Get started
      </button>
    </section>
  );
};
