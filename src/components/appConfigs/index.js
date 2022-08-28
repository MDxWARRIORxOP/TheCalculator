// import * as React from "react"
// import ReactDOM from "react-dom"
import * as uniux from "uniux";

const appConfig = {
  parentProject: { name: "TheCalculator" },
  name: "TheCalculator",
  rootURL: "",
  design: {
    themeColour: uniux.colourPacks.green.darker,
  },
  sections: ["Calculator"],

  pageConfigs: {
    calc: {
      name: "Calculator",
      icon: uniux.icons.faCalculator,
      url: "",
    },
    history: {
      name: "History",
      icon: uniux.icons.faArrow,
      url: "/history",
    },
  },
};

export { appConfig };
