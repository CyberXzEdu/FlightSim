import { theme } from "./theme";
import { createGlobalStyle, CSSObject } from "styled-components";

const base: CSSObject = {
  "text": {
    fill: theme.display.white,
    fontSize: "24px"
  }
};

for (const color in theme.display) {
  base["." + color] = { fill: theme.display[color as "white"] };
}
for (const color in theme.display) {
  base[".s" + color] = { stroke: theme.display[color as "white"] };
}

const fontsize = new Array(16).fill(1).map((_, index) => index * 2 + 10);

for (const size of fontsize) {
  base[".t" + size] = { fontSize: size + "px" };
}

console.log(base);

export const GlobalStyle = createGlobalStyle(base);