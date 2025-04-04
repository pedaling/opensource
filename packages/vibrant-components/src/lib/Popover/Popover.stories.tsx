import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../Avatar';
import { Body } from '../Body';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { VStack } from '../VStack';
import { Popover } from './Popover';

export default {
  title: 'Popover',
  component: Popover,
  args: {
    position: 'top',
  },
} as ComponentMeta<typeof Popover>;

export const Basic: ComponentStory<typeof Popover> = props => (
  <Paper width="80%" backgroundColor="surface1" p={20} mx="auto" my="auto">
    <VStack spacing={20}>
      <HStack width="100%" height={100} alignVertical="center" alignHorizontal="center">
        <Popover title="Popover" {...props}>
          <Popover.Opener openInteraction="click">
            <Avatar size="lg" src="" alt="" />
          </Popover.Opener>
        </Popover>
        <HStack flex={1} />
      </HStack>
      <HStack width="100%" height={100} alignVertical="center" alignHorizontal="center">
        <HStack flex={1} />
        <Popover title="Popover" {...props}>
          <Popover.Opener openInteraction="click">
            <Avatar size="lg" src="" alt="" />
          </Popover.Opener>
        </Popover>
      </HStack>
      <HStack width="100%" height={100} alignVertical="center" alignHorizontal="center">
        <Popover title="Popover" {...props}>
          <Popover.Opener openInteraction="click">
            <Avatar size="lg" src="" alt="" />
          </Popover.Opener>
        </Popover>
      </HStack>
    </VStack>
  </Paper>
);

export const WithDefaultOpen: ComponentStory<typeof Popover> = props => (
  <VStack width="100%" height="100vh" alignVertical="center" alignHorizontal="center">
    <Popover title="Popover" {...props} open={true}>
      <Popover.Opener openInteraction="click">
        <Avatar size="lg" src="" alt="" />
      </Popover.Opener>
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
          <VStack width={500} py={20}>
            <Body level={3} color="onColor">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cum mollitia quae impedit, quia et. Qui
              voluptates vel ipsam quibusdam libero velit in, dignissimos, voluptate fuga possimus culpa distinctio
              laboriosam!
            </Body>
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
