import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Popover } from '../Popover';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { PopoverOpener } from './PopoverOpener';

export default {
  title: 'PopoverOpener',
  component: PopoverOpener,
  args: {
    openInteraction: 'click',
  },
} as ComponentMeta<typeof PopoverOpener>;

export const Basic: ComponentStory<typeof PopoverOpener> = props => (
  <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
    <Popover position="top" title="Popover" backgroundColor="primary">
      <PopoverOpener {...props}>
        <Title level={4}>Opener</Title>
      </PopoverOpener>
    </Popover>
  </VStack>
);

export const NotWrappedWithPopover: ComponentStory<typeof PopoverOpener> = props => {
  const popoverId = 'popover-id';

  return (
    <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center" spacing={100}>
      <Popover popoverId={popoverId} position="top" title="Popover" backgroundColor="primary">
        <VStack>
          <Paper backgroundColor="primary" p={10} borderRadiusLevel={2}>
            <Title level={4} color="onView1">
              Anchor
            </Title>
          </Paper>
        </VStack>
      </Popover>

      <PopoverOpener {...props} popoverId={popoverId}>
        <Title level={4}>Opener</Title>
      </PopoverOpener>
    </VStack>
  );
};

export const MultiplePopoverWithMulitpleOpener: ComponentStory<typeof PopoverOpener> = props => {
  const firstPopoverId = 'first-popover-id';
  const secondPopoverId = 'second-popover-id';

  return (
    <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center" spacing={100}>
      <HStack spacing={100}>
        <Popover popoverId={firstPopoverId} position="left" title="Popover" backgroundColor="primary">
          <VStack>
            <Paper backgroundColor="primary" p={10} borderRadiusLevel={2}>
              <Title level={4} color="onView1">
                Anchor
              </Title>
            </Paper>
          </VStack>
        </Popover>

        <Popover popoverId={secondPopoverId} position="right" title="Popover" backgroundColor="informative">
          <VStack>
            <Paper backgroundColor="informative" p={10} borderRadiusLevel={2}>
              <Title level={4} color="onView1">
                Anchor2
              </Title>
            </Paper>
          </VStack>
        </Popover>
      </HStack>

      <HStack spacing={100}>
        <PopoverOpener {...props} popoverId={firstPopoverId}>
          <Title level={4} color="primary">
            First Opener
          </Title>
        </PopoverOpener>

        <PopoverOpener {...props} popoverId={secondPopoverId}>
          <Title level={4} color="informative">
            Second Opener
          </Title>
        </PopoverOpener>

        <PopoverOpener {...props} popoverId={secondPopoverId}>
          <Title level={4} color="informative">
            Another Second Opener
          </Title>
        </PopoverOpener>
      </HStack>
    </VStack>
  );
};

export const MultiplePopoverWithSingleOpener: ComponentStory<typeof PopoverOpener> = props => {
  const [firstIsOpen, setFirstIsOpen] = useState(false);
  const [secondIsOpen, setSecondIsOpen] = useState(false);
  const [thirdIsOpen, setThirdIsOpen] = useState(false);

  const openAll = () => {
    setFirstIsOpen(true);

    setSecondIsOpen(true);

    setThirdIsOpen(true);
  };

  const closeAll = () => {
    setFirstIsOpen(false);

    setSecondIsOpen(false);

    setThirdIsOpen(false);
  };

  return (
    <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center" spacing={100}>
      <HStack spacing={100}>
        <Popover position="left" title="Popover" backgroundColor="primary" open={firstIsOpen}>
          <VStack>
            <Paper backgroundColor="primary" p={10} borderRadiusLevel={2}>
              <Title level={4} color="onView1">
                Anchor
              </Title>
            </Paper>
          </VStack>
        </Popover>

        <Popover position="top" title="Popover" backgroundColor="success" open={secondIsOpen}>
          <VStack>
            <Paper backgroundColor="success" p={10} borderRadiusLevel={2}>
              <Title level={4} color="onView1">
                Anchor2
              </Title>
            </Paper>
          </VStack>
        </Popover>

        <Popover position="right" title="Popover" backgroundColor="informative" open={thirdIsOpen}>
          <VStack>
            <Paper backgroundColor="informative" p={10} borderRadiusLevel={2}>
              <Title level={4} color="onView1">
                Anchor2
              </Title>
            </Paper>
          </VStack>
        </Popover>
      </HStack>

      <HStack spacing={100}>
        <PopoverOpener {...props} isOpen={firstIsOpen || secondIsOpen || thirdIsOpen} open={openAll} close={closeAll}>
          <Title level={4} color="onView1">
            All Opener
          </Title>
        </PopoverOpener>
      </HStack>
    </VStack>
  );
};
