"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Landing from "@/container/landing-section";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { LoginByEmail, LoginByWallet } from "@/actions/auth";

import { BaseError } from "viem";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated } = useContext(UserContext);
  const router = useRouter();

  const SignInByEmail = () => {
    console.log(name, password);
    LoginByEmail(name, password).then((res: any) => {
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
  };

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (localStorage.getItem("token")) router.push("/");
  });

  useEffect(() => {
    if (isConnected) {
      LoginByWallet(address).then((res: any) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  const handleMetaMaskLogin = () => {
    connect({ connector: connectors[0] });
  };

  const handleWalletConnectLogin = () => {
    connect({ connector: connectors[1] });
  };

  return (
    <div className="relative">
      <ToastContainer />
      <Header />
      <div className="absolute top-[100px] w-full h-full bg-[#FFFFFF]/40 backdrop-blur-[5px] z-20"></div>
      <Landing />
      <Footer />
      <div className="absolute top-0 w-full h-screen flex z-30">
        <div className="fixed w-3/4 left-0 right-0 mx-auto mt-[100px] 2xl:mt-[200px] bg-[#F6F8FC] rounded-[44px] shadow-2xl px-[50px] 2xl:px-[70px] py-[30px] 2xl:py-[50px] flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-[45px] font-semibold">Log in</p>
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
          <div className="w-full h-[430px] bg-white mt-[16px] rounded-[22.5px] flex flex-row p-[45px]">
            <div className="w-1/2 pr-[40px] flex flex-col items-center">
              <input
                value={name}
                className="w-full h-[62px] bg-[#F7F9FD] rounded-[12px] text-[20px] p-[16px] mb-[13px]"
                placeholder="Email"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <div className="relative w-full flex flex-row items-center py-[12px]">
                <input
                  type="password"
                  value={password}
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
              <div className="w-full flex justify-end p-[10px]">
                <a className="flex place-items-end">Forgot password?</a>
              </div>
              <button
                className="w-full h-[62px] bg-[#63ACF3] border-[1px] rounded-[28px] mt-[13px] mb-[25px]"
                onClick={() => SignInByEmail()}
              >
                <p className="text-[18px] text-white font-GilroySemibold">
                  Sign in
                </p>
              </button>
              <p className="text-[18px] text-[#060925]/40">
                {`Don't have an account?`}{" "}
                <span className="text-[#63ACF3]">
                  <Link href="/SignUp">Register</Link>
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
                  onClick={handleMetaMaskLogin}
                  className=" relative w-full h-[58px] flex flex-row items-center bg-[#F7F9FD] rounded-[10px] px-[23px] py-[8px] mb-[15px]"
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
                  onClick={handleWalletConnectLogin}
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
    </div>
  );
}
