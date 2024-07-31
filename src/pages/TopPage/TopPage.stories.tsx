import type { Meta, StoryObj } from "@storybook/react";
import { TopPageView } from "./TopPage";

const meta: Meta<typeof TopPageView> = {
  title: "Pages/TopPage",
  component: TopPageView,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof TopPageView>;

export const TemporaryMemberTopPage: Story = {
  render: (args) => <TopPageView {...args} />,
  args: {
    member: {
      id: "Uf6a01ca0af8593f8886492aef91a7b8d",
      status: "TEMPORARY",
      point: 100,
      membersNumber: "3000021447577",
    },
  },
};

export const OfficialMemberTopPage: Story = {
  render: (args) => <TopPageView {...args} />,
  args: {
    member: {
      id: "Uf6a01ca0af8593f8886492aef91a7b8d",
      status: "OFFICIAL",
      point: 100,
      membersNumber: "3000021447577",
      // FIXME: 本会員登録の実装時に見直す
      email: "example@example.com",
      name: "John Doe",
      phoneNumber: "1234567890",
      birthDate: "1990-01-01",
      gender: "male",
    },
  },
};
