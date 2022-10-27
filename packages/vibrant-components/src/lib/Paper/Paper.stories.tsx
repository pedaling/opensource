import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
