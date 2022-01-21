import {
  storeImg,
  lookbookImg,
  graphicsImg,
  hatImg,
  crewnecksImg,
  toteImg,
  hoodieImg,
  shirtImg,
  shortsImg,
  colorfulHoodieImg,
  bwHoodieImg,
  look1Img,
  look2Img,
  look3Img,
  look4Img,
  frontImg,
  graphicsbackground,
  slide3background,
} from "./Images.js";

export const slides = [
  {
    id: 1,
    img: frontImg,
    title: "THE COULEURS MISSION",
    description:
      "Producing aesthetically pleasing products for anyone and everyone.",
    button: "Shop Now",
    backgroundColor: "#9e74d0",
    nav: "/store",
  },
  {
    id: 2,
    img: slide3background,
    title: "We look good together ;)",
    description: "",
    button: "Lookbook",
    backgroundColor: "#ff6991",
    nav: "/lookbook",
  },
  {
    id: 3,
    img: graphicsbackground,
    title: `WE'RE NOT JUST A PRETTY FACE`,
    description: `Check out our graphics collection`,
    button: "GRAPHICS",
    backgroundColor: "#77dd77",
    nav: "/graphics",
  },
];

export const categories = [
  {
    id: 1,
    img: storeImg,
    nav: "/store",
    button: "STORE",
  },
  {
    id: 2,
    img: graphicsImg,
    nav: "/graphics",
    button: "GRAPHICS",
  },
  {
    id: 3,
    img: lookbookImg,
    nav: "/lookbook",
    button: "LOOKBOOKS",
  },
];

export const products = [
  {
    id: 1,
    img: crewnecksImg,
    product: "Crewneck",
    price: "$45.00",
  },
  {
    id: 2,
    img: hatImg,
    product: "Hat",
    price: "$20.00",
  },
  {
    id: 3,
    img: toteImg,
    product: "Tote",
    price: "$30.00",
  },
  {
    id: 4,
    img: hoodieImg,
    product: "Hoodie",
    price: "$60.00",
  },
  {
    id: 5,
    img: shirtImg,
    product: "Shirt",
    price: "$25.00",
  },
  {
    id: 6,
    img: shortsImg,
    product: "Shorts",
    price: "$35.00",
  },
  {
    id: 7,
    img: colorfulHoodieImg,
    product: "Colorful Hoodie",
    price: "$70.00",
  },
  {
    id: 8,
    img: bwHoodieImg,
    product: "Hoodie",
    price: "$70.00",
  },
];

export const looks = [
  {
    id: 1,
    img: look1Img,
  },
  {
    id: 2,
    img: look2Img,
  },
  {
    id: 3,
    img: look3Img,
  },
  {
    id: 4,
    img: look4Img,
  },
];
