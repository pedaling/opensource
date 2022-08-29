import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Text } from '../Text';
import { PortalBox } from './PortalBox';

export default {
  title: 'PortalBox',
  component: PortalBox,
  args: {},
} as ComponentMeta<typeof PortalBox>;

export const Basic: ComponentStory<typeof PortalBox> = props => (
  <>
    <PortalBox {...props} top={0} left={0} right={0} bottom={0}>
      <Box alignContent="center" justifyContent="center" backgroundColor="dim" height="100%">
        <Text typography="title1" textAlign="center" color="white">
          Portal1
        </Text>
      </Box>
    </PortalBox>
    <PortalBox {...props} zIndex={1} top={0} left={0} right={0} bottom={0}>
      <Box alignContent="center" justifyContent="center" backgroundColor="dim" height="100%">
        <Text typography="title1" textAlign="center" color="primary">
          Portal2
        </Text>
      </Box>
    </PortalBox>
  </>
);
