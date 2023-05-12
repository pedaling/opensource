import type { ComponentMeta } from '@storybook/react';
import { FilterChip } from '../FilterChip';
import { Paper } from '../Paper';
import { Popover } from '../Popover';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { PopoverOpener } from './PopoverOpener';

export default {
  title: 'PopoverOpener',
  component: PopoverOpener,
  args: {},
} as ComponentMeta<typeof PopoverOpener>;

export const Basic = () => (
  <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
    <Popover position="bottom" title="Popover" backgroundColor="primary">
      <PopoverOpener openToClick={true}>
        <Title level={4}>Click Opener</Title>
      </PopoverOpener>
    </Popover>
  </VStack>
);

export const OpenToHover = () => (
  <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
    <Popover position="bottom" title="Popover" backgroundColor="primary">
      <PopoverOpener openToHover={true}>
        <FilterChip size="md">Hover At Opener</FilterChip>
      </PopoverOpener>
    </Popover>
  </VStack>
);

export const NotWrappedWithPopover = () => {
  const popoverId = 'temp-id';

  return (
    <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
      <Popover popoverId={popoverId} position="bottom" title="Popover" backgroundColor="primary">
        <Paper backgroundColor="primary" top="30vh" p={10} borderRadiusLevel={2}>
          <Title level={4} color="onView1">
            Anchor
          </Title>
        </Paper>
      </Popover>

      <PopoverOpener popoverId={popoverId} openToClick={true} openToHover={false}>
        <Title level={4}>Click Opener</Title>
      </PopoverOpener>
    </VStack>
  );
};
