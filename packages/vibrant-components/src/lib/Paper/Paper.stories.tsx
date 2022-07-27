import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paper } from './Paper';

export default {
  title: 'Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

export const Basic: ComponentStory<typeof Paper> = props => <Paper {...props} width={200} height={200} />;

export const BackgroundColor: ComponentStory<typeof Paper> = () => (
  <Paper width={200} height={200} backgroundColor="primary" borderRadiusLevel={1} />
);

export const BackgroundGradient: ComponentStory<typeof Paper> = () => (
  <Paper width="100%" minHeight="100vh" backgroundColor="inverseBackground">
    <Paper width={200} height={200} gradient="linearTop" />
  </Paper>
);

export const BorderSolid: ComponentStory<typeof Paper> = () => (
  <Paper width={200} height={200} borderWidth={1} borderColor="outline1" borderStyle="solid" />
);
