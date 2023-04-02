import { theme } from "./theme";
import { createGlobalStyle, CSSObject } from "styled-components";

const base: CSSObject = {
  "svg.display text": {
    fill: theme.display.white,
    fontSize: "24px"
  },
  "svg.panel text": {
    fill: theme.panel.white,
    fontSize: "24px"
  }
};

for (const color in theme.display) {
  base["svg.display ." + color] = { fill: theme.display[color as "white"] };
}
for (const color in theme.display) {
  base["svg.display .s" + color] = { stroke: theme.display[color as "white"] };
}

for (const color in theme.panel) {
  base["svg.panel ." + color] = { fill: theme.panel[color as "white"] };
}
for (const color in theme.panel) {
  base["svg.panel .s" + color] = { stroke: theme.panel[color as "white"] };
}

const fontsize = new Array(16).fill(1).map((_, index) => index * 2 + 10);

for (const size of fontsize) {
  base["svg .t" + size] = { fontSize: size + "px" };
}

//console.log(base);

export const GlobalStyle = createGlobalStyle(base);