import { useState } from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnail";

const imgList = [
  "/images/thumbnail-1.png",
  "/images/thumbnail-2.png",
  "/images/thumbnail-3.png",
  "/images/thumbnail-4.png",
  "/images/thumbnail-5.png",
  "/images/thumbnail-6.png",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white mb-[50px] md:mb-0">
      <div className="relative w-screen h-fit md:h-screen my-[50px] md:my-[250px] overflow-visible">
        <div
          className="relative md:inline z-10 h-screen overflow-visible bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/bg-1.png")',
            backgroundSize: "100% auto",
          }}
        >
          <img
            src="/images/bg-1.png"
            alt="Background"
            className="w-fit md:w-full md:h-full z-20 object-cover"
          />
          <img
            src="/images/cutout-1.png"
            alt="cutout"
            className="absolute inset-x-1/2 z-20 w-[40vw] md:w-[27vw] -top-[70px] md:-top-[90px]"
          />
          <div className="gradient-lr z-20"></div>
          <div className="gradient-tb z-20"></div>
        </div>
        <div className="absolute top-0 flex flex-col justify-start items-start py-6 px-8 md:p-24 bg-black md:bg-transparent h-fit mb-[50px] md:mb-0">
          <div className="flex flex-col z-20">
            <h2 className="text-[17px] md:text-[31px] font-black text-white mb-2 uppercase leading-none">
              more from
              <br />
              rico the dog
            </h2>
            <span className="text-xs w-fit mt-24 md:mt-20 md:text-sm font-extrabold text-white mb-1 md:mb-4 bg-transparent border-[2px] border-white rounded-3xl py-2 px-3">
              RICO IS BACK!
            </span>
            <h1 className="text-[49px] md:text-[35px] font-black text-white mb-4">
              RICOBOT
            </h1>
            <p className="text-sm md:text-base font-medium md:w-1/2 text-white mb-6">
              Charge into a brand-new supersized adventure with RICO across 50
              exciting and diverse worlds, available now on PS5!
            </p>
            <button className="bg-white mt-4 md:mt-8 w-fit text-[#09101A] text-sm md:text-base font-black px-6 py-3 rounded-3xl uppercase">
              Learn more
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1 min-h-fit w-full md:w-auto md:flex md:flex-row md:gap-16 mt-12 md:mt-16 justify-center md:justify-normal items-center md:items-end z-20">
            {imgList.map((img, index) => {
              return (
                <Thumbnail
                  key={index}
                  imgSrc={img}
                  isSelected={currentIndex === index}
                  action={() => setCurrentIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
