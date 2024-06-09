import { HTMLAttributes } from "react";

export interface iSideData {
  name?: string;
  route?: string;
}

export interface iTableRow extends HTMLAttributes<HTMLElement> {
  orderID?: string | number;
  food?: string;
  imgSrc?: string;
  location?: string;
  userName?: string;
  i?: number | null;
  jobTitle?: string;
  status?: "pending" | "delivered" | "pending";
  time?: string;
}
