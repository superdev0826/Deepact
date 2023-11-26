"use client";
import React, { ReactElement, useState } from "react";
import SidebarButton from "@/components/home/sidebar/sidebarButton";
import Image from "next/image";
import Progress from "@/components/home/Luminetica/progress";
import Upcoming from "@/components/home/Luminetica/upcoming";
import Closed from "@/components/home/Luminetica/closed";

export default function Landing() {
  const [activeId, setActiveId] = useState(0);
  const [tabId, setTabId] = useState(0);
  const [leaved, setLeaved] = useState(true);

  const [hoveredId, setHoverdId] = useState(0);

  const onHover = (id: number) => {
    setHoverdId(id);
    setLeaved(false);
  };
  const onLeave = () => {
    setLeaved(true);
  };
  const onclick = (id: number) => {
    setActiveId(id);
  };

  const InProgressBody = (
    <div>
      <div className="w-full h-[50px] mt-[20px] flex flex-row bg-white rounded-[14px] px-[15px] font-GilroyMedium items-center">
        <button>
          <Image
            alt="image"
            src={"/assets/images/pages/home/search.png"}
            width={21}
            height={21}
          ></Image>
        </button>
        <input
          className="w-full h-[30px] border-transparent ml-[10px]"
          placeholder="Search for project, founder, backer, ticker"
        ></input>
      </div>
      <div className="w-full mt-[20px] grid grid-cols-4 gap-[32px]">
        <Progress
          backgroundImage="/assets/images/pages/home/frame-1.png"
          iconImage="/assets/images/pages/home/luminetica-1.png"
          detail="Innovative NFT platform leveraging blockchain technology for
              digital asset ownership and trading on web3.0."
        />
        <Progress
          backgroundImage="/assets/images/pages/home/frame-2.png"
          iconImage="/assets/images/pages/home/luminetica-2.png"
          detail="Next-gen crypto platform enabling DeFi and Web3.0 applications for
              accessible financial systems."
        />
        <Progress
          backgroundImage="/assets/images/pages/home/frame-3.png"
          iconImage="/assets/images/pages/home/luminetica-3.png"
          detail="A blockchain-powered platform providing secure data management and
              Web3.0 solutions for organizations."
        />
        <Progress
          backgroundImage="/assets/images/pages/home/frame-4.png"
          iconImage="/assets/images/pages/home/luminetica-4.png"
          detail="Innovative NFT platform leveraging blockchain technology for
              digital asset ownership and trading on web3.0...."
        />
      </div>
    </div>
  );

  const UpcomingBody = (
    <div>
      <div className="w-full flex flex-row justify-between">
        <div className="w-5/6 h-[50px] mt-[20px] flex flex-row bg-white rounded-[14px] px-[15px] font-GilroyMedium items-center">
          <button>
            <Image
              alt="image"
              src={"/assets/images/pages/home/search.png"}
              width={21}
              height={21}
            ></Image>
          </button>
          <input
            className="w-full h-[30px] border-transparent ml-[10px]"
            placeholder="Search for project, founder, backer, ticker"
          ></input>
        </div>
        <button className="w-[190px] h-[50px] mt-[20px]  rounded-[20px] border-[1px] border-[#4D92D5]">
          <p className="text-[15px] text-[#4D92D5]">View all</p>
        </button>
      </div>
      <div className="w-full mt-[20px] grid grid-cols-4 gap-[32px]">
        <Upcoming
          backgroundImage="/assets/images/pages/home/frame-1.png"
          iconImage="/assets/images/pages/home/luminetica-1.png"
          detail="Innovative NFT platform leveraging blockchain technology for
              digital asset ownership and trading on web3.0."
        />
        <Upcoming
          backgroundImage="/assets/images/pages/home/frame-2.png"
          iconImage="/assets/images/pages/home/luminetica-2.png"
          detail="Next-gen crypto platform enabling DeFi and Web3.0 applications for
              accessible financial systems."
        />
        <Upcoming
          backgroundImage="/assets/images/pages/home/frame-3.png"
          iconImage="/assets/images/pages/home/luminetica-3.png"
          detail="A blockchain-powered platform providing secure data management and
              Web3.0 solutions for organizations."
        />
        <Upcoming
          backgroundImage="/assets/images/pages/home/frame-4.png"
          iconImage="/assets/images/pages/home/luminetica-4.png"
          detail="Innovative NFT platform leveraging blockchain technology for
              digital asset ownership and trading on web3.0...."
        />
      </div>
    </div>
  );

  const ClosedBody = (
    <div>
      <div className="w-full h-[50px] mt-[20px] flex flex-row bg-white rounded-[14px] px-[15px] font-GilroyMedium items-center">
        <button>
          <Image
            alt="image"
            src={"/assets/images/pages/home/search.png"}
            width={21}
            height={21}
          ></Image>
        </button>
        <input
          className="w-full h-[30px] border-transparent ml-[10px]"
          placeholder="Search for project, founder, backer, ticker"
        ></input>
      </div>
      <div className="w-full mt-[20px] grid grid-cols-4 gap-[32px]">
        <Closed
          backgroundImage="/assets/images/pages/home/frame-1.png"
          iconImage="/assets/images/pages/home/luminetica-1.png"
          detail="Innovative NFT platform leveraging blockchain technology for
              digital asset ownership and trading on web3.0."
          isClosed={false}
        />
        <Closed
          backgroundImage="/assets/images/pages/home/frame-2.png"
          iconImage="/assets/images/pages/home/luminetica-2.png"
          detail="Next-gen crypto platform enabling DeFi and Web3.0 applications for
              accessible financial systems."
          isClosed={true}
        />
        <Closed
          backgroundImage="/assets/images/pages/home/frame-3.png"
          iconImage="/assets/images/pages/home/luminetica-3.png"
          detail="A blockchain-powered platform providing secure data management and
              Web3.0 solutions for organizations."
          isClosed={false}
        />
        <Closed
          backgroundImage="/assets/images/pages/home/frame-4.png"
          iconImage="/assets/images/pages/home/luminetica-4.png"
          detail="Innovative NFT platform leveraging blockchain technology for
              digital asset ownership and trading on web3.0...."
          isClosed={false}
        />
      </div>
    </div>
  );

  return (
    <div className="p-[24px] flex flex-row">
      <div
        id="left_sidbar"
        className="min-w-[230px] hidden md:flex flex-col gap-[5px]"
      >
        <SidebarButton
          src="/assets/images/pages/home/home.png"
          srcActived="/assets/images/pages/home/home-blue.png"
          onClick={() => onclick(0)}
          onHover={() => onHover(0)}
          isActived={activeId === 0}
          isHovered={hoveredId === 0}
          onLeave={() => onLeave()}
          isLeaved={leaved}
          title="Home"
        ></SidebarButton>
        <SidebarButton
          src="/assets/images/pages/home/events.png"
          srcActived="/assets/images/pages/home/events-blue.png"
          onClick={() => onclick(1)}
          onHover={() => onHover(1)}
          isActived={activeId === 1}
          isHovered={hoveredId === 1}
          onLeave={() => onLeave()}
          isLeaved={leaved}
          title="Events"
        ></SidebarButton>
        <SidebarButton
          src="/assets/images/pages/home/rooms.png"
          srcActived="/assets/images/pages/home/rooms-blue.png"
          onClick={() => onclick(2)}
          onHover={() => onHover(2)}
          isActived={activeId === 2}
          isHovered={hoveredId === 2}
          onLeave={() => onLeave()}
          isLeaved={leaved}
          title="Rooms"
        ></SidebarButton>
        <SidebarButton
          src="/assets/images/pages/home/launchpad.png"
          srcActived="/assets/images/pages/home/launchpad-blue.png"
          onClick={() => onclick(3)}
          onHover={() => onHover(3)}
          isActived={activeId === 3}
          isHovered={hoveredId === 3}
          onLeave={() => onLeave()}
          isLeaved={leaved}
          title="Launchpad"
        ></SidebarButton>
        <SidebarButton
          src="/assets/images/pages/home/staking.png"
          srcActived="/assets/images/pages/home/staking-blue.png"
          onClick={() => onclick(4)}
          onHover={() => onHover(4)}
          isActived={activeId === 4}
          isHovered={hoveredId === 4}
          onLeave={() => onLeave()}
          isLeaved={leaved}
          title="Stacking"
        ></SidebarButton>
        <SidebarButton
          src="/assets/images/pages/home/bridge.png"
          srcActived="/assets/images/pages/home/bridge-blue.png"
          onClick={() => onclick(5)}
          onHover={() => onHover(5)}
          isActived={activeId === 5}
          isHovered={hoveredId === 5}
          onLeave={() => onLeave()}
          isLeaved={leaved}
          title="Bridge"
        ></SidebarButton>
        <div className="w-full h-[25px] flex justify-center place-items-center">
          <hr className="w-[200px]"></hr>
        </div>
        <button className="w-full h-[46px] rounded-[20px] border-[1px] border-[#4D92D5] flex flex-row items-center justify-center">
          <Image
            alt="image-support"
            src={"/assets/images/pages/home/mdi_support.png"}
            width={18}
            height={18}
          ></Image>
          <p className="text-[15px] text-[#4D92D5] ml-[5px] font-GilroySemibold">
            Support
          </p>
        </button>
      </div>
      <div
        id="right_section"
        className="w-full flex flex-col pl-[30px] relative"
      >
        <div className="w-full min-h-[540px] rounded-[25px] bg-white flex flex-row">
          <div className="relative w-3/5 flex flex-col p-[130px]">
            <div className="max-w-[570px] z-10">
              <p className="text-[61px] font-GilroyBold">
                Start your crypto{" "}
                <span className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                  adventure
                </span>{" "}
                with us
              </p>
              <p className="text-[28px] text-[#060925]/70 font-GilroyMedium mt-[25px]">
                Explore the projects, discuss with communities, share with
                friends.
              </p>
            </div>
            <Image
              alt="image"
              className="absolute top-0"
              src={"/assets/images/pages/home/landing-1.png"}
              width={340}
              height={150}
            ></Image>
            <Image
              alt="image"
              className="absolute bottom-0 left-0"
              src={"/assets/images/pages/home/landing-2.png"}
              width={290}
              height={150}
            ></Image>
            <Image
              alt="image"
              className="absolute right-0 top-[200px]"
              src={"/assets/images/pages/home/landing-3.png"}
              width={130}
              height={150}
            ></Image>
          </div>
          <div className="w-2/5 relative">
            <Image
              alt="landing-image"
              src={"/assets/images/pages/home/img-landing.png"}
              priority={true}
              className="absolute bottom-0 right-[30px]"
              width={862}
              height={762}
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[27px] mt-[36px]">
          <div className="relative min-h-[300px] p-[37px] flex flex-col rounded-[25px] bg-white shadow-lg">
            <p className="text-[34px] font-GilroySemibold z-10">
              <span className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                Mint
              </span>{" "}
              DeepID
            </p>
            <p className="max-w-[182px] text-[15px] text-[#060925]/40 font-GilroyMedium mt-[36px]">
              Search for project, founder, backer, tickerfounder, backer
            </p>
            <Image
              alt="image"
              src={"/assets/images/pages/home/explore-1.png"}
              className="absolute right-[30px]"
              width={220}
              height={140}
            ></Image>
            <button className="absolute w-11/12 h-[56px] left-0 right-0 m-auto bottom-[28px] rounded-[24px] bg-[#63ACF3]">
              <p className="text-white text-[15px] font-GilroySemibold">
                Explore
              </p>
            </button>
          </div>
          <div className="relative min-h-[300px] p-[37px] flex flex-col rounded-[25px] bg-white shadow-lg">
            <p className="text-[34px] font-GilroySemibold z-10">
              <span className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                Connect
              </span>{" "}
              the socials
            </p>
            <p className="max-w-[182px] text-[15px] text-[#060925]/40 font-GilroyMedium mt-[36px]">
              Search for project, founder, backer, tickerfounder, backer
            </p>
            <Image
              alt="image"
              src={"/assets/images/pages/home/explore-2.png"}
              className="absolute right-[30px]"
              width={200}
              height={180}
            ></Image>
            <button className="absolute w-11/12 h-[56px] left-0 right-0 m-auto bottom-[28px] rounded-[24px] bg-[#63ACF3]">
              <p className="text-white text-[15px] font-GilroySemibold">
                Explore
              </p>
            </button>
          </div>
          <div className="relative min-h-[300px] p-[37px] flex flex-col rounded-[25px] bg-white shadow-lg">
            <p className="text-[34px] font-GilroySemibold z-10">
              <span className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                Earn
              </span>{" "}
              points
            </p>
            <p className="max-w-[182px] text-[15px] text-[#060925]/40 font-GilroyMedium mt-[36px]">
              Search for project, founder, backer, tickerfounder, backer
            </p>
            <Image
              alt="image"
              src={"/assets/images/pages/home/explore-3.png"}
              className="absolute right-[30px]"
              width={150}
              height={160}
            ></Image>
            <button className="absolute w-11/12 h-[56px] left-0 right-0 m-auto bottom-[28px] rounded-[24px] bg-[#63ACF3]">
              <p className="text-white text-[15px] font-GilroySemibold">
                Explore
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full min-h-[600px] mt-[36px]">
          <div className="w-full h-[60px] border-b-[1px] border-[#4D92D5]/10 flex flex-row">
            <button
              className={`w-[126px] h-[60px] ${
                tabId == 0 && "border-b-[1px] border-[#4D92D5]"
              }`}
              onClick={() => setTabId(0)}
            >
              <div className="w-full h-full flex items-center ">
                <p
                  className={`m-auto text-[17px] font-GilroySemibold ${
                    tabId == 0 && "text-[#4D92D5]"
                  }`}
                >
                  In progress
                </p>
              </div>
            </button>
            <button
              className={`w-[126px] h-[60px] ${
                tabId == 1 && "border-b-[1px] border-[#4D92D5]"
              }`}
              onClick={() => setTabId(1)}
            >
              <div className="w-full h-full flex items-center ">
                <p
                  className={`m-auto text-[17px] font-GilroySemibold ${
                    tabId == 1 && "text-[#4D92D5]"
                  }`}
                >
                  Upcoming
                </p>
              </div>
            </button>
            <button
              className={`w-[126px] h-[60px] ${
                tabId == 2 && "border-b-[1px] border-[#4D92D5]"
              }`}
              onClick={() => setTabId(2)}
            >
              <div className="w-full h-full flex items-center ">
                <p
                  className={`m-auto text-[17px] font-GilroySemibold ${
                    tabId == 2 && "text-[#4D92D5]"
                  }`}
                >
                  Closed
                </p>
              </div>
            </button>
          </div>
          {tabId == 0 && InProgressBody}
          {tabId == 1 && UpcomingBody}
          {tabId == 2 && ClosedBody}
        </div>
        <div className="w-full min-h-[350px] flex flex-row bg-white rounded-[18px] mt-[36px]">
          <div className="w-2/3  place-items-center">
            <div className="max-w-[780px] flex flex-col mt-[50px] ml-[100px]">
              <p className="text-[50px] text-[#060925] font-GilroyBold">
                Want to{" "}
                <span className="bg-gradient-to-r from-colorBlue to-colorPink text-transparent bg-clip-text">
                  boost
                </span>{" "}
                your community?
              </p>
              <p className="text-[27px] text-[#060926]/70 mt-[28px] font-GilroyMedium">
                Get access of the most exciting audiences in the world, present
                your product.
              </p>
              <button className="w-[300px] h-[56px] rounded-[14px] bg-[#63ACF3] border-[1px] mt-[28px]">
                <p className="text-[16px] text-white font-GilroySemibold">
                  Contact us
                </p>
              </button>
            </div>
          </div>
          <div className="relative w-1/3">
            <Image
              alt="earth"
              src={"/assets/images/pages/home/earth.png"}
              className="absolute bottom-0"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
        <div className="w-full min-h-[60px] flex justify-end mt-[30px]">
          <button className="w-[60px] h-[60px] bg-[#4D92D5] rounded-[12.5px]">
            <p className="m-auto text-white">?</p>
          </button>
        </div>
      </div>
    </div>
  );
}
