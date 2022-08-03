import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from '../HStack';
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
  <Paper width="100%" minHeight="100vh" backgroundColor="inverseBackground">
    <Paper width={200} height={200} gradient="linearTop" />
  </Paper>
);

export const BorderSolid: ComponentStory<typeof Paper> = () => (
  <Paper m={20} width={200} height={200} borderWidth={1} borderColor="outline1" borderStyle="solid" />
);

export const Elevation: ComponentStory<typeof Paper> = () => (
  <HStack m={20} spacing={30}>
    <Paper width={200} height={200} elevationLevel={1} />
    <Paper width={200} height={200} elevationLevel={2} />
    <Paper width={200} height={200} elevationLevel={3} />
    <Paper width={200} height={200} elevationLevel={4} />
  </HStack>
);
