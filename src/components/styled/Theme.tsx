import "styled-components";
import { DefaultTheme } from "styled-components";

// and extend them!
declare module "styled-components" {
  interface DefaultTheme {
    borderRadius?: string;
    colors?: {
      header?: string;
      headerlight?: string;
      body?: string;
      bodylight?: string;
      footer?: string;
      footerlight?: string;
    };
    background_colors?: {
      header?: string;
      headerlight?: string;
      body?: string;
      bodylight?: string;
      footer?: string;
      footerlight?: string;
    };
  }
}

export const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    header: "#fff",
    headerlight: "#000",
    body: "#000",
    bodylight: "#fff",
    footer: "#fafcff",
    footerlight: "#1c1c1c",
  },
  background_colors: {
    header: "linear-gradient(to right, #020220, #a31d8c)",
    headerlight: "linear-gradient(to right, #f1f1f4, #a31d8c)",
    body: "#fcfcfc",
    bodylight: "#000",
    footer: "#040404",
    footerlight: "#f7f7f7",
  },
};
