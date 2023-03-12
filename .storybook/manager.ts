import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  // dark mode
  base: "dark",

  // Base color
  colorSecondary: "#62CDFF", // Chateau Green

  // UI
  appBg: "#F6F9FC",
  appContentBg: "#FFFFFF",
  appBorderColor: "rgba(0,0,0,.1)",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#333333",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#666666",

  // Toolbar default and active colors
  barTextColor: "#999999",
  barSelectedColor: "#62CDFF",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: "#333333",
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: "Carmen López",
  brandUrl: "https://cgbl-90.github.io/clopez/",
  brandImage: "https://avatars.githubusercontent.com/u/58992828?v=8",
});

addons.setConfig({
  theme,
});
