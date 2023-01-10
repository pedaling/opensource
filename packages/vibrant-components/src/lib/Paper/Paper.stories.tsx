import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { VStack } from '../VStack';
import { Paper } from './Paper';

export default {
  title: 'Paper',
  component: Paper,
  args: {
    backgroundColor: 'primary',
  },
} as ComponentMeta<typeof Paper>;

export const Basic: ComponentStory<typeof Paper> = props => <Paper {...props} m={20} width={200} height={200} />;

export const BackgroundColor: ComponentStory<typeof Paper> = () => (
  <Paper m={20} width={200} height={200} backgroundColor="primary" borderRadiusLevel={1} />
);

export const BackgroundGradient: ComponentStory<typeof Paper> = () => (
  <Paper width="100%" minHeight="100vh" backgroundColor="inverseSurface">
    <Paper width={200} height={200} gradient="linearTop" />
  </Paper>
);

export const BorderSolid: ComponentStory<typeof Paper> = () => (
  <Paper m={20} width={200} height={200} borderWidth={1} borderColor="outline1" borderStyle="solid" />
);

export const Elevation: ComponentStory<typeof Paper> = () => (
  <VStack m={50} spacing={50}>
    <Paper width={200} height={200} backgroundColor="background" elevationLevel={1} />
    <Paper width={200} height={200} backgroundColor="background" elevationLevel={2} />
    <Paper width={200} height={200} backgroundColor="background" elevationLevel={3} />
    <Paper width={200} height={200} backgroundColor="background" elevationLevel={4} />
  </VStack>
);

export const Position: ComponentStory<typeof Paper> = () => (
  <VStack>
    <Paper width={200} height={200} backgroundColor="primary" p={10}>
      <Body level={1}>relative</Body>
    </Paper>
    <Paper width={200} height={200} backgroundColor="informative" p={10} position="web_sticky" top={0}>
      <Body level={1}>sticky</Body>
    </Paper>
    <Paper width={200} height={200} backgroundColor="warning" p={10} position="absolute" top={50} left={50}>
      <Body level={1}>absolute</Body>
    </Paper>
    <Paper width={200} height={200} backgroundColor="success" p={10} position="fixed" top={150} left={150}>
      <Body level={1}>fixed</Body>
    </Paper>
    <Box height={5000} />
  </VStack>
);

export const RadiusCustom: ComponentStory<typeof Paper> = () => (
  <VStack>
    <Paper
      borderTopLeftRadiusLevel={0}
      borderTopRightRadiusLevel={2}
      borderBottomLeftRadiusLevel={3}
      borderBottomRightRadiusLevel={4}
      width={200}
      height={200}
      backgroundColor="informative"
      p={10}
      top={0}
    >
      <Body level={1}>sticky</Body>
    </Paper>
  </VStack>
);
