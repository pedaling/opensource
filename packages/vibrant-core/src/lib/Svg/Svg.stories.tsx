import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Svg } from '../Svg';

export default {
  title: 'Svg',
  component: Svg,
  args: {},
} as ComponentMeta<typeof Svg>;

export const Basic: ComponentStory<typeof Svg> = props => (
  <Svg viewBox="0 0 120 120" width={177.6} height={177.6} {...props}>
    <Svg.Circle cx="60" cy="60" r="50" stroke="outline1" strokeWidth={6} strokeOpacity={0.2} fill="transparent" />
    <Svg.Circle
      cx="60"
      cy="60"
      r="50"
      stroke="outlinePrimary"
      strokeWidth={6}
      fill="transparent"
      strokeDasharray={2 * Math.PI * 50}
      strokeDashoffset={2 * Math.PI * 50 * (1 - 0.07)}
      strokeLinecap="round"
    />
  </Svg>
);
