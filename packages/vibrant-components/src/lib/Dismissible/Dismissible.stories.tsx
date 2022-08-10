import { useRef } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Dismissible } from './Dismissible';

export default {
  title: 'Dismissible',
  component: Dismissible,
  args: {
    active: true,
  },
  argTypes: {
    onDismiss: { action: 'onDismiss' },
  },
} as ComponentMeta<typeof Dismissible>;

export const Basic: ComponentStory<typeof Dismissible> = props => {
  const targetRef = useRef<HTMLElement>(null);

  return (
    <>
      <Box ref={targetRef} width={100} height={100} backgroundColor="primary">
        <Body level={2}>Click outside</Body>
      </Box>
      <Dismissible {...props} targetRef={targetRef} />
    </>
  );
};
