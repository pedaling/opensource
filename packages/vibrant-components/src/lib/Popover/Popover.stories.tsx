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
  args: {
    position: 'bottom',
  },
} as ComponentMeta<typeof Popover>;

export const Basic: ComponentStory<typeof Popover> = props => (
  <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
    <Popover title="Popover" {...props}>
      <PopoverOpener openToHover={true}>
        <Avatar size="lg" src="" alt="" />
      </PopoverOpener>
    </Popover>
  </VStack>
);

export const WithExternalState: ComponentStory<typeof Popover> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
      <Popover
        {...props}
        title="Popover"
        open={isOpen}
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
