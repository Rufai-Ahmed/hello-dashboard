import { ReactNode, FC } from "react";

export interface iCategoryCard {
  text?: string;
  icon?: ReactNode;
}

export const CategoryCard: FC<iCategoryCard> = ({ icon, text }) => {
  return (
    <div className="p-7 rounded-md flex gap-4 flex-col items-center bg-white shadow-md text-[30px]">
      {icon}
      <p className="text-[#a72036] font-medium text-[20px] capitalize">
        {text}
      </p>
    </div>
  );
};
