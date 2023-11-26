import React from "react";
import Image from "next/image";

interface ProgressProps {
  backgroundImage: any;
  iconImage: any;
  detail: any;
}

export default function Progress(props: ProgressProps) {
  return (
    <div className="flex flex-col">
      <Image
        alt="image"
        src={props.backgroundImage}
        width={350}
        height={150}
        priority={true}
      ></Image>
      <div className="max-w-[350px] h-[310px] rounded-[15px] p-[20px] bg-white flex flex-col mt-[-20px]">
        <div className="w-full flex flex-row">
          <Image
            alt="image"
            src={props.iconImage}
            width={50}
            height={40}
          ></Image>
          <div className="flex flex-col ml-[15px]">
            <p className="text-[17px] text-[#060925] font-GilroySemibold">
              Luminetica
            </p>
            <p className="text-[13px] text-[#4D92D5] mt-[2px] font-GilroyMedium">
              luminetica.io
            </p>
          </div>
        </div>
        <p className="text-[13px] mt-[23px] font-GilroyMedium">
          {props.detail}
        </p>
        <p className="text-[12px] text-[#060925]/70 mt-[13px] font-GilroyMedium">
          Backed by Binance Labs, Coinbase Ventures and{" "}
          <span className="text-[#4D92D5]/70">12 others</span>
        </p>
      </div>
    </div>
  );
}
