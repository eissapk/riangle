import React from "react";

export const defaultValues = {
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

const DataContext = React.createContext(defaultValues);

export default DataContext;
