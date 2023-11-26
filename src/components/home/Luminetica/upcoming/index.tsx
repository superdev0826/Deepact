import React from "react";
import Image from "next/image";

interface UpcomingProps {
  backgroundImage: any;
  iconImage: any;
  detail: any;
}
export default function Upcoming(props: UpcomingProps) {
  return (
    <div className="flex flex-col">
      <div className="relative max-w-[350px]">
        <Image
          alt="image"
          src={props.backgroundImage}
          width={350}
          height={150}
          priority={true}
        ></Image>
        <div className="absolute top-0 w-full h-full rounded-[10px] bg-[#FFFFFF]/40 backdrop-blur-[10px]"></div>
      </div>
      <div className="relative max-w-[350px] h-[310px] rounded-[15px] p-[20px] bg-white flex flex-col mt-[-20px] z-10">
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
        <div className="absolute top-0 left-0 w-full h-full rounded-[10px] bg-[#FFFFFF]/40 backdrop-blur-[10px]">
          <div className="relative w-full h-full">
            <p className="absolute left-[25px] bottom-[25px] text-[16px] text-[#63ACF3] font-GilroyMedium">
              Upcoming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
