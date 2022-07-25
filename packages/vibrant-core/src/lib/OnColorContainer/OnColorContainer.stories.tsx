import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { OnColorContainer } from '.';

export default {
  title: 'OnColorContainer',
  component: OnColorContainer,
  args: {
    color: 'onPrimary',
    injectTo: 'forward',
  },
} as ComponentMeta<typeof OnColorContainer>;

export const Basic: ComponentStory<typeof OnColorContainer> = props => (
  <OnColorContainer {...props}>
    <Box width={300} height={300} backgroundColor="primary">
      Box
    </Box>
  </OnColorContainer>
);
