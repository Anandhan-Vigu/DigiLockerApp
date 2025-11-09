import { useState } from "react";
import UtilityGrid from "./UtilityGrid";
import Profile from "./Profile";
import ImageTextCarousel from "./ImageTextCarousel";
import SwiperWithDots from "./SwiperWithDots";

const Welcome = () => {
  return (
    <main className="flex flex-col gap-10 w-full">
      <Profile />
      <div className="flex flex-col gap-5 px-5">
        <p className="font-semibold text-black text-base ">DigiLocker Utility ss</p>
        <div className="h-[536px]">
          <UtilityGrid name='digilocker-utility' />
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <p className="font-semibold px-5 text-black text-base">Documents you might need</p>
        <ImageTextCarousel name="document-you-might-need" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-semibold px-5 text-black text-base">New in Digilocker</p>
        <SwiperWithDots />
      </div>

    </main>
  );
};
export default Welcome;
