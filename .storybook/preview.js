import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"; // Add to handle standard viewports

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Add to handle standard viewports
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
