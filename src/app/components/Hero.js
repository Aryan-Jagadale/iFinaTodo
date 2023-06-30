import React from "react";
import Button from "./Button";
//hero
const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-medium text-6xl text-white">
        Check your financial health
      </h1>
      <p className="text-center tracking-wide text-white font-light my-3">
        Use WeathoMeter to get a free report<br/> card for your finances- within
        minutes!
      </p>
      <br/>
      <Button/>
    </div>
  );
};

export default Hero;
