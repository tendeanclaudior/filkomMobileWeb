import React from "react";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineCalendar,
  AiOutlinePicture,
} from "react-icons/ai";

const Buttom = ({ href1, href2, href3, href4 }) => {
  return (
    <div className="grid justify-items-center sticky bottom-2 mt-[50px] z-20">
      <div className="w-[306px] bg-[#EFEFEF] rounded-[30px] px-3 py-3">
        <ul className="flex justify-between items-center">
          <li className=" hover:bg-[#BF9946] w-[30px] h-[30px]">
            <a href={href1}>
              <AiOutlineHome className="w-[30px] h-[30px]" />
            </a>
          </li>
          <li className=" hover:bg-[#BF9946] w-[30px] h-[30px]">
            <a href={href2}>
              <AiOutlineCalendar className="w-[30px] h-[30px]" />
            </a>
          </li>
          <li className=" hover:bg-[#BF9946] w-[30px] h-[30px]">
            <a href={href3}>
              <AiOutlinePicture className="w-[30px] h-[30px]" />
            </a>
          </li>
          <li className=" hover:bg-[#BF9946] w-[30px] h-[30px]">
            <a href={href4}>
              <AiOutlineHeart className="w-[30px] h-[30px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Buttom;
