import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">
      <div className="relative w-screen h-screen my-[300px]">
        <img
          src="/images/bg-1.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/cutout-1.png"
          alt="cutout"
          className="absolute inset-x-1/2 z-10 bottom-0"
        />
        <div className="gradient-lr"></div>
        <div className="gradient-tb"></div>
        <div className="absolute inset-0 flex flex-col justify-start items-start p-8 md:p-24">
          <h2 className="text-[17px] md:text-[31px] font-black text-white mb-2 uppercase leading-none">
            more from
            <br />
            rico the dog
          </h2>
          <span className="text-xs mt-20 md:text-sm font-extrabold text-white mb-4 bg-transparent border-[2px] border-white rounded-3xl py-2 px-3">
            RICO IS BACK!
          </span>
          <h1 className="text-[49px] md:text-[35px] font-black text-white mb-4">
            RICOBOT
          </h1>
          <p className="text-sm md:text-base font-medium w-1/2 text-white mb-6 max-w-md">
            Charge into a brand-new supersized adventure with RICO across 50
            exciting and diverse worlds, available now on PS5!
          </p>
          <button className="bg-white mt-8 text-[#09101A] text-sm md:text-base font-black px-6 py-3 rounded-3xl uppercase">
            Learn more
          </button>
        </div>
      </div>
      {/* <div className="relative">
        <img
          src="/images/foreground-dog.png"
          alt="Foreground Dog"
          className="absolute bottom-0 right-0 w-2/5 md:w-1/2 max-h-[calc(100%+70px)] md:max-h-[calc(100%+90px)]"
        />
      </div> */}
    </div>
  );
}

export default App;
