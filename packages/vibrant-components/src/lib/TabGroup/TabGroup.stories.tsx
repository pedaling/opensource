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
    <Tab title="Tab1" id="tab1" />
    <Tab title="Tab2222" id="tab2" />
    <Tab title="Tab3" id="tab3" />
    <Tab title="Tab4" id="tab4" />
    <Tab title="Tab5" id="tab5" />
    <Tab title="Tab6" id="tab6" />
  </TabGroup>
);
