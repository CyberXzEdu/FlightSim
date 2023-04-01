import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    palette: {
      main: string;
      white: string;
      black: string;
    }
    display: {
      white: string;
      black: string;
      gray: string;

      cyan: string;
      magenta: string;
      yellow: string;

      lime: string;
      amber: string;
      red: string;

      skyblue: string;
      terrain: string;
    }
  }
}