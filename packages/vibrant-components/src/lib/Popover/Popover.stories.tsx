import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../Avatar';
import { ContainedButton } from '../ContainedButton';
import { PopoverOpener } from '../PopoverOpener';
import { VStack } from '../VStack';
import { Popover } from './Popover';

export default {
  title: 'Popover',
  component: Popover,
  args: {},
} as ComponentMeta<typeof Popover>;

export const Basic: ComponentStory<typeof Popover> = () => (
  <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
    <Popover position="bottom" title="Popover" backgroundColor="informative">
      <PopoverOpener openToHover={true}>
        <Avatar size="lg" src="" alt="" />
      </PopoverOpener>
    </Popover>
  </VStack>
);

export const WithExternalState: ComponentStory<typeof Popover> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
      <Popover
        position="bottom"
        title="Popover"
        open={isOpen}
        backgroundColor="informative"
        renderContent={() => (
          <VStack p={30}>
            <Avatar size="lg" src="" alt="" />
          </VStack>
        )}
      >
        <ContainedButton kind="primary" size="md" onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          Click Opener
        </ContainedButton>
      </Popover>
    </VStack>
  );
};
