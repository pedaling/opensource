import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { IconButton } from '../IconButton';
import { VStack } from '../VStack';
import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    content: 'Hi my name is kim lou lou',
    position: 'bottom',
  },
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = props => (
  <VStack alignHorizontal="center" width="100%" height={300} alignVertical="center">
    <Tooltip {...props}>
      <IconButton IconComponent={Icon.InfoCircle.Fill} color="informative" size="lg" />
    </Tooltip>
  </VStack>
);
