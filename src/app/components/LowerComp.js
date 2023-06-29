import Image from "next/image";
import React from "react";
import works from "../../../public/works.png";
import Button from "./Button";

const LowerComp = () => {
  return (
    <>
      <div className="relative top-[-8rem] z-10">
        <section className="backImage min-h-screen bg-red-500 flex items-center justify-center ">
          <div className="w-full flex flex-col self-end py-[2rem]">
            <div className="text-white flex flex-col items-center justify-center gap-5">
              <h2 className="font-semibold text-4xl">How it works?</h2>
              <br />
              <div className="w-full">
                <div className="flexComp">
                  <Image src={works} alt="tasks photo" className="w-[50%]" />
                </div>
                <br />
                <div className="flexComp">
                  <div className="flex items-center justify-center w-[70%]">
                    <p className="w-1/3 tracking-wide text-center font-normal ">
                      Answer few
                      <br /> questions
                    </p>
                    <p className="w-1/3 tracking-wide  font-normal text-center ">
                      Register using
                      <br /> phone and OTP
                    </p>
                    <p className="w-1/3 tracking-wide font-normal text-center ">
                      Get report and
                      <br /> personal roadmap
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div>
                <Button />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LowerComp;
