import React from "react";
import Image from "next/image";

interface ButtonProps {
  src: string;
  srcActived: string;
  title: string;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
  isActived: boolean;
  isHovered: boolean;
  isLeaved: boolean;
}

export default function SidebarButton(props: ButtonProps) {
  return (
    <div>
      <button
        className={`group w-full h-[57px] rounded-[11px] place-items-center flex flex-row pl-[13px] ${
          props.isActived
            ? "bg-[#FFFFFF] shadow-md"
            : props.isLeaved
            ? ""
            : props.isHovered
            ? "bg-[#FFFFFF] shadow-md"
            : ""
        }`}
        onClick={props.onClick}
        onMouseOver={props.onHover}
        onMouseLeave={props.onLeave}
      >
        <div className="w-[40px] h-[40px] group-hover:rounded-full group-hover:shadow-2xl flex justify-center place-items-center">
          {props.isActived ? (
            <Image
              alt="image-blue"
              src={props.srcActived}
              width={18}
              height={18}
            ></Image>
          ) : (
            <Image alt="image" src={props.src} width={18} height={18}></Image>
          )}
        </div>
        <p className="text-[19px] ml-[10px] font-GilroySemibold">
          {props.title}
        </p>
      </button>
    </div>
  );
}
