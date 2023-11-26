"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Landing from "@/container/landing-section";
import {
  ConnectTwitter,
  RegisterByEmail,
  RegisterByWallet,
} from "@/actions/auth";
import { UserContext } from "@/context/UserContext";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const [stepId, setStepId] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated } = useContext(UserContext);
  const router = useRouter();

  const CreateOneByEmail = () => {
    RegisterByEmail(name, password).then((res: any) => {
      if (res.data) {
        if (res.data.message == "You have successfully logged in") {
          localStorage.setItem("token", res.data.token);
          // router.push("/");
        }
      } else {
        toast(`${res.response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
    setStepId(1);
  };

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (localStorage.getItem("token")) router.push("/");
  });

  useEffect(() => {
    if (isConnected) {
      RegisterByWallet(address).then((res: any) => {
        if (res.data) {
          if (res.data.message == "You have successfully logged in") {
            localStorage.setItem("token", res.data.token);
            router.push("/");
          }
        } else {
          toast(`${res.response.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    }
  }, [isConnected, address, router]);

  const handleMetaMaskRegister = () => {
    connect({ connector: connectors[0] });
  };

  const handleWalletConnectRegister = () => {
    connect({ connector: connectors[1] });
  };

  const connectTwitter = () => {
    const res = ConnectTwitter();
    console.log(res);
    // setStepId(2);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute top-[100px] w-full h-full bg-[#FFFFFF]/40 backdrop-blur-[5px] z-20"></div>
      <Landing />
      <Footer />
      {stepId == 0 && (
        <div className="absolute top-0 w-full h-screen flex z-30">
          <div className="fixed w-3/4 left-0 right-0 mx-auto mt-[100px] 2xl:mt-[200px] bg-[#F6F8FC] rounded-[44px] shadow-2xl px-[50px] 2xl:px-[70px] py-[30px] 2xl:py-[50px] flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-[45px] font-semibold">Registration</p>
              <Link href={"/"}>
                <button>
                  <Image
                    alt="eye"
                    src={"/assets/images/pages/home/cancel.png"}
                    width={49}
                    height={49}
                  ></Image>
                </button>
              </Link>
            </div>
            <span className="text-[20px] text-[#060925]/40 mt-[16px]">
              By continuing in to Deepact, you agree to{" "}
              <a className="text-[#63ACF3]">Terms of Service</a> and{" "}
              <a className="text-[#63ACF3]">Privacy Policy.</a>
            </span>
            <div className="w-full h-[380px] bg-white mt-[16px] rounded-[22.5px] flex flex-row p-[45px]">
              <div className="w-1/2 pr-[40px] flex flex-col items-center">
                <input
                  value={name}
                  className="w-full h-[62px] bg-[#F7F9FD] rounded-[12px] text-[20px] p-[16px] mb-[13px]"
                  placeholder="Email"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <div className="relative w-full flex flex-row items-center py-[12px]">
                  <input
                    value={password}
                    type="password"
                    className="w-full h-[62px] bg-[#F7F9FD] rounded-[12px] text-[20px] p-[16px]"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <button className="absolute right-[15px]">
                    <Image
                      alt="eye"
                      src={"/assets/images/pages/home/show-eye.png"}
                      width={34}
                      height={34}
                    ></Image>
                  </button>
                </div>
                <button
                  className="w-full h-[62px] bg-[#63ACF3] border-[1px] rounded-[28px] mt-[13px] mb-[25px]"
                  onClick={() => CreateOneByEmail()}
                >
                  <p className="text-[18px] text-white font-GilroySemibold">
                    Create an account
                  </p>
                </button>
                <p className="text-[18px] text-[#060925]/40">
                  Have an account?{" "}
                  <span className="text-[#63ACF3]">
                    <Link href="/SignIn">Sign in</Link>
                  </span>
                </p>
              </div>
              <div className="w-1/2 flex flex-row">
                <div className="w-[100px] h-full flex flex-col ">
                  <div className="w-[1px] h-[125px] border-[1px] border-[#060925] opacity-[0.7] m-auto"></div>
                  <p className="text-[22px] text-[#060925]/60 m-auto">Or</p>
                  <div className="w-[1px] h-[125px] border-[1px] border-[#060925] opacity-[0.7] m-auto"></div>
                </div>
                <div className="w-full flex flex-col">
                  <button
                    className=" relative w-full h-[58px] flex flex-row items-center bg-[#F7F9FD] rounded-[10px] px-[23px] py-[8px] mb-[15px]"
                    onClick={handleMetaMaskRegister}
                  >
                    <Image
                      alt="image-wallet"
                      src={"/assets/images/pages/home/MetaMask.png"}
                      width={41}
                      height={41}
                    ></Image>
                    <p className="text-[22px] text-[#060925] ml-[15px]">
                      MetaMask
                    </p>
                    <Image
                      alt="image-arrow"
                      className="absolute right-[15px]"
                      src={"/assets/images/pages/home/arrow.png"}
                      width={22}
                      height={22}
                    ></Image>
                  </button>
                  <button
                    className=" relative w-full h-[58px] flex flex-row items-center bg-[#F7F9FD] rounded-[10px] px-[23px] py-[8px]"
                    onClick={handleWalletConnectRegister}
                  >
                    <Image
                      alt="image-wallet"
                      src={"/assets/images/pages/home/wallet.png"}
                      width={41}
                      height={41}
                    ></Image>
                    <p className="text-[22px] text-[#060925] ml-[15px]">
                      WalletConnect
                    </p>
                    <Image
                      alt="image-arrow"
                      className="absolute right-[15px]"
                      src={"/assets/images/pages/home/arrow.png"}
                      width={22}
                      height={22}
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {stepId == 1 && (
        <div className="absolute top-0 w-full h-screen flex items-center z-30">
          <div className="fixed w-3/4 h-[650px] left-0 right-0 m-auto bg-[#F6F8FC] rounded-[44px] shadow-2xl px-[70px] py-[50px] flex flex-col">
            <div className="flex flex-row justify-end">
              <Link href={"/"}>
                <button>
                  <Image
                    alt="eye"
                    src={"/assets/images/pages/home/cancel.png"}
                    width={49}
                    height={49}
                  ></Image>
                </button>
              </Link>
            </div>
            <button
              className="w-full h-[165px] bg-white rounded-[50px] m-auto px-[50px] py-[40px] flex flex-row"
              onClick={() => connectTwitter()}
            >
              <div className="flex m-auto">
                <Image
                  alt="image-twitter"
                  src={"/assets/images/pages/home/twitter.png"}
                  width={78}
                  height={60}
                ></Image>
              </div>
              <div className="flex w-full flex-col ml-[30px] place-items-start">
                <p className="text-[37px] text-[#060925]/80 leading-[40px] font-semibold">
                  Last step before the start,
                </p>
                <p className="text-[37px] text-[#060925]/80 leading-[40px] font-semibold">
                  please <span className="text-[#63ACF3]">connect</span> your
                  twitter account
                </p>
              </div>
              <div className="flex m-auto">
                <Image
                  alt="image-arrow"
                  src={"/assets/images/pages/home/arrow-big.png"}
                  width={53}
                  height={53}
                ></Image>
              </div>
            </button>
          </div>
        </div>
      )}
      {stepId == 2 && (
        <div className="absolute top-0 w-full h-screen flex items-center z-30">
          <div className="fixed w-3/4 h-[650px] left-0 right-0 m-auto bg-[#F6F8FC] rounded-[44px] shadow-2xl px-[70px] py-[50px] flex flex-col">
            <div className="flex flex-row justify-end">
              <Link href={"/"}>
                <button>
                  <Image
                    alt="eye"
                    src={"/assets/images/pages/home/cancel.png"}
                    width={49}
                    height={49}
                  ></Image>
                </button>
              </Link>
            </div>
            <div className="flex flex-col place-items-center">
              <div>
                <Image
                  alt="image-congratulation"
                  src={"/assets/images/pages/home/congratulation.png"}
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div className="flex flex-col m-auto text-center">
                <p className="text-[#060925]/50 text-[45px] font-GilroyBold">
                  Congrats with successful registration{" "}
                </p>
                <p className="text-[#060925] text-[45px] font-GilroyBold">
                  Welcome on board,{" "}
                  <span className="text-[#63ACF3] text-[45px]">Max</span>!
                </p>
              </div>
              <div className="flex flex-row items-center mt-[45px] ">
                <button className="w-[483px] h-[88px] rounded-[41px] bg-white shadow-lg">
                  <Link
                    href={"/account"}
                    className="relative w-full h-full flex flex-row p-[24px] items-center"
                  >
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/home/avatar.png"}
                      width={38}
                      height={38}
                    ></Image>
                    <p className="ml-[23px] text-[23px] leading-[25px]">
                      Go <span className="text-[#63ACF3]">set up</span> your
                      profile!
                    </p>
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/home/arrow-big.png"}
                      className="absolute right-[20px]"
                      width={30}
                      height={30}
                    ></Image>
                  </Link>
                </button>
                <Link href={"/"}>
                  <p className="text-[20px] text-[#63ACF3] flex justify-end ml-[45px]">
                    Home page
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
