"use client";
import TopMenuItem from "./TopMenuItem";
import { signOut, useSession } from "next-auth/react";

import { Lily_Script_One } from "next/font/google";
import Image from "next/image";

import LogoutIcon from "@mui/icons-material/Logout";

const lilyScriptOne = Lily_Script_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function TopMenu() {
  const session = useSession();

  const iconColor = session ? "#f42e9b" : "#FFF";

  return (
    <div
      className={`w-[100vw] flex-nowrap flex h-[65px] items-center bg-white shadow justify-between fixed top-0 z-[100] transition-transform duration-900`}
    >
      <div className="flex items-center justify-center w-14 h-14  py-2 absolute bg-pink-400 rounded-full ml-[80px] text-white text-[1rem] font-[500] z-50">
        <p className="flex flex-col items-center select-none hover:cursor-default">
          <span>キム</span>
          <span>先生</span>
        </p>
      </div>
      <div className="absolute flex items-center justify-center w-full h-full text-3xl font-normal text-center text-black">
        <TopMenuItem
          customClasses="z-50 hover:opacity-35 transition-opacity"
          item={
            <div
              className={`select-none w-auto h-auto hover:opacity-50 ${lilyScriptOne.className}`}
            >
              DekBanJarnKim
            </div>
          }
          pageRef="/"
        />
      </div>
      <div className="h-full w-[50%] absolute right-0 p-11 flex items-center justify-end mx-12 gap-14">
        {session.data && (
          <TopMenuItem
            item={
              <div onClick={(e) => signOut()}>
                <LogoutIcon sx={{ color: iconColor, fontSize: 45 }} />
              </div>
            }
            pageRef="/"
          />
        )}
        <TopMenuItem
          customClasses="z-50 hover:scale-105"
          item={
            <Image
              width={0}
              height={0}
              sizes="100vh"
              alt="car-icon"
              className="w-[35px] h-[28px]"
              src="/img/car-icon.png"
            />
          }
          pageRef="/cars"
        />
        <TopMenuItem
          customClasses="z-50 hover:scale-105"
          item={
            <Image
              width={0}
              height={0}
              sizes="100vh"
              alt="profile-icon"
              className="w-[35px] h-[35px]"
              src="/img/profile-icon.png"
            />
          }
          pageRef="/user"
        />
      </div>
    </div>
  );
}
