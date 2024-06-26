import { iSideData, iTableRow } from "./types";

export const tableData: iTableRow[] = [
  {
    orderID: 1,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTS71lSgpbDona4u2ocmyQJuD0D0R0Gv1iKsuoYrT8GA&s",
    food: "Hamburger",
    location: "Lagos",
    userName: "John Doe",
    time: "3:00 PM",
    status: "pending",
  },
  {
    orderID: 12,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg",
    food: "Sushi",
    location: "Abuja",
    userName: "Brice Swyre",
    time: "12:00 PM",
    status: "delivered",
  },
  {
    orderID: 11,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KVCprJoRYEYm5nBnb7qaHteG71rHkLB_AzAVgH5JeA&s",
    food: "Borscht",
    location: "Kano",
    userName: "Marjy Ferencz",
    time: "5:00 PM",
  },
  {
    orderID: 31,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyKl0G31NJjsdJjjTOyrUdpRQd3shF5otAkQja-U_IQ&s",
    food: "Feijoada",
    location: "Enugu",
    userName: "Yancy Tear",
    time: "6:00 PM",
    status: "pending",
  },
];

export const sideData: iSideData[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "food",
  },
  {
    name: "notification",
  },
  {
    name: "order",
  },
  {
    name: "organization",
  },
];
