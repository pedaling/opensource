import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab } from '../Tab/Tab';
import { TabGroup } from './TabGroup';

export default {
  title: 'TabGroup',
  component: TabGroup,
  args: {
    type: 'fullWidth',
  },
} as ComponentMeta<typeof TabGroup>;

export const Basic: ComponentStory<typeof TabGroup> = props => (
  <TabGroup {...props}>
    {Array.from({ length: 30 }, (_, index) => (
      <Tab key={index} title={`Tab${index + 1}`} id={`tab${index + 1}`} />
    ))}
  </TabGroup>
);
