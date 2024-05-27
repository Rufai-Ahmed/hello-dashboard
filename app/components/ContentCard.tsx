import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";
import { BsHeartFill, BsStarFill, BsPlusSquareFill } from "react-icons/bs";
import shrimp from "../../public/assets/shrimp.jpg";
import veggie from "../../public/assets/Veggie.jpg";
import burger from "../../public/assets/burger.jpg";
import lasagna from "../../public/assets/lasagna.jpg";

export interface iContent {
  img?: StaticImport | string | undefined;
  stars?: number;
  price?: number;
  title?: string;
}

export const contentCardData: iContent[] = [
  {
    img: burger,
    price: 40000,
    stars: 4,
    title: "Fish Burger",
  },
  {
    img: shrimp,
    price: 30000,
    stars: 5,
    title: "Shrimp Dish",
  },
  {
    img: veggie,
    price: 20000,
    stars: 2,
    title: "Vegetable",
  },
  {
    img: lasagna,
    price: 5000,
    stars: 5,
    title: "Lasagna",
  },
];

export const ContentCard: FC<iContent> = ({ img, price, stars, title }) => {
  return (
    <div className="w-[300px] bg-white h-[350px] rounded-md flex flex-col items-center">
      <div className="h-[60%] w-full relative">
        <Image
          src={img!}
          height={500}
          width={1000}
          alt="burger"
          className="h-[100%] rounded-t-lg w-full object-cover"
        />

        <div className="absolute top-4 left-0 rounded-r-lg bg-[#a72036] text-white text-[16px] px-3 py-2">
          15% Off
        </div>

        <BsHeartFill className="text-[#a72036] text-[24px] absolute top-4 right-4" />
      </div>

      <div className="h-[40%] w-[80%] flex items-center justify-between">
        <div>
          <div className="flex gap-2">
            {Array.from({ length: stars! }).map((el: unknown, i: number) => (
              <BsStarFill key={i} size={20} className="mb-2" color="#a72036" />
            ))}
          </div>
          <p className="font-medium text-[16px]">{title}</p>
          <p className="text-[18px] font-bold">
            <span className="text-[#a72036] mr-1">₦</span> {price}
          </p>
        </div>

        <div>
          <BsPlusSquareFill
            className="cursor-pointer"
            size={40}
            color="#a72036"
          />
        </div>
      </div>
    </div>
  );
};
