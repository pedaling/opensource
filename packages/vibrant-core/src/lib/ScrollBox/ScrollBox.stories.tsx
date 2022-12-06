import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { ScrollBox } from './ScrollBox';

export default {
  title: 'ScrollBox',
  component: ScrollBox,
  args: {},
} as ComponentMeta<typeof ScrollBox>;

export const Basic: ComponentStory<typeof ScrollBox> = props => (
  <ScrollBox width={200} height={200} borderWidth={1} borderStyle="solid" {...props}>
    <Box width={100} height={100} backgroundColor="primary" m={20} flexShrink={0} />
    <Box width={100} height={100} backgroundColor="informative" m={20} flexShrink={0} />
    <Box width={100} height={100} backgroundColor="success" m={20} flexShrink={0} />
  </ScrollBox>
);
