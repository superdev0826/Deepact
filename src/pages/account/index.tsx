import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";

export default function Account() {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col">
        <div className="w-full min-h-[280px] bg-[#F0F6FC] pt-[57px] pl-[200px]">
          <Link href={"/"}>
            <p className="text-[20px] text-[#63ACF3] font-GilroyMedium">Back</p>
          </Link>
          <p className="pt-[30px] text-[24px] text-[060925] font-GilroyBold">
            Account
          </p>
          <p className="pt-[14px] text-[15px] text-colorBlack/40 font-GilroySemibold">
            jameslaurentsdesign@gmail.com
          </p>
        </div>
        <div className="w-1/2 flex flex-col m-auto mt-[-50px]">
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Profile picture
            </p>
            <div className="w-full mt-[28px] rounded-[12px] shadow-lg flex flex-row items-center">
              <button className="relative my-[23px] ml-[30px] mr-[25px]">
                <Image
                  alt="avatar"
                  src={"/assets/images/pages/account/avatar-account.png"}
                  width={67}
                  height={67}
                ></Image>
                <Image
                  alt="avatar"
                  className="absolute right-0 bottom-0"
                  src={"/assets/images/pages/account/edit.png"}
                  width={20}
                  height={20}
                ></Image>
              </button>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <p className="text-[15px] font-GilroySemibold text-colorBlack mr-[5px]">
                    jameslaurents
                  </p>
                  <Image
                    alt="avatar"
                    src={"/assets/images/pages/account/check.png"}
                    width={10}
                    height={8}
                  ></Image>
                </div>
                <p className="text-[15px] text-colorBlack/40 mt-[5px] font-GilroySemibold">
                  This will be displayed on your profile
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Refer a friend
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-4/5 flex flex-col">
                <p className="text-[15px] text-colorBlack/40 font-GilroySemibold">
                  Your personal link
                </p>
                <div className="w-full mt-[12px] flex items-center rounded-[12px] shadow-lg">
                  <p className="text-[20px] text-[#63ACF3] font-GilroySemibold ml-[15px] my-[13px]">
                    forsage.io/b/xgg1z8
                  </p>
                </div>
              </div>
              <div className="w-1/5 pl-[16px]">
                <button className="w-full min-h-[50px] right-0 bottom-0 rounded-[10px] bg-[#63ACF3] flex flex-row items-center justify-center">
                  <p className="text-[14px] text-white font-GilroySemibold">
                    Copy
                  </p>
                  <Image
                    alt="avatar"
                    src={"/assets/images/pages/account/copy-icon.png"}
                    width={20}
                    height={20}
                  ></Image>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Your Points
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Count
                </p>
                <div className="w-full mt-[12px] flex items-center rounded-[12px] shadow-lg">
                  <p className="text-[15px]  font-GilroyMedium ml-[15px] my-[13px]">
                    <span className="text-[#63ACF3]">143572</span> points
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Mint DeepID
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack/40 font-GilroySemibold">
                  some information here
                </p>
                <div className="w-full mt-[28px] flex flex-row justify-center">
                  <div className="w-1/12 flex flex-col place-items-center">
                    <div className="w-[50px] h-[50px] bg-[#F9FAFB] rounded-full"></div>
                    <p className="text-center text-[13px] text-colorBlack/70 font-GilroySemibold mt-[10px]">
                      Step1
                    </p>
                  </div>
                  <div className="w-[37.5%] px-[10px]">
                    <div>
                      <hr className="mt-[25px] " />
                    </div>
                  </div>
                  <div className="w-1/12 flex flex-col place-items-center">
                    <div className="w-[50px] h-[50px] bg-[#F9FAFB] rounded-full"></div>
                    <p className="text-center text-[13px] text-colorBlack font-GilroySemibold mt-[10px]">
                      Pending
                    </p>
                  </div>
                  <div className="w-[37.5%] px-[10px]">
                    <div>
                      <hr className="mt-[25px] " />
                    </div>
                  </div>
                  <div className="w-1/12 flex flex-col place-items-center">
                    <div className="w-[50px] h-[50px] bg-[#F9FAFB] rounded-full"></div>
                    <p className="text-center text-[13px] text-colorBlack/70 font-GilroySemibold mt-[10px]">
                      Minted
                    </p>
                  </div>
                </div>
                <button className="w-full h-[48px] mt-[28px] bg-[#4D92D5] rounded-[18px]">
                  <p className="text-[15px] text-white font-GilroySemibold">
                    Mint DeepID
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[60px] flex justify-end my-[30px]">
          <button className="w-[60px] h-[60px] bg-[#4D92D5] rounded-[12.5px] mr-[30px]">
            <p className="m-auto text-white">?</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
