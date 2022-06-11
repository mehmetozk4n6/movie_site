import "styled-components";
import { DefaultTheme } from "styled-components";

// and extend them!
declare module "styled-components" {
  interface DefaultTheme {
    borderRadius?: string;
    colors?: {
      header?: string;
      body?: string;
      footer?: string;
    };
    background_colors?: {
      header?: string;
      body?: string;
      footer?: string;
    };
  }
}

export const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#525765",
  },
  background_colors: {
    header: "linear-gradient(to right, #020220, #a31d8c)",
    body: "#030328",
    footer: "#fff",
  },
};
