import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white min-h-[560px] p-[40px] flex flex-row font-GilroyMedium">
      <div className="w-1/4">
        <Link href={"/"} className="flex m-auto place-items-center">
          <Image
            alt="logo"
            src="/assets/images/footer/Logo.png"
            width={55}
            height={55}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="ml-[10px] text-[30px] font-GilroySemibold">Deepact</p>
        </Link>
      </div>
      <div className="w-3/4 flex flex-row">
        <div className="w-1/5 flex flex-col">
          <p className="text-[18.67px] mb-[56px] font-GilroySemibold">
            Company
          </p>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">FAQ</a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">Token</a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">Careers</a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Private Sales
          </a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Submit Your Project
          </a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Brand Assets
          </a>
        </div>
        <div className="w-1/5 flex flex-col">
          <p className="text-[18.67px] mb-[56px] font-GilroySemibold">Help</p>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">About Us</a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Contact us
          </a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Privacy Policy
          </a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Terms & Conditions
          </a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            Lightpaper
          </a>
          <a className="text-[18.67px] text-[#060925]/40 mb-[25px]">
            24/7 Support
          </a>
        </div>
        <div className="w-3/5 flex flex-col">
          <p className="text-[18.67px] mb-[24px] font-GilroySemibold">
            Networks
          </p>
          <div className="flex flex-row mb-[37px]">
            <button className="mr-[20px]">
              <Image
                alt="image"
                src={"/assets/images/footer/telegram.png"}
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
              ></Image>
            </button>
            <button className="mr-[20px]">
              <Image
                alt="image"
                src={"/assets/images/footer/discord.png"}
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
              ></Image>
            </button>
            <button className="mr-[20px]">
              <Image
                alt="image"
                src={"/assets/images/footer/linkedin.png"}
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
              ></Image>
            </button>
            <button className="mr-[20px]">
              <Image
                alt="image"
                src={"/assets/images/footer/medium.png"}
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
              ></Image>
            </button>
          </div>
          <p className="text-[18.67px] mb-[22px] font-GilroySemibold">Legal</p>
          <p className="text-[16px] mb-[28px] text-[#060925]/40">
            <span className="text-[#4D92D5]">Legal Note:</span>
            {` #MP stands for Marketing Promotion. This web page and any other contents published on this website shall not constitute investment advice, financial advice, trading advice, or any other kind of advice, and you should not treat any of the website's content as such. You alone assume the sole responsibility of evaluating the merits and risks associated with using any information or other content on this website before making any decisions based on such information. You understand that the crypto market is characterised by high volatility, and you should be aware of the concrete possibility of losing the entirety of the funds you allocated in the crypto market. You should refrain from using funds you can't afford to lose when purchasing cryptocurrencies and other digital tokens.`}
          </p>
          <p className="text-[16px] text-[#060925]/40">
            <span className="text-[#4D92D5]">Kindly note:</span> Please be aware
            of phishing sites and always make sure you are visiting the official
            app.gains-associates.com website when entering sensitive data.
          </p>
        </div>
      </div>
    </div>
  );
}
