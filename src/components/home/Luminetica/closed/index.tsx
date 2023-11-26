import React from "react";
import Image from "next/image";

interface ColsedProps {
  backgroundImage: any;
  iconImage: any;
  detail: any;
  isClosed: any;
}
export default function Closed(props: ColsedProps) {
  return (
    <div className="flex flex-col">
      <Image
        alt="image"
        src={props.backgroundImage}
        width={350}
        height={150}
        priority={true}
      ></Image>
      <div className="max-w-[350px] min-h-[310px] rounded-[15px] p-[20px] bg-white flex flex-col mt-[-20px]">
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
        {props.isClosed == true ? (
          <button className=" w-full h-[37px] mt-[50px] border-[1px] border-[#060925]/70 bg-[#060925]/10 rounded-[16px]">
            <p className="text-[12px] text-[#060925]/70 font-GilroySemibold">
              Closes in 20 days
            </p>
          </button>
        ) : (
          <button className=" w-full h-[37px] mt-[50px] border-[1px] border-[#27AE75] rounded-[16px]">
            <p className="text-[12px] text-[#27AE75] font-GilroySemibold">
              Closed
            </p>
          </button>
        )}
      </div>
    </div>
  );
}
