import { CategoryCard, iCategoryCard } from "@/app/components/CategoryCard";
import React, { FC, ReactNode } from "react";
import { BiHeart, BiSearch } from "react-icons/bi";
import { CiBowlNoodles, CiWheat } from "react-icons/ci";
import { FaFish } from "react-icons/fa";
import { GiChicken } from "react-icons/gi";
import { MdEmojiFoodBeverage, MdOutlineBakeryDining } from "react-icons/md";
import { PiPizza } from "react-icons/pi";
import { SiBurgerking } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import {
  ContentCard,
  contentCardData,
  iContent,
} from "../components/ContentCard";
import Modal from "../components/Modal";

const categoryData: iCategoryCard[] = [
  {
    icon: <SiBurgerking size={20} />,
    text: "burger",
  },
  {
    icon: <MdOutlineBakeryDining size={20} />,
    text: "bakery",
  },
  {
    icon: <MdEmojiFoodBeverage size={20} />,
    text: "beverage",
  },
  {
    icon: <GiChicken size={20} />,
    text: "chicken",
  },
  {
    icon: <PiPizza size={20} />,
    text: "pizza",
  },
  {
    icon: <FaFish size={20} />,
    text: "Seafood",
  },
  {
    icon: <CiBowlNoodles size={20} />,
    text: "Noodles",
  },
  {
    icon: <CiWheat size={20} />,
    text: "wheat",
  },
];

const page = () => {
  return (
    <main className="w-full min-h-screen ">
      <div className="w-full flex justify-between text-black">
        <div>
          <Modal />
        </div>

        <div className=" bg-white gap-2 pl-3 w-[400px] py-2 rounded-md flex items-center">
          <BiSearch
            size={20}
            className="mr-0 text-emerald-600 cursor-pointer"
          />
          <input
            type="text"
            placeholder="What do you want to eat today..."
            className="border-none w-full h-full bg-transparent outline-none flex-1 placeholder:text-[14px]"
          />
        </div>
      </div>

      <div className="w-full mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[24px] mb-5">Category</h2>
          <p className="flex items-center gap-4 text-[#a72036]">
            View all <FaAngleRight />
          </p>
        </div>
        <div className="flex justify-start gap-5 w-full overflow-x-auto pb-5">
          {categoryData.map((el: iCategoryCard, i: number) => (
            <CategoryCard key={i} text={el.text} icon={el.icon} />
          ))}
        </div>
      </div>

      <div className="w-full mt-10">
        <h2 className="font-bold text-[24px] mb-5">Popular Dishes</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 justify-between gap-3">
          {contentCardData.map((el: iContent, i: number) => (
            <ContentCard
              img={el.img}
              key={i}
              price={el.price}
              stars={el.stars}
              title={el.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
