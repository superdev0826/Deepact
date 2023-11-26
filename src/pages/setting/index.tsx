import React, { useState } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import OtpInput from "react-otp-input";
import Link from "next/link";

export default function Setting() {
  const [twoStepVerify, setTwoStepVerify] = useState(false);
  const [twoStepVerifySuccessful, setTwoStepVerifySuccessful] = useState(false);
  const [google2FAVerify, setGoogle2FAVerify] = useState(false);
  const [google2FAVerifyStep, setGoogle2FAVerifyStep] = useState(1);
  const [otp, setOtp] = useState("");

  const submitTwoStepVerify = () => {
    setTwoStepVerify(false);
    setTwoStepVerifySuccessful(true);
  };

  const TwoStepVerifyModal = (
    <div className="w-full h-full">
      <div className="absolute top-[100px] w-full h-full bg-[#FFFFFF]/40 backdrop-blur-[5px] z-10"></div>
      <div className="absolute top-0 w-full h-screen flex  z-20">
        <div className="fixed w-2/3 min-h-[350px] top-[200px] 2xl:top-[300px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] pt-[50px] z-20">
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <p className="text-[45px] text-colorBlack font-GilroyBold">
                Two-step verification
              </p>
              <button onClick={() => setTwoStepVerify(false)}>
                <Image
                  alt="avatar"
                  src={"/assets/images/pages/setting/cancel.png"}
                  width={50}
                  height={50}
                ></Image>
              </button>
            </div>
            <div className="w-full flex flex-col mt-[50px]">
              <p className="text-[15px] text-colorBlack/40 font-GilroySemibold">
                Please enter your email address
              </p>
              <div className="w-full flex flex-row bg-white mt-[17px] p-[7px]">
                <input
                  type="text"
                  className="w-4/5"
                  placeholder="Enter your new email adress"
                />
                <button
                  className="w-1/5 h-[37px] rounded-[14px] bg-[#4D92D5]"
                  onClick={() => submitTwoStepVerify()}
                >
                  <p className="text-[12px] text-white font-GilroySemibold">
                    send verification
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TwoStepVerifySuccessfulModal = (
    <div className="w-full h-full">
      <div className="absolute top-[100px] w-full h-full bg-[#FFFFFF]/40 backdrop-blur-[5px] z-10"></div>
      <div className="absolute top-0 w-full h-screen flex z-20">
        <div className="fixed w-2/3 min-h-[400px] 2xl:min-h-[550px] top-[150px] 2xl:top-[250px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] pt-[20px] 2xl:pt-[50px] z-20">
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-end">
              <button onClick={() => setTwoStepVerifySuccessful(false)}>
                <Image
                  alt="avatar"
                  src={"/assets/images/pages/setting/cancel.png"}
                  width={50}
                  height={50}
                ></Image>
              </button>
            </div>
            <div className="w-full flex justify-center">
              <Image
                alt="check"
                src={"/assets/images/pages/setting/check-star.png"}
                width={160}
                height={160}
              ></Image>
            </div>
            <div className="w-full flex flex-col text-center mt-[20px] 2xl:mt-[38px] ">
              <p className="text-[45px] text-colorBlack font-GilroyBold">
                Verification successful
              </p>
              <div className="max-w-[248px] m-auto">
                <p className="text-20px text-colorBlack/30 font-GilroyMedium mt-[18px]">
                  Your account is now linked to your email address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Google2FAVerifyModal = (
    <div className="w-full h-full">
      <div className="absolute top-[100px] w-full h-full bg-[#FFFFFF]/40 backdrop-blur-[5px] z-10"></div>
      <div className="absolute top-0 w-full h-screen flex z-20">
        {google2FAVerifyStep == 1 && (
          <div className="fixed w-2/3 min-h-[420px] top-[120px] 2xl:top-[250px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] py-[50px] z-20">
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between">
                <div className="max-w-[513px]">
                  <p className="text-[45px] text-colorBlack font-GilroyBold">
                    Protect your account with{" "}
                    <span className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                      Google
                    </span>{" "}
                    2FA
                  </p>
                </div>
                <div>
                  <button onClick={() => setGoogle2FAVerify(false)}>
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/setting/cancel.png"}
                      width={50}
                      height={50}
                    ></Image>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col mt-[50px]">
                <div className="max-w-[574px]">
                  <p className="text-[17px] text-colorBlack/40 font-GilroySemibold">
                    Prevent hackers from accessing your account with an
                    additional layer of security. When you sign in, 2-Step
                    verification helps make sure your personal information stays
                    private, safe and secure.
                  </p>
                </div>

                <button
                  className="w-3/5 h-[48px] rounded-[14px] bg-[#4D92D5] mt-[26px]"
                  onClick={() => setGoogle2FAVerifyStep(2)}
                >
                  <p className="text-[15px] text-white font-GilroySemibold">
                    Get started
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}
        {google2FAVerifyStep == 2 && (
          <div className="fixed w-2/3 min-h-[420px] top-[120px] 2xl:top-[250px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] py-[50px] z-20">
            <div className="w-full flex flex-col">
              <div className="relative w-full flex justify-center">
                <div className="max-w-[600px] text-center">
                  <p className="text-[45px] text-colorBlack font-GilroyBold">
                    Use your Google email as your second step to sign in
                  </p>
                </div>
                <div className="absolute right-0">
                  <button
                    onClick={() => {
                      setGoogle2FAVerify(false);
                      setGoogle2FAVerifyStep(1);
                    }}
                  >
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/setting/cancel.png"}
                      width={50}
                      height={50}
                    ></Image>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col mt-[38px]">
                <div className="max-w-[631px] m-auto text-center">
                  <p className="text-[17px] text-colorBlack/40 font-GilroySemibold">
                    {
                      "After you enter your password, Google prompts are securely sent to every phone where you're signed in. Just tap the notification to review and sign in."
                    }
                  </p>
                </div>

                <button
                  className="w-1/2 h-[48px] rounded-[18px] bg-[#4D92D5] mt-[26px] mx-auto"
                  onClick={() => setGoogle2FAVerifyStep(3)}
                >
                  <p className="text-[15px] text-white font-GilroySemibold">
                    Continue
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}
        {google2FAVerifyStep == 3 && (
          <div className="fixed w-2/3 min-h-[420px] top-[120px] 2xl:top-[250px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] py-[50px] z-20">
            <div className="w-full flex flex-col">
              <div className="relative w-full flex justify-center">
                <div className="max-w-[400px] text-center">
                  <p className="text-[45px] text-colorBlack font-GilroyBold">
                    Add your email address for 2FA
                  </p>
                </div>
                <div className="absolute right-0">
                  <button
                    onClick={() => {
                      setGoogle2FAVerify(false);
                      setGoogle2FAVerifyStep(1);
                    }}
                  >
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/setting/cancel.png"}
                      width={50}
                      height={50}
                    ></Image>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col mt-[38px]">
                <div className="max-w-[631px] m-auto text-center">
                  <p className="text-[17px] text-colorBlack/40 font-GilroySemibold">
                    {
                      "After you enter your password, Google prompts are securely sent to every phone where you're signed in. Just tap the notification to review and sign in."
                    }
                  </p>
                </div>
                <div className="w-1/2 flex flex-row rounded-[12px] bg-white mt-[17px] p-[7px] m-auto">
                  <input
                    type="text"
                    className="w-2/3 mx-[10px]"
                    placeholder="Enter your new email adress"
                  />
                  <button
                    className="w-1/3 h-[37px] rounded-[14px] bg-[#4D92D5]"
                    onClick={() => setGoogle2FAVerifyStep(4)}
                  >
                    <p className="text-[12px] text-white font-GilroySemibold">
                      send code
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {google2FAVerifyStep == 4 && (
          <div className="fixed w-2/3 min-h-[420px] top-[120px] 2xl:top-[250px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] py-[50px] z-20">
            <div className="w-full flex flex-col">
              <div className="relative w-full flex justify-center">
                <div className="max-w-[430px] text-center">
                  <p className="text-[45px] text-colorBlack font-GilroyBold">
                    Enter the code that we sent you
                  </p>
                </div>
                <div className="absolute right-0">
                  <button
                    onClick={() => {
                      setGoogle2FAVerify(false);
                      setGoogle2FAVerifyStep(1);
                      setOtp("");
                    }}
                  >
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/setting/cancel.png"}
                      width={50}
                      height={50}
                    ></Image>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col mt-[38px]">
                <div className="max-w-[631px] m-auto text-center">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span className="w-[30px]"></span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                      width: 75,
                      height: 75,
                      fontSize: "45px",
                      borderRadius: "18px",
                      boxShadow:
                        "0px 12.081632614135742px 42.28571319580078px 0px #4D92D526",
                    }}
                  />
                </div>
                <div className="w-1/3 flex flex-col  mt-[40px] p-[7px] m-auto">
                  <div className="flex flex-row text-[17px] text-colorBlack/40 font-GilroyBold m-auto">
                    <p>{"Didn't get the code?"}</p>
                    <button>
                      <p className="text-[#63ACF3]">Resend</p>
                    </button>
                  </div>
                  <button
                    className="w-full h-[48px] rounded-[14px] bg-[#4D92D5] mt-[40px]"
                    onClick={() => setGoogle2FAVerifyStep(5)}
                  >
                    <p className="text-[15px] text-white font-GilroySemibold">
                      send code
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {google2FAVerifyStep == 5 && (
          <div className="fixed w-2/3 min-h-[400px] 2xl:min-h-[490px] top-[150px] 2xl:top-[250px] left-0 right-0 mx-auto bg-[#F6FBFC] rounded-[44px] shadow-2xl px-[63px] pt-[20px] 2xl:pt-[50px] z-20">
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-end">
                <button
                  onClick={() => {
                    setGoogle2FAVerify(false);
                    setGoogle2FAVerifyStep(1);
                    setOtp("");
                  }}
                >
                  <Image
                    alt="avatar"
                    src={"/assets/images/pages/setting/cancel.png"}
                    width={50}
                    height={50}
                  ></Image>
                </button>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  alt="check"
                  src={"/assets/images/pages/setting/check-star.png"}
                  width={160}
                  height={160}
                ></Image>
              </div>
              <div className="w-full flex flex-col text-center mt-[20px] 2xl:mt-[38px] ">
                <p className="text-[45px] text-colorBlack font-GilroyBold">
                  Googole 2FA added successfully
                </p>
                <div className="max-w-[248px] m-auto">
                  <p className="text-20px text-colorBlack/30 font-GilroyMedium mt-[18px]">
                    Your account is now linked to your email address
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <Header />
      <div className="w-full flex flex-col">
        <div className="w-full min-h-[280px] bg-[#F0F6FC] pt-[57px] pl-[200px]">
          <Link href={"/"}>
            <p className="text-[20px] text-[#63ACF3] font-GilroyMedium">Back</p>
          </Link>
          <p className="pt-[30px] text-[24px] text-[060925] font-GilroyBold">
            Setting
          </p>
          <p className="pt-[14px] text-[15px] text-colorBlack/40 font-GilroySemibold">
            jameslaurentsdesign@gmail.com
          </p>
        </div>
        <div className="w-1/2 flex flex-col m-auto mt-[-50px]">
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              General
            </p>
            <div className="w-full mt-[28px] rounded-[12px] shadow-lg flex flex-row items-center">
              <button className="relative my-[23px] ml-[30px] mr-[25px]">
                <Image
                  alt="avatar"
                  src={"/assets/images/pages/setting/avatar-setting.png"}
                  width={67}
                  height={67}
                ></Image>
                <Image
                  alt="avatar"
                  className="absolute right-0 bottom-0"
                  src={"/assets/images/pages/setting/edit.png"}
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
                    src={"/assets/images/pages/setting/check.png"}
                    width={10}
                    height={8}
                  ></Image>
                </div>
                <p className="text-[15px] text-colorBlack/40 mt-[5px] font-GilroySemibold">
                  This will be displayed on your profile
                </p>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Username
                </p>
                <div className="w-full mt-[12px] flex items-center rounded-[12px] shadow-lg">
                  <p className="text-[15px] text-[#63ACF3] font-GilroyMedium ml-[15px] my-[13px]">
                    jameslaurents
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Email
                </p>
                <div className="w-full mt-[12px] flex items-center rounded-[12px] shadow-lg justify-between">
                  <p className="text-[15px]  font-GilroyMedium ml-[15px] my-[13px]">
                    jameslaurnetsdesign@gmail.com
                  </p>
                  <button className="mr-[20px]">
                    <Image
                      alt="avatar"
                      src={"/assets/images/pages/setting/pencil.png"}
                      width={15}
                      height={10}
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Social
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Telegram
                </p>
                <div className="w-full flex flex-row">
                  <div className="w-3/4 mt-[12px] flex items-center rounded-[12px] shadow-lg">
                    <p className="text-[15px] font-GilroyMedium ml-[15px] my-[13px]">
                      https://telegram.com/James
                    </p>
                  </div>
                  <div className="w-1/4 pl-[30px]">
                    <button className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]">
                      <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                        Change telegram
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Telegram
                </p>
                <div className="w-full flex flex-row">
                  <div className="w-3/4 mt-[12px] flex items-center rounded-[12px] shadow-lg">
                    <p className="text-[15px] font-GilroyMedium ml-[15px] my-[13px]">
                      https://telegram.com/James
                    </p>
                  </div>
                  <div className="w-1/4 pl-[30px]">
                    <button className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]">
                      <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                        Change telegram
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Telegram
                </p>
                <div className="w-full flex flex-row">
                  <div className="w-3/4 mt-[12px] flex items-center rounded-[12px] shadow-lg">
                    <p className="text-[15px] font-GilroyMedium ml-[15px] my-[13px]">
                      https://telegram.com/James
                    </p>
                  </div>
                  <div className="w-1/4 pl-[30px]">
                    <button className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]">
                      <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                        Change telegram
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Telegram
                </p>
                <div className="w-full flex flex-row">
                  <div className="w-3/4 mt-[12px] flex items-center rounded-[12px] shadow-lg">
                    <p className="text-[15px] font-GilroyMedium ml-[15px] my-[13px]">
                      https://telegram.com/James
                    </p>
                  </div>
                  <div className="w-1/4 pl-[30px]">
                    <button className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]">
                      <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                        Change telegram
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Telegram
                </p>
                <div className="w-full flex flex-row">
                  <div className="w-3/4 mt-[12px] flex items-center rounded-[12px] shadow-lg">
                    <p className="text-[15px] font-GilroyMedium ml-[15px] my-[13px]">
                      https://telegram.com/James
                    </p>
                  </div>
                  <div className="w-1/4 pl-[30px]">
                    <button className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]">
                      <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                        Change telegram
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Password
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Enter old password
                </p>
                <div className="w-full mt-[12px] flex items-center rounded-[12px] shadow-lg px-[15px] py-[10px]">
                  <input
                    className="w-full text-[15px]  font-GilroyMedium "
                    placeholder="*********"
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-col">
                <p className="text-[15px] text-colorBlack font-GilroySemibold">
                  Enter new password
                </p>
                <div className="w-full mt-[12px] flex items-center rounded-[12px] shadow-lg px-[15px] py-[10px]">
                  <input
                    className="w-full text-[15px]  font-GilroyMedium "
                    placeholder="new password"
                  ></input>
                </div>
              </div>
            </div>
            <button className="w-full h-[48px] mt-[28px] bg-[#4D92D5] rounded-[18px]">
              <p className="text-[15px] text-white font-GilroySemibold">
                Change password
              </p>
            </button>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Enable 2FA Authentification
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-row">
                <div className="w-1/2 mt-[12px] flex items-center ">
                  <p className="text-[15px] text-colorBlack/40 font-GilroySemibold ">
                    Use two-factor authentification for the great security and
                    convinience
                  </p>
                </div>
                <div className="w-1/2 pl-[30px]">
                  <button
                    className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]"
                    onClick={() => setTwoStepVerify(true)}
                  >
                    <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                      Enable security
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-[30px] bg-white shadow-lg rounded-[15px] mb-[20px]">
            <p className="text-[23px] text-colorBlack font-GilroyBold">
              Enable Google 2FA Authentification
            </p>
            <div className="w-full mt-[28px] flex flex-row items-end">
              <div className="w-full flex flex-row">
                <div className="w-1/2 mt-[12px] flex items-center ">
                  <p className="text-[15px] text-colorBlack/40 font-GilroySemibold ">
                    Use two-factor authentification for the great security and
                    convinience
                  </p>
                </div>
                <div className="w-1/2 pl-[30px]">
                  <button
                    className="w-full h-full rounded-[20px] border-[1px] border-[#4D92D5]"
                    onClick={() => setGoogle2FAVerify(true)}
                  >
                    <p className="text-[15px] text-[#4D92D5] font-GilroySemibold">
                      Enable security
                    </p>
                  </button>
                </div>
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
      {twoStepVerify && TwoStepVerifyModal}
      {twoStepVerifySuccessful && TwoStepVerifySuccessfulModal}
      {google2FAVerify && Google2FAVerifyModal}
    </div>
  );
}
