import { Carousel } from "flowbite-react";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import F1 from "../Assest/Gallery/Foto/F1.jpg";
import F2 from "../Assest/Gallery/Foto/F2.jpg";
import F3 from "../Assest/Gallery/Foto/F3.jpg";
import A1 from "../Assest/Gallery/A/A1.jpg";
import A2 from "../Assest/Gallery/A/A2.jpg";
import A3 from "../Assest/Gallery/A/A3.jpg";
import B1 from "../Assest/Gallery/B/B1.jpg";
import B2 from "../Assest/Gallery/B/B2.jpg";
import B3 from "../Assest/Gallery/B/B3.jpg";
import C1 from "../Assest/Gallery/C/C1.jpg";
import C2 from "../Assest/Gallery/C/C2.jpg";
import C3 from "../Assest/Gallery/C/C3.jpg";
import D2 from "../Assest/Gallery/D/D2.jpg";
import D3 from "../Assest/Gallery/D/D3.jpg";
import D4 from "../Assest/Gallery/D/D4.jpg";
import D5 from "../Assest/Gallery/D/D5.jpg";

const Pages3 = ({ id }) => {
  return (
    <div id={id} className="w-full select-none relative mt-[30px]">
      <div className="bg-[#BF9946] w-full h-auto px-4 py-5">
        <div data-aos="zoom-in" className="text-center">
          <h1 className="text-white text-[40px] font-bonheurRoyale">Gallery</h1>
        </div>

        <div data-aos="zoom-in" className="h-[200px] mt-5">
          <Carousel>
            <img src={F1} className=" select-none" alt="..." />
            <img src={F2} className=" select-none" alt="..." />
            <img src={F3} className=" select-none" alt="..." />
          </Carousel>
        </div>

        <div className="grid justify-items-center py-5">
          <a href="https://www.instagram.com/unklab.fik2019/" target="{_blank}">
            <AiOutlineInstagram className="w-[50px] h-[50px] text-white" />
          </a>
        </div>

        <div className="h-56">
          <Carousel>
            <img src={A1} className=" select-none" alt="..." />
            <img src={A2} className=" select-none" alt="..." />
            <img src={A3} className=" select-none" alt="..." />
          </Carousel>
        </div>

        <div className="h-56 mt-[15px]">
          <Carousel>
            <img src={B1} className=" select-none" alt="..." />
            <img src={B2} className=" select-none" alt="..." />
            <img src={B3} className=" select-none" alt="..." />
          </Carousel>
        </div>

        <div className="h-56 mt-[15px]">
          <Carousel>
            <img src={C1} className=" select-none" alt="..." />
            <img src={C2} className=" select-none" alt="..." />
            <img src={C3} className=" select-none" alt="..." />
          </Carousel>
        </div>

        <div className="h-56 mt-[15px]">
          <Carousel>
            <img src={D5} className=" select-none" alt="..." />
            <img src={D3} className=" select-none" alt="..." />
            <img src={D2} className=" select-none" alt="..." />
            <img src={D4} className=" select-none" alt="..." />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Pages3;
