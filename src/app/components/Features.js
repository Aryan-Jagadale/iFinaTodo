import React from "react";
import TodoComp from "./TodoComp";
import Image from "next/image";
import mobile from "../../../public/mobile.png";

//Features
const Features = () => {
  return (
    <div className="flex w-full max-h-screen">
      <div className="w-1/3 relative z-10 right-[-9em] ">
        <div className="my-[15vh] ">
          <TodoComp text={"Expected Retirement Age"} />
          <TodoComp text={"Identify Mistakes"} />
        </div>
      </div>
      <div className="w-1/3 h-full ml-[5.25rem]">
        <Image src={mobile} alt="mobile" className="h-full w-full" />
      </div>
      <div className="w-[30%] z-10 relative left-[-5em] ">
        <div className="my-[15vh]">
          <TodoComp text={"Personalised Road Map"} />
          <TodoComp text={"Tips To Improve"} />
        </div>
      </div>
    </div>
  );
};

export default Features;
