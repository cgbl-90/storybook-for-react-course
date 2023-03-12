import React from "react";

import { Input } from "./Input";

// Default config
export default {
  title: "What is Storybook?/Input",
  component: Input,
};

// Template
const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Name",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Surname",
};
