"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Grains",
    link: "https://grocery.com",
    thumbnail:
      "/grocery1.png",
  },
  {
    title: "Vegetables",
    link: "https://grocery.so",
    thumbnail:
      "/grocery2.png",
  },
  {
    title: "Grocery",
    link: "https://grocery.com",
    thumbnail:
      "/grocery3.png",
  },

  {
    title: "Rice Field",
    link: "https://grocery.org",
    thumbnail:
      "/grocery4.png",
  },
  {
    title: "Wheat Field",
    link: "https://grocery.ai",
    thumbnail:
      "/grocery5.png",
  },
  {
    title: "Mustard Field",
    link: "https://grocery.quest",
    thumbnail:
      "/grocery6.png",
  },

  {
    title: "Potato",
    link: "https://grocery.com",
    thumbnail:
      "/grocery7.png",
  },
  {
    title: "Carrot",
    link: "https://grocery.com",
    thumbnail:
      "/grocery8.png",
  },
  {
    title: "Ginger",
    link: "https://grocery.com",
    thumbnail:
      "/grocery9.png",
  },
  {
    title: "Garlic",
    link: "https://grocery.com",
    thumbnail:
      "/grocery10.png",
  },
  {
    title: "Cabbage",
    link: "https://grocery.studio",
    thumbnail:
      "/grocery11.png",
  },

  {
    title: "Wheat",
    link: "https://grocery.com",
    thumbnail:
      "/grocery12.png",
  },
  {
    title: "Field",
    link: "https://grocery.com",
    thumbnail:
      "/grocery13.png",
  },
  {
    title: "Rice",
    link: "https://grocery.lol",
    thumbnail:
      "/grocery14.png",
  },
  {
    title: "Onions And Carrots",
    link: "https://grocery.com",
    thumbnail:
      "/grocery15.png",
  },
];
