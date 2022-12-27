import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel, Props } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const template: ComponentStory<typeof MyLabel> = (args: Props) => (
  <MyLabel {...args} />
);

export const Basic = template.bind({});
Basic.args = {
  label: "Label text",
  allCaps: false, //allCaps en tru capitalizar toda la palabra,
  color: "primary",
};

export const AllCaps = template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};
