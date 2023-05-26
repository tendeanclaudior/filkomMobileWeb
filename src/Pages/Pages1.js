import React from "react";
import Foto1 from "../Assest/Foto/Foto1.png";
import Foto2 from "../Assest/Foto/Foto2.png";
import Foto3 from "../Assest/Foto/Foto3.png";

const Pages1 = ({ id }) => {
  return (
    <div id={id} className="w-full select-none relative">
      <div className="bg-[#BF9946] w-full h-auto px-4 py-3">
        <div data-aos="zoom-in">
          <h1 className="text-white text-[40px] text-center font-bonheurRoyale">
            Seniors Night Celebration
          </h1>
        </div>

        <div className="grid justify-items-center">
          <div data-aos="zoom-in">
            <img className="w-[350px] h-auto mt-[20px]" src={Foto1} alt="/" />
          </div>
          <div data-aos="zoom-in">
            <img className="w-[350px] h-auto mt-[20px]" src={Foto2} alt="/" />
          </div>
          <div data-aos="zoom-in">
            <img className="w-[350px] h-auto mt-[20px]" src={Foto3} alt="/" />
          </div>
        </div>

        <div className="mt-[10px]">
          <h1 className="text-white text-[15px] font-poppins text-center">
            "Dan Allah sanggup melimpahkan segala kasih karunia kepada kamu,
            supaya kamu senantiasa berkecukupan di dalam segala sesuatu dan
            malah berkelebihan di dalam pelbagai kebajikan."
          </h1>
          <p className="text-white text-[10px] font-poppins text-center">
            2 Korintus 9 : 8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pages1;
