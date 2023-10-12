import React from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";

export const defaultValues = {
  headerDelay: 4.5,
  header: {
    menu: ["WORK", "ABOUT", "STORIES", "CONTACT"],
  },
  cards: [
    {
      img: img1,
      desc: "How to open a crypto wallet and buy your first NFT",
      date: "02-03-2022",
      route: "/stories/how-to-open-a-crypto-wallet-and-buy-your-first-nft",
    },
    {
      img: img2,
      desc: "2022 the year of NFTs, here’s what you need to know to stay up to date",
      date: "22-01-2022",
      route: "/stories/what-is-an-nft-how-can-a-jpg-be-sold-for-millions",
    },
    {
      img: img3,
      desc: "Riangle redesign Version 4",
      date: "22-12-2021",
      route: "/stories/riangle-re-design-version-4",
    },
    {
      img: img4,
      desc: "A design system to build the web",
      date: "21-12-2021",
      route: "/stories/a-design-system-to-build-the-web",
    },
    {
      img: img5,
      desc: "Inspiration Vol. 1",
      date: "20-12-2021",
      route: "/stories/inspiration-vol-1",
    },
    {
      img: img6,
      desc: "Tools we build to help you work fast and easy",
      date: "19-12-2021",
      route: "/stories/tools-we-build-to-help-you-work-fast-and-easy",
    },
  ],
  footer: {
    attrs: {
      target: "_blank",
      rel: "noreferrer",
    },
    links: [
      {
        url: "https://twitter.com/RiangleDesign?ref=riangle.com",
        label: "Twitter",
      },
      {
        url: "https://www.instagram.com/riangledesign/?ref=riangle.com",
        label: "Instagram",
      },
      {
        url: "https://dribbble.com/riangle?ref=riangle.com",
        label: "Dribbble",
      },
    ],
    copyWrite: "© 2013 - 2023 Riangle - All rights reserved.",
  },
};

export const loaderUpdateData = {
  hideLoader: () => {},
};

export const DataContext = React.createContext(defaultValues);
export const LoaderContext = React.createContext({isLoading: true});
export const LoaderUpdateContext = React.createContext(loaderUpdateData);
