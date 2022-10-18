import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import MdsButton from "../components/MdsButton/MdsButton";

export default {
  title: "MdsButton",
  component: MdsButton,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "dashed"],
      control: {type: 'radio'},
    },
    handleClick: { action: 'clicked'},
},
} as ComponentMeta<typeof MdsButton>;

const Template: ComponentStory<typeof MdsButton> = (args) => 
<MdsButton {...args} />;

export const Primary = Template.bind({});
  Primary.args = {
  color:"primary",
  variant:"contained",
  label:"Primary",
  // handleClick: action("primary action"),
};

export const Secondary = Template.bind({});
  Secondary.args = {
  color:"secondary",
  variant:"contained",
  label:"Secondary",
};

export const Info = Template.bind({});
  Info.args = {
  color:"info",
  variant:"contained",
  label:"Info",
};

export const  Success = Template.bind({});
  Success.args = {
  color:"success",
  variant:"contained",
  label:"Success",
};

