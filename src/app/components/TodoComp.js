import Image from "next/image";
import React from "react";
import checked from "../../../public/checked.png";

const TodoComp = ({ text }) => {
  return (
    <div className="flex justify-left gap-3 mt-2 mb-4">
      <div className="pt-[5px]">
        <Image src={checked} alt="check-box" className="w-5 h-5" />
      </div>
      <div className="pb-2 border-b-2 w-[57%]">
        <h3 className="text-white text-lg">{text}</h3>
      </div>
    </div>
  );
};

export default TodoComp;
