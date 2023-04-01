import { theme } from "./theme";

export function createColorSheet () {
  const base: any = {
    "text": {
      fill: theme.display.white
    }
  };

  for (const color in theme.display) {
    base["text." + color] = { fill: theme.display[color as "white"] };
  }
  return base;
}