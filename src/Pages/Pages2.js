import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Pages2 = ({ id }) => {
  return (
    <div id={id} className="w-full select-none relative mt-[30px]">
      <div className="bg-[#BF9946] w-full h-auto px-4 py-5">
        <div data-aos="zoom-in" className="text-center">
          <h1 className="text-white text-[40px] font-bonheurRoyale">
            Save The Date
          </h1>
        </div>

        <div data-aos="zoom-in" className=" grid justify-items-center">
          <div className=" flex flex-col">
            <div className="flex py-3">
              <FaCalendarAlt className="w-[25px] h-[25px] text-white" />
              <h1 className="text-[17px] ml-[15px] font-poppins font-semibold text-white flex items-center">
                Minggu, 28 MEI 2023
              </h1>
            </div>
            <div className="flex py-3">
              <AiOutlineClockCircle className="w-[25px] h-[25px] text-white" />
              <h1 className="text-[17px] ml-[15px] font-poppins font-semibold text-white flex items-center">
                19.00 WITA (7 PM)
              </h1>
            </div>
            <div className="flex py-3">
              <CiLocationOn className="w-[25px] h-[25px] text-white" />
              <h1 className="text-[17px] ml-[15px] font-poppins font-semibold text-white flex items-center">
                Ballroom SENTRA HOTEL
              </h1>
            </div>

            <div className="grid justify-items-center mt-[10px]">
              <iframe
                className="w-[300px] h-[290px] rounded-[10px] object-cover"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.47365942852!2d124.91337447423619!3d1.4875776984984408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870bf597ddf1a1%3A0xab699cffbafa14b0!2sThe%20Sentra%20Manado!5e0!3m2!1sen!2sid!4v1685084537876!5m2!1sen!2sid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages2;
