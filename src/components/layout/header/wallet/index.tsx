import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ClapSpinner } from "react-spinners-kit";

export default function Wallet() {
  const [page, setPage] = useState("home");
  const [actionType, setActionType] = useState(0);
  const [sendType, setSendType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [networkModalView, setNetworkModalView] = useState(false);
  const [transactionDetailModal, setTransactionDetailModal] = useState(false);
  const [transactionSuccessModalView, setTransactionSuccessModalView] =
    useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setPage("home");
        console.log("sd");
        setTransactionSuccessModalView(true);
      }, 3000);
    }
  }, [isLoading]);

  const Home = (
    <>
      <div className="w-full h-[660px] bg-[#ECECF9] rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px] pb-[12px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full h-[190px] mt-[30px] bg-white rounded-[20px] flex flex-col p-[50px]">
            <div className="m-auto text-[33px] font-GilroySemibold">
              <p className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                $0.00 USD
              </p>
            </div>
            <div className="flex flex-row gap-[20px] mt-[16px]">
              <button
                className="w-1/2 h-[34px] bg-[#63ACF3]/10 border-[1px] border-[#63ACF3] rounded-[140px] flex flex-row justify-center items-center"
                onClick={() => setPage("sendToPage")}
              >
                <Image
                  alt="wallet"
                  src="/assets/images/header/wallet/iconamoon_send.png"
                  width={16}
                  height={16}
                ></Image>
                <p className="text-[13px] text-[#63ACF3] ml-[5px]">Send</p>
              </button>
              <button className="w-1/2 h-[34px] bg-[#63ACF3]/10 border-[1px] border-[#63ACF3] rounded-[140px] flex flex-row justify-center items-center">
                <Image
                  alt="wallet"
                  src="/assets/images/header/wallet/receive-svgrepo-com.png"
                  width={17}
                  height={17}
                ></Image>
                <p className="text-[13px] text-[#63ACF3] ml-[5px]">Receive</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="w-[36px] h-[4px] m-auto bg-[#63ACF3]" />
        </div>
        <div className="w-full h-[364px] rounded-[20px] bg-white mt-[15px] p-[25px] flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-[20px]">
              <button
                className="flex flex-col"
                onClick={() => setActionType(0)}
              >
                <p
                  className={`text-[16px] font-GilroySemibold ${
                    actionType == 0 ? "text-[#060925]" : "text-[#060925]/30"
                  } `}
                >
                  Tokens
                </p>
                <hr
                  className={`${
                    actionType == 0 ? "visible" : "invisible"
                  } w-[20px] h-[4px] m-auto bg-[#63ACF3]`}
                />
              </button>

              <button
                className="flex flex-col"
                onClick={() => setActionType(1)}
              >
                <p
                  className={`text-[16px] font-GilroySemibold ${
                    actionType == 1 ? "text-[#060925]" : "text-[#060925]/30"
                  } `}
                >
                  NFT
                </p>
                <hr
                  className={`${
                    actionType == 1 ? "visible" : "invisible"
                  } w-[20px] h-[4px] m-auto bg-[#63ACF3]`}
                />
              </button>
              <button
                className="flex flex-col"
                onClick={() => setActionType(2)}
              >
                <p
                  className={`text-[16px] font-GilroySemibold ${
                    actionType == 2 ? "text-[#060925]" : "text-[#060925]/30"
                  } `}
                >
                  Activity
                </p>
                <hr
                  className={`${
                    actionType == 2 ? "visible" : "invisible"
                  } w-[20px] h-[4px] m-auto bg-[#63ACF3]`}
                />
              </button>
            </div>
            <button
              className="w-[36px] rounded-full shadow-lg bg-white flex items-center justify-center"
              onClick={() => setPage("setting")}
            >
              <Image
                alt="setting"
                src={"/assets/images/header/settings-line.png"}
                width={24}
                height={24}
              ></Image>
            </button>
          </div>
          {actionType == 0 && (
            <div className="w-full mt-[10px] flex flex-col">
              <div className="w-full h-[190px] py-[10px] overflow-y-scroll flex flex-col">
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/Eth-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/usdt-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/usdc-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/Eth-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/Eth-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/Eth-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center">
                        <Image
                          alt="Eth-big"
                          src={"/assets/images/header/wallet/Eth-big.png"}
                          width={37}
                          height={37}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px]">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Ethereum
                        </p>
                        <p className="text-[16px] text-colorBlack/50 leading-[20px] font-GilroyMedium mt-[3px]">
                          ETH
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[20px] font-GilroySemibold text-colorBlack">
                        $0.00 USD
                      </p>
                    </div>
                  </div>
                  <hr className="my-[15px]" />
                </div>
              </div>
              <button
                className="w-full h-[40px] mt-[20px] rounded-[18px] bg-white border-[1px] border-[#63ACF3]"
                onClick={() => setPage("addTokens")}
              >
                <p className="text-[12px] text-[#63ACF3] font-GilroySemibold">
                  Add manual token
                </p>
              </button>
            </div>
          )}
          {actionType == 1 && (
            <div className="w-full flex mt-[10px]">
              <div className="w-full flex flex-col text-center p-[30px]">
                <div className="w-full">
                  <Image
                    alt="shark"
                    className="m-auto"
                    src={"/assets/images/header/shark.png"}
                    width={190}
                    height={150}
                  ></Image>
                </div>
                <p className="mt-[15px] text-[18px] text-colorBlack/40 font-GilroyMedium">
                  {"You don't have NFT's so far"}
                </p>
              </div>
            </div>
          )}
          {actionType == 2 && (
            <div className="w-full flex mt-[10px]">
              {/* <div className="w-full flex flex-col text-center p-[30px]">
                <div className="w-full">
                  <Image
                    alt="shark"
                    className="m-auto"
                    src={"/assets/images/header/shark.png"}
                    width={190}
                    height={150}
                  ></Image>
                </div>
                <p className="mt-[15px] text-[18px] text-colorBlack/40 font-GilroyMedium">
                  {"You don't have transactions"}
                </p>
              </div> */}
              <div className="w-full h-[250px] overflow-y-scroll flex flex-col p-[5px]">
                <div className="w-full flex flex-col">
                  <button
                    className="w-[350px] h-[43px] flex flex-row justify-between"
                    onClick={() => setTransactionDetailModal(true)}
                  >
                    <div className="flex flex-row">
                      <div className="flex items-center w-[40px] h-[40px] rounded-full shadow-lg justify-center">
                        <Image
                          alt="iconamoon_send"
                          src={
                            "/assets/images/header/wallet/iconamoon_send.png"
                          }
                          width={20}
                          height={20}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px] text-left">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Send
                        </p>
                        <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium mt-[3px]">
                          <span className="text-colorBlack">Jul 6</span> To:
                          0x9fd...e34d
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[16px] text-[#E64343] leading-[20px] font-GilroySemibold">
                        -0.6 ETH
                      </p>
                      <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[3px]">
                        -$0.00
                      </p>
                    </div>
                  </button>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <button className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center w-[40px] h-[40px] rounded-full shadow-lg justify-center">
                        <Image
                          alt="receive-svgrepo-com"
                          src={
                            "/assets/images/header/wallet/receive-svgrepo-com.png"
                          }
                          width={20}
                          height={20}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px] text-left">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Receive
                        </p>
                        <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium mt-[3px]">
                          <span className="text-colorBlack">Jul 6</span> To:
                          0x9fd...e34d
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[16px] text-[#27AE75] leading-[20px] font-GilroySemibold">
                        2.9 ETH
                      </p>
                      <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[3px]">
                        -$0.00
                      </p>
                    </div>
                  </button>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <button className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center w-[40px] h-[40px] rounded-full shadow-lg justify-center">
                        <Image
                          alt="iconamoon_send"
                          src={
                            "/assets/images/header/wallet/iconamoon_send.png"
                          }
                          width={20}
                          height={20}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px] text-left">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Send
                        </p>
                        <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium mt-[3px]">
                          <span className="text-colorBlack">Jul 6</span> To:
                          0x9fd...e34d
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[16px] text-[#E64343] leading-[20px] font-GilroySemibold">
                        -0.6 ETH
                      </p>
                      <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[3px]">
                        -$0.00
                      </p>
                    </div>
                  </button>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <button className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center w-[40px] h-[40px] rounded-full shadow-lg justify-center">
                        <Image
                          alt="receive-svgrepo-com"
                          src={
                            "/assets/images/header/wallet/receive-svgrepo-com.png"
                          }
                          width={20}
                          height={20}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px] text-left">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Receive
                        </p>
                        <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium mt-[3px]">
                          <span className="text-colorBlack">Jul 6</span> To:
                          0x9fd...e34d
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[16px] text-[#27AE75] leading-[20px] font-GilroySemibold">
                        2.9 ETH
                      </p>
                      <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[3px]">
                        -$0.00
                      </p>
                    </div>
                  </button>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <button className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center w-[40px] h-[40px] rounded-full shadow-lg justify-center">
                        <Image
                          alt="iconamoon_send"
                          src={
                            "/assets/images/header/wallet/iconamoon_send.png"
                          }
                          width={20}
                          height={20}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px] text-left">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Send
                        </p>
                        <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium mt-[3px]">
                          <span className="text-colorBlack">Jul 6</span> To:
                          0x9fd...e34d
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[16px] text-[#E64343] leading-[20px] font-GilroySemibold">
                        -0.6 ETH
                      </p>
                      <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[3px]">
                        -$0.00
                      </p>
                    </div>
                  </button>
                  <hr className="my-[15px]" />
                </div>
                <div className="w-full flex flex-col">
                  <button className="w-[350px] h-[43px] flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="flex items-center w-[40px] h-[40px] rounded-full shadow-lg justify-center">
                        <Image
                          alt="receive-svgrepo-com"
                          src={
                            "/assets/images/header/wallet/receive-svgrepo-com.png"
                          }
                          width={20}
                          height={20}
                        ></Image>
                      </div>
                      <div className="flex flex-col ml-[12px] text-left">
                        <p className="text-[16px] text-colorBlack leading-[20px] font-GilroySemibold">
                          Receive
                        </p>
                        <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium mt-[3px]">
                          <span className="text-colorBlack">Jul 6</span> To:
                          0x9fd...e34d
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[16px] text-[#27AE75] leading-[20px] font-GilroySemibold">
                        2.9 ETH
                      </p>
                      <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[3px]">
                        -$0.00
                      </p>
                    </div>
                  </button>
                  <hr className="my-[15px]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const TransactionDetailModal = (
    <div className="absolute top-0 w-full h-[660px] bg-bg-gray-gradient rounded-[20px] shadow-2xl flex items-end">
      <div className="w-full h-[550px] rounded-[20px] bg-white flex flex-col px-[40px] pt-[25px]">
        <div className=" w-full flex flex-row justify-between">
          <div>
            <p className="text-[20px] text-colorBlack font-GilroySemibold">
              Send
            </p>
          </div>
          <button onClick={() => setTransactionDetailModal(false)}>
            <Image
              alt="wallet"
              src="/assets/images/header/wallet/cancel.png"
              width={15}
              height={15}
            ></Image>
          </button>
        </div>
        <div className="w-full flex flex-col text-center mt-[30px]">
          <p className="text-[44px] text-colorBlack font-GilroyBold">
            -0.6 ETH
          </p>
          <p className="text-[23px] text-colorBlack/40 font-GilroyMedium">
            -$0.00
          </p>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row justify-between">
              <div>
                <p className="text-[17px] text-colorBlack/80 leading-[21px] font-GilroySemibold">
                  Date
                </p>
              </div>
              <div className="flex flex-col text-right">
                <p className="text-[16px] text-colorBlack/70 leading-[20px] font-GilroySemibold">
                  Yesterday
                </p>
                <p className="text-[14px] text-colorBlack/40 leading-[17px] font-GilroyMedium mt-[2px]">
                  12:12
                </p>
              </div>
            </div>
            <hr className="my-[10px]" />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row justify-between my-[9.5px]">
              <div className="flex flex-row items-center">
                <p className="text-[17px] text-colorBlack/80 leading-[21px] font-GilroySemibold">
                  Status
                </p>
                <Image
                  alt="info"
                  className="ml-[6px]"
                  src="/assets/images/header/wallet/info.png"
                  width={12}
                  height={12}
                ></Image>
              </div>
              <div className="flex text-right">
                <p className="text-[16px] text-[#27AE75] leading-[20px] font-GilroySemibold">
                  Successful
                </p>
              </div>
            </div>
            <hr className="my-[10px]" />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row justify-between my-[9.5px]">
              <div>
                <p className="text-[17px] text-colorBlack/80 leading-[21px] font-GilroySemibold">
                  Sent to
                </p>
              </div>
              <div className="flex text-right">
                <p className="text-[14px] text-colorBlack/40 leading-[20px] font-GilroyMedium">
                  0x9fd...e34d
                </p>
              </div>
            </div>
            <hr className="my-[10px]" />
          </div>
          <div className="w-full h-[51px] rounded-[12px] shadow-lg p-[15px] mt-[15px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <p className="text-[17px] text-colorBlack/80 font-GilroySemibold">
                  Network’s commission
                </p>
                <div>
                  <Image
                    alt="info"
                    className="ml-[6px]"
                    src="/assets/images/header/wallet/info.png"
                    width={12}
                    height={12}
                  ></Image>
                </div>
              </div>
              <p className="text-[14px] text-colorBlack/40 font-GilroyMedium">
                0 TRX (0.00$)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row mt-[30px] gap-[14px]">
          <button className="w-5/6 h-[45px] rounded-[18px] border-[1px] border-[#63ACF3]">
            <p className="text-[13px] text-[#63ACF3] font-GilroySemibold">
              Button
            </p>
          </button>
          <button className="w-[44px] h-[44px] rounded-full shadow-xl flex items-center justify-center">
            <Image
              alt="Share"
              src="/assets/images/header/wallet/lucide_share.png"
              width={25}
              height={25}
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );

  const SendToPage = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Send to
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="relative w-full h-[450px] flex flex-col mt-[40px]">
              <div className="w-full h-[50px] rounded-[12px] shadow-lg flex flex-row justify-between items-center">
                <div className="flex flex-row ml-[15px] items-center">
                  <p className="text-[14px] text-colorBlack font-GilroyMedium ml-[10px]">
                    Enter any public address
                  </p>
                </div>
                <div className="w-[36px] h-[36px] mr-[20px] rounded-full shadow-lg flex justify-center items-center">
                  <button>
                    <Image
                      alt="wallet"
                      src="/assets/images/header/wallet/lucide_scan-line.png"
                      width={24}
                      height={24}
                    ></Image>
                  </button>
                </div>
              </div>
              <div className="w-full h-[400px] rounded-[20px] bg-white mt-[15px] py-[25px] flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-[20px]">
                    <button
                      className="flex flex-col"
                      onClick={() => setSendType(0)}
                    >
                      <p
                        className={`text-[16px] font-GilroySemibold ${
                          sendType == 0 ? "text-[#060925]" : "text-[#060925]/30"
                        } `}
                      >
                        Last sent
                      </p>
                      <hr
                        className={`${
                          sendType == 0 ? "visible" : "invisible"
                        } w-[20px] h-[4px] m-auto bg-[#63ACF3]`}
                      />
                    </button>

                    <button
                      className="flex flex-col"
                      onClick={() => setSendType(1)}
                    >
                      <p
                        className={`text-[16px] font-GilroySemibold ${
                          sendType == 1 ? "text-[#060925]" : "text-[#060925]/30"
                        } `}
                      >
                        Contacts
                      </p>
                      <hr
                        className={`${
                          sendType == 1 ? "visible" : "invisible"
                        } w-[20px] h-[4px] m-auto bg-[#63ACF3]`}
                      />
                    </button>
                  </div>
                </div>
                {sendType == 0 && (
                  <div className="w-full mt-[10px] flex flex-col">
                    <div className="w-full h-[250px] py-[10px] overflow-y-scroll flex flex-col">
                      <div className="w-full flex flex-col">
                        <div className="w-[350px] h-[43px] flex flex-row justify-between items-center">
                          <div className="flex">
                            <p className="text-[16px] text-colorBlack/80 font-GilroySemibold">
                              TURtXEanqCARio77o1pqq7oHpmB4tkRN2f
                            </p>
                          </div>
                          <button className="flex items-center">
                            <Image
                              alt="Copy-Blue"
                              src={"/assets/images/header/wallet/copy-blue.png"}
                              width={22}
                              height={22}
                            ></Image>
                          </button>
                        </div>
                        <hr className="my-[10px]" />
                      </div>
                      <div className="w-full flex flex-col">
                        <div className="w-[350px] h-[43px] flex flex-row justify-between items-center">
                          <div className="flex">
                            <p className="text-[16px] text-colorBlack/80 font-GilroySemibold">
                              TURtXEanqCARio77o1pqq7oHpmB4tkRN2f
                            </p>
                          </div>
                          <button className="flex items-center">
                            <Image
                              alt="Copy-Blue"
                              src={"/assets/images/header/wallet/copy-blue.png"}
                              width={22}
                              height={22}
                            ></Image>
                          </button>
                        </div>
                        <hr className="my-[10px]" />
                      </div>
                    </div>
                  </div>
                )}
                {sendType == 1 && (
                  <div className="w-full flex mt-[10px]">
                    <div className="w-full flex flex-col text-center p-[30px]">
                      <div className="w-full">
                        <Image
                          alt="shark"
                          className="m-auto"
                          src={"/assets/images/header/shark.png"}
                          width={190}
                          height={150}
                        ></Image>
                      </div>
                      <p className="mt-[15px] text-[18px] text-colorBlack/40 font-GilroyMedium">
                        {"You don't have contacts so far"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <button
                className="absolute bottom-0 left-0 right-0 m-auto w-full h-[54px] bg-[#63ACF3] rounded-[18px]"
                onClick={() => {
                  setPage("sendAmountPage");
                }}
              >
                <p className="text-[17px] text-white font-GilroySemibold">
                  Next
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const SendAmountPage = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("sendToPage")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Enter the amount
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="relative w-full h-[450px] flex flex-col mt-[40px] px-[10px]">
              <div className="w-full h-[50px] rounded-[12px] shadow-lg flex flex-row justify-between items-center">
                <div className="flex flex-row ml-[15px] items-center">
                  <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
                    <button
                      className="w-full flex flex-row items-center"
                      onClick={() => setNetworkModalView(true)}
                    >
                      <Image
                        alt="image-copy"
                        src={"/assets/images/header/wallet/Eth-small.png"}
                        width={23}
                        height={23}
                      ></Image>
                      <Image
                        alt="image-copy"
                        className="ml-[7px]"
                        src={"/assets/images/header/wallet/arrow-down.png"}
                        width={7}
                        height={7}
                      ></Image>
                    </button>
                  </div>
                  <p className="text-[15px] text-colorBlack font-GilroyMedium ml-[10px]">
                    00.0
                  </p>
                </div>
              </div>
              <button
                className="absolute bottom-0 left-0 right-0 m-auto w-full h-[54px] bg-[#63ACF3] rounded-[18px]"
                onClick={() => setPage("confirmationPage")}
              >
                <p className="text-[17px] text-white font-GilroySemibold">
                  Send
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ConfirmationPage = (
    <>
      <div className="w-full h-[660px] bg-[#ECECF9] rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px] pb-[20px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("sendAmountPage")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Enter the amount
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
          </div>

          <div className="w-full h-[50px] mt-[30px] bg-white rounded-[12px] flex justify-center items-center">
            <p className="text-[16px] text-colorBlack/30 font-GilroyMedium">
              <span className="text-[#1098FC]">0X010E...024L</span> Token for
              token
            </p>
          </div>
        </div>
        <div>
          <hr className="w-[36px] h-[4px] m-auto bg-[#63ACF3]" />
        </div>
        <div className="w-full h-[500px] rounded-[20px] bg-white mt-[18px] px-[38px] py-[23px] flex flex-col">
          <p className="text-[16px] text-colorBlack font-GilroySemibold">
            Details
          </p>
          <div className="w-full flex justify-end mt-[10px] mb-[18px]">
            <button>
              <p className="text-[14px] text-[#0F7BF4] font-GilroyBold">EDIT</p>
            </button>
          </div>
          <div className="flex justify-between">
            <div className="max-w-[99px]">
              <p className="text-[14px] text-[#63ACF3] font-GilroyBold">
                Estimated gas fee
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-[12px] text-colorBlack/60 font-GilroyMedium">
                0.02121
              </p>
              <p className="text-[12px] text-colorBlack/60 font-GilroyMedium mt-[16px]">
                0.02185 token
              </p>
            </div>
          </div>
          <div className="flex justify-between text-[12px] mt-[16px] text-colorBlack/60 font-GilroyMedium">
            <div className="max-w-[99px]">
              <p>Site suggested</p>
            </div>
            <div className="flex flex-col text-right">
              <p>Max amount: 0.002151 Token</p>
            </div>
          </div>
          <hr className="my-[20px]" />
          <div className="flex justify-between">
            <div className="max-w-[99px]">
              <p className="text-[14px] text-[#63ACF3] font-GilroyBold">
                Total
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-[12px] text-colorBlack/60 font-GilroyMedium">
                0.02121
              </p>
              <p className="text-[12px] text-colorBlack/60 font-GilroyMedium mt-[16px]">
                0.02185 token
              </p>
            </div>
          </div>
          <div className="flex justify-between text-[12px] mt-[16px] text-colorBlack/60 font-GilroyMedium">
            <div className="max-w-[99px]">
              <p>Amount + gas fee</p>
            </div>
            <div className="flex flex-col text-right">
              <p>Max amount: 0.002151 Token</p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-[13px] mt-[30px]">
            <button className="w-[175px] h-[45px] border-[1px] border-[#63ACF3] rounded-[18px]">
              <p className="text-[15px] text-[#63ACF3] font-GilroySemibold">
                Reject
              </p>
            </button>
            <button
              className="w-[175px] h-[45px] bg-[#63ACF3] rounded-[18px]"
              onClick={() => setIsLoading(true)}
            >
              <p className="text-[15px] text-white font-GilroySemibold">
                Confirm
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const LoadingPage = (
    <div className="absolute top-0 w-full h-[660px] bg-bg-gray-gradient rounded-[20px] shadow-2xl p-[25px] flex items-center">
      <div className="m-auto">
        <ClapSpinner
          size={50}
          frontColor="#ffffff"
          backColor="#ffffff"
          loading={isLoading}
        />
      </div>
    </div>
  );

  const TransactionSuccessModal = (
    <div className="absolute top-0 w-full h-[660px] bg-bg-gray-gradient rounded-[20px] shadow-2xl p-[25px] flex items-center">
      <div className="w-full h-[263px] rounded-[20px] bg-white flex flex-col">
        <div className=" w-full flex flex-row px-[22px] pt-[22px] justify-end">
          <button onClick={() => setTransactionSuccessModalView(false)}>
            <Image
              alt="wallet"
              src="/assets/images/header/wallet/cancel.png"
              width={15}
              height={15}
            ></Image>
          </button>
        </div>
        <div className="w-full flex flex-col">
          <div className="relative m-auto">
            <Image
              alt="ellipse"
              src="/assets/images/header/wallet/ellipse-pink.png"
              width={100}
              height={100}
            ></Image>
            <Image
              alt="check"
              className="absolute top-[20%] left-0 right-0 m-auto"
              src="/assets/images/header/wallet/check-success.png"
              width={80}
              height={80}
            ></Image>
          </div>
          <div className="w-full text-center">
            <p className="text-[19px] text-colorBlack font-GilroyBold">
              Transaction has been sent!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row gap-[13px] p-[25px]">
          <button className="w-[175px] h-[45px] border-[1px] border-[#63ACF3] rounded-[18px]">
            <p className="text-[11px] text-[#63ACF3] font-GilroySemibold">
              View on blockchain
            </p>
          </button>
          <button
            className="w-[175px] h-[45px] bg-[#63ACF3] rounded-[18px]"
            onClick={() => setTransactionSuccessModalView(false)}
          >
            <p className="text-[11px] text-white font-GilroySemibold">
              Complete
            </p>
          </button>
        </div>
      </div>
    </div>
  );

  const AddTokens = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Add Tokens
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="relative w-full h-[450px] flex flex-col mt-[40px] px-[10px]">
              <div className="w-full flex flex-col">
                <p className="text-[16px] text-colorBlack leading-[19px] font-GilroySemibold">
                  Token Contract Address
                </p>
                <div className="w-full h-[50px] mt-[13px] rounded-[12px] shadow-lg flex flex-row items-center"></div>
              </div>
              <div className="w-full flex flex-col mt-[32px]">
                <p className="text-[16px] text-colorBlack leading-[19px] font-GilroySemibold">
                  Token Symbol
                </p>
                <div className="w-full h-[50px] mt-[13px] rounded-[12px] shadow-lg flex flex-row items-center"></div>
              </div>
              <div className="w-full flex flex-col mt-[32px]">
                <p className="text-[16px] text-colorBlack leading-[19px] font-GilroySemibold">
                  Decimals of Precison
                </p>
                <div className="w-full h-[50px] mt-[13px] rounded-[12px] shadow-lg flex flex-row items-center"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 m-auto w-full h-[54px] flex flex-row gap-[13px]">
                <button
                  className="w-1/2 h-full rounded-[18px] border-[1px] border-[#63ACF3]"
                  onClick={() => setPage("home")}
                >
                  <p className="text-[15px] text-[#63ACF3] font-GilroySemibold">
                    Cancel
                  </p>
                </button>
                <button
                  className="w-1/2 h-full rounded-[18px]  bg-[#63ACF3]"
                  onClick={() => setPage("home")}
                >
                  <p className="text-[15px] text-white font-GilroySemibold">
                    Add Token
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const Setting = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Setting
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("home")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="w-full flex flex-col mt-[40px]">
              <div className="w-full flex flex-col">
                <button
                  className="w-full flex flex-row justify-between"
                  onClick={() => setPage("accountDetails")}
                >
                  <div className="flex flex-row">
                    <div className="w-[31px] h-[31px] rounded-full shadow-lg flex items-center">
                      <Image
                        alt="QRcode"
                        className="m-auto"
                        src={"/assets/images/header/wallet/lucide_qr-code.png"}
                        width={16}
                        height={16}
                      ></Image>
                    </div>
                    <p className="ml-[10px] text-[16px] text-colorBlack font-GilroySemibold">
                      Account details
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      alt="forward"
                      src={"/assets/images/header/wallet/forward.png"}
                      width={13}
                      height={9}
                    ></Image>
                  </div>
                </button>
                <hr className="my-[15px]" />
              </div>
              <div className="w-full flex flex-col">
                <button
                  className="w-full flex flex-row justify-between"
                  onClick={() => setPage("blockchainExploer")}
                >
                  <div className="flex flex-row">
                    <div className="w-[31px] h-[31px] rounded-full shadow-lg flex items-center">
                      <Image
                        alt="QRcode"
                        className="m-auto"
                        src={
                          "/assets/images/header/wallet/icon-park-outline_blockchain.png"
                        }
                        width={16}
                        height={16}
                      ></Image>
                    </div>
                    <p className="ml-[10px] text-[16px] text-colorBlack font-GilroySemibold">
                      Veiw in the blockchain explorer
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      alt="forward"
                      src={"/assets/images/header/wallet/forward.png"}
                      width={13}
                      height={9}
                    ></Image>
                  </div>
                </button>
                <hr className="my-[15px]" />
              </div>
              <div className="w-full flex flex-col">
                <button
                  className="w-full flex flex-row justify-between"
                  onClick={() => setPage("currency")}
                >
                  <div className="flex flex-row">
                    <div className="w-[31px] h-[31px] rounded-full shadow-lg flex items-center">
                      <Image
                        alt="QRcode"
                        className="m-auto"
                        src={"/assets/images/header/wallet/carbon_currency.png"}
                        width={16}
                        height={16}
                      ></Image>
                    </div>
                    <p className="ml-[10px] text-[16px] text-colorBlack font-GilroySemibold">
                      Currency
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      alt="forward"
                      src={"/assets/images/header/wallet/forward.png"}
                      width={13}
                      height={9}
                    ></Image>
                  </div>
                </button>
                <hr className="my-[15px]" />
              </div>
              <div className="w-full flex flex-col">
                <button
                  className="w-full flex flex-row justify-between"
                  onClick={() => setPage("exportWallet")}
                >
                  <div className="flex flex-row">
                    <div className="w-[31px] h-[31px] rounded-full shadow-lg flex items-center">
                      <Image
                        alt="QRcode"
                        className="m-auto"
                        src={
                          "/assets/images/header/wallet/prime_file-export.png"
                        }
                        width={16}
                        height={16}
                      ></Image>
                    </div>
                    <p className="ml-[10px] text-[16px] text-colorBlack font-GilroySemibold">
                      Export wallet
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      alt="forward"
                      src={"/assets/images/header/wallet/forward.png"}
                      width={13}
                      height={9}
                    ></Image>
                  </div>
                </button>
                <hr className="my-[15px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const AccountDetails = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Account Details
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="w-full flex flex-col mt-[40px]">
              <div className="w-full px-[30px] flex flex-col">
                <div className="w-full h-[313px] m-auto rounded-[20px] shadow-lg flex items-center">
                  <Image
                    alt="QRcode"
                    className="m-auto"
                    src={"/assets/images/header/wallet/QRcode.png"}
                    width={245}
                    height={245}
                  ></Image>
                </div>
                <div className="w-full h-[40px] mt-[30px] rounded-[168px] shadow-lg flex items-center">
                  <div className="flex flex-row m-auto">
                    <p className="text-[12px] text-colorBlack/80 font-GilroySemibold">
                      TURtXEanqCARio77o1pqq7oHpmB4tkRN2f
                    </p>
                    <button className="ml-[10px]">
                      <Image
                        alt="image-copy"
                        src={"/assets/images/header/copy-blue.png"}
                        width={18}
                        height={18}
                      ></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const BlockChainExplorer = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Blockchain Explorer
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="w-full flex flex-col mt-[40px]"></div>
          </div>
        </div>
      </div>
    </>
  );

  const Currency = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Currency
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="relative w-full h-[450px] flex flex-col mt-[40px] px-[10px]">
              <div className="w-full h-[50px] rounded-[12px] shadow-lg flex flex-row justify-between items-center">
                <div className="flex flex-row ml-[15px] items-center">
                  <div className="w-[36px] h-[36px] rounded-full shadow-lg flex items-center justify-center">
                    <Image
                      alt="wallet"
                      src="/assets/images/header/wallet/cryptocurrency-color_usd.png"
                      width={24}
                      height={24}
                    ></Image>
                  </div>
                  <p className="text-[14px] text-colorBlack font-GilroyMedium ml-[10px]">
                    <span className="font-GilroyBold">USD</span> - United States
                    Dollar
                  </p>
                </div>
                <div className="mr-[20px]">
                  <button>
                    <Image
                      alt="wallet"
                      src="/assets/images/header/wallet/arrow-down.png"
                      width={11}
                      height={6}
                    ></Image>
                  </button>
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 m-auto w-full h-[54px] bg-[#63ACF3] rounded-[18px]">
                <p className="text-[17px] text-white font-GilroySemibold">
                  Save
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ExportWallet = (
    <>
      <div className="w-full h-[660px] bg-white rounded-[20px] shadow-2xl  flex flex-col">
        <div className="p-[25px]">
          <div className="flex flex-row justify-between ">
            <div className="w-[53px] h-[34px] bg-white rounded-[70px] shadow-xl p-[5px]">
              <button
                className="w-full flex flex-row items-center"
                onClick={() => setNetworkModalView(true)}
              >
                <Image
                  alt="image-copy"
                  src={"/assets/images/header/wallet/Eth-small.png"}
                  width={23}
                  height={23}
                ></Image>
                <Image
                  alt="image-copy"
                  className="ml-[7px]"
                  src={"/assets/images/header/wallet/arrow-down.png"}
                  width={7}
                  height={7}
                ></Image>
              </button>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div className="w-[168px] h-[35px] flex bg-white rounded-[140px] shadow-md items-center">
                <div className="m-auto flex flex-row">
                  <div className="w-[95px]">
                    <p className="text-[13px] text-[#63ACF3] font-GilroyMedium">
                      addressasdasd
                    </p>
                  </div>
                  <Image
                    alt="image-copy"
                    src={"/assets/images/header/copy-blue.png"}
                    width={18}
                    height={18}
                  ></Image>
                </div>
              </div>
              <div>
                <Image
                  alt="wallet"
                  src="/assets/images/header/avatar.png"
                  width={41}
                  height={41}
                ></Image>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[28px]">
            <div className="w-full flex flex-row justify-between">
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="back"
                  src={"/assets/images/header/wallet/back.png"}
                  width={12}
                  height={9}
                ></Image>
              </button>
              <p className="text-[16px] text-colorBlack font-GilroySemibold">
                Export Wallet
              </p>
              <button
                className="flex items-center"
                onClick={() => setPage("setting")}
              >
                <Image
                  alt="cancel"
                  src={"/assets/images/header/wallet/cancel.png"}
                  width={13}
                  height={13}
                ></Image>
              </button>
            </div>
            <div className="relative w-full h-[450px] flex flex-col mt-[40px] px-[10px]">
              <div className="w-full h-[50px] rounded-[12px] shadow-lg flex flex-row justify-between items-center">
                <div className="flex flex-row ml-[15px] items-center">
                  <div className="w-[36px] h-[36px] rounded-full shadow-lg flex items-center justify-center">
                    <Image
                      alt="wallet"
                      src="/assets/images/header/wallet/key-blue.png"
                      width={24}
                      height={24}
                    ></Image>
                  </div>
                  <div className="max-w-[240px]">
                    <p className="w-full text-[12px] text-colorBlack font-GilroyMedium ml-[10px] break-words">
                      ae0be0ca12bad0c32222a001020fe0a1778b4e91efb552eda75430c33850c6c0
                    </p>
                  </div>
                </div>
                <div className="mr-[15px] flex items-center">
                  <button>
                    <Image
                      alt="wallet"
                      src="/assets/images/header/wallet/copy-blue.png"
                      width={24}
                      height={24}
                    ></Image>
                  </button>
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 m-auto w-full h-[54px] bg-[#63ACF3] rounded-[18px]">
                <p className="text-[17px] text-white font-GilroySemibold">
                  Export wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const networkModal = (
    <div className="absolute top-0 w-full h-[660px] bg-bg-gray-gradient rounded-[20px] shadow-2xl p-[25px]">
      <div className="w-full h-[213px] rounded-[20px] bg-white flex flex-col">
        <div className="relative w-full flex flex-row p-[22px]">
          <div className="m-auto">
            <p className="text-[16px] text-colorBlack font-GilroySemibold">
              Choose your network
            </p>
          </div>
          <button
            className="absolute right-[20px]"
            onClick={() => setNetworkModalView(false)}
          >
            <Image
              alt="wallet"
              src="/assets/images/header/wallet/cancel.png"
              width={15}
              height={15}
            ></Image>
          </button>
        </div>
        <button
          className="w-full h-[52px] px-[20px] flex flex-row items-center bg-[#ECECF9]/30"
          onClick={() => setNetworkModalView(false)}
        >
          <div className="w-[32px] h-[32px]">
            <Image
              alt="wallet"
              src="/assets/images/header/wallet/Eth-big.png"
              width={32}
              height={32}
            ></Image>
          </div>
          <div className="ml-[5px]">
            <p className="text-[17px] text-colorBlack font-GilroySemibold">
              Ethereum Mainnet
            </p>
          </div>
        </button>
        <div className="px-[25px] pt-[28px]">
          <button className="w-full h-[41px] bg-[#63ACF3] rounded-[18px]">
            <p className="text-[12px] text-white font-GilroySemibold">
              Add another network
            </p>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-[660px] bg-[#ECECF9] rounded-[20px] shadow-2xl flex flex-col ">
      {page == "home" && Home}
      {page == "addTokens" && AddTokens}
      {page == "setting" && Setting}
      {page == "accountDetails" && AccountDetails}
      {page == "currency" && Currency}
      {page == "exportWallet" && ExportWallet}
      {page == "blockchainExploer" && BlockChainExplorer}
      {page == "sendToPage" && SendToPage}
      {page == "sendAmountPage" && SendAmountPage}
      {page == "confirmationPage" && ConfirmationPage}
      {networkModalView && networkModal}
      {isLoading && LoadingPage}
      {transactionSuccessModalView && TransactionSuccessModal}
      {transactionDetailModal && TransactionDetailModal}
    </div>
  );
}
