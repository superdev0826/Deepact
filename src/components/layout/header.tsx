import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import Wallet from "./header/wallet";
import { useDisconnect } from "wagmi";

export default function Header() {
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const [actionType, setActionType] = useState(0);
  const [walletopened, setWalletOpened] = useState(false);

  const { disconnect, disconnectAsync, error, isLoading } = useDisconnect();
  // useEffect(() => {
  //   setIsAuthenticated(authenticated);
  //   console.log(authenticated);
  // }, [authenticated]);

  const Logout = () => {
    localStorage.removeItem("token");
    disconnect();
    setAuthenticated(false);
  };

  return (
    <div className="sticky top-0 w-full min-h-[100px] flex place-items-center justify-between bg-[#FFFFFF]/40 backdrop-blur-[5px] z-50">
      <div className="ml-[45px]">
        <Link href={"/"} className="flex place-items-center">
          <Image
            alt="logo"
            src="/assets/images/header/Logo.png"
            width={55}
            height={55}
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="ml-[10px] text-[30px] font-GilroySemibold">Deepact</p>
        </Link>
      </div>
      <div className="h-[45px] md:flex gap-[16px] mr-[40px] hidden">
        {authenticated ? (
          <>
            <button className="w-[217px] h-[45px] rounded-[20px] border-[1px] border-[#63ACF3] bg-[#63ACF3]">
              <p className="text-[13px] text-[#FFFFFF] font-GilroySemibold">
                Launch a project
              </p>
            </button>
            <div className="relative group">
              <button
                className="w-[172px] h-[45px] rounded-[20px] bg-[#63ACF3]/20 flex items-center justify-center"
                onClick={() => setWalletOpened(!walletopened)}
              >
                <Image
                  alt="wallet"
                  src="/assets/images/header/mingcute-wallet.png"
                  width={25}
                  height={25}
                ></Image>
                <p className="text-[13px] font-GilroySemibold ml-[10px]">
                  address
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[10px]"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1.3335 0.622314L5.3335 4.62231L9.3335 0.622314"
                    stroke="#303650"
                  />
                </svg>
              </button>
              {/* hidden group-hover:block */}
              {walletopened && (
                <div className="absolute block top-[40px] right-[-100px] w-[420px] min-h-[660px] ml-[-50px] pt-[20px] bg-transparent">
                  <Wallet />
                </div>
              )}
            </div>
            <div className="relative group">
              <button className="w-[70px] h-[45px] flex flex-row items-center">
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
                <Image
                  alt="wallet"
                  src="/assets/images/header/down-blue.png"
                  className="ml-[10px]"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <div className="absolute hidden group-hover:block top-[40px] right-[-30px] w-[260px] min-h-[300px] ml-[-50px] pt-[20px] bg-transparent">
                <div className="w-full h-[280px] bg-white rounded-[20px] shadow-2xl p-[23px] flex flex-col justify-between">
                  <button className="w-full flex flex-row items-center gap-[10px] justify-start">
                    <Image
                      alt="wallet"
                      src="/assets/images/header/avatar.png"
                      width={41}
                      height={41}
                    ></Image>
                    <p className="">jameslaurents</p>
                    <Image
                      alt="wallet"
                      src="/assets/images/header/check.png"
                      width={15}
                      height={10}
                    ></Image>
                  </button>
                  <Link
                    href={"/account"}
                    className="w-full flex flex-row items-center gap-[10px] justify-start"
                  >
                    <Image
                      alt="wallet"
                      src="/assets/images/header/avatar-blue.png"
                      width={30}
                      height={30}
                    ></Image>
                    <p className="">Account</p>
                  </Link>
                  <Link
                    href={"/setting"}
                    className="w-full flex flex-row items-center gap-[10px] justify-start"
                  >
                    <Image
                      alt="wallet"
                      src="/assets/images/header/setting-blue.png"
                      width={30}
                      height={30}
                    ></Image>
                    <p className="">Settings</p>
                  </Link>
                  <button
                    className="w-full h-[47px] flex flex-row rounded-[15px] bg-[#FF1616]/10 items-center gap-[10px] justify-center"
                    onClick={() => Logout()}
                  >
                    <Image
                      alt="wallet"
                      src="/assets/images/header/logout.png"
                      width={30}
                      height={30}
                    ></Image>
                    <p className="text-[#FF1616]">Log out</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="m-auto">
              <Image
                alt="wallet"
                src="/assets/images/header/setting.png"
                className="ml-[10px]"
                width={25}
                height={15}
              ></Image>
            </div>
          </>
        ) : (
          <>
            <button>
              <p className="text-[18px] text-[#63ACF3] font-GilroySemibold">
                Launch a project
              </p>
            </button>
            <Link href={"/SignIn"}>
              <button className="w-[160px] h-[45px] rounded-[20px] border-[1px] border-[#000000]">
                <p className="text-[15px] text-[#2D2E34] font-GilroySemibold">
                  Sign in
                </p>
              </button>
            </Link>
            <Link href={"/SignUp"}>
              <button className="w-[217px] h-[45px] rounded-[20px] border-[1px] border-[#63ACF3] bg-[#63ACF3]">
                <p className="text-[13px] text-[#FFFFFF] font-GilroySemibold">
                  Create an account
                </p>
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
