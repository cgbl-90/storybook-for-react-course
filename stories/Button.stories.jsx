import React from "react";

import { Button } from "./Button";

// Decorators
const storyLevel = (StoryFn) => (
  <div style={{ maxWidth: 400, margin: "auto", border: "3px solid #fab" }}>
    <StoryFn />
  </div>
);

const argLevel = (StoryFn) => (
  <div
    style={{
      maxWidth: 1200,
      margin: 20,
      padding: 100,
      border: "5px solid #fab",
    }}
  >
    <StoryFn />
  </div>
);

// Default config
export default {
  title: "What is Storybook?/Button",
  component: Button,
  decorators: [argLevel],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// Template
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
Primary.decorators = [storyLevel]; // Story level decorator

export const Secondary = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
