import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Text } from '../Text';
import { OnColorContainer } from './OnColorContainer';

export default {
  title: 'OnColorContainer',
  component: OnColorContainer,
  args: {
    injectTo: 'forward',
  },
} as ComponentMeta<typeof OnColorContainer>;

export const Basic: ComponentStory<typeof OnColorContainer> = props => (
  <Box width={300} height={300} backgroundColor={props.backgroundColor}>
    <OnColorContainer {...props}>
      <Text color="onColor">Box</Text>
    </OnColorContainer>
  </Box>
);
