import type { FC } from 'react';
import { createElement } from 'react';
import type { ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import type { IconProps } from './IconProp';

const IconPlayground: FC<IconProps & { icon: keyof typeof Icon; weight: 'Fill' | 'Regular' | 'Thin' }> = ({
  icon,
  weight,
  ...iconProps
}) => createElement(Icon[icon][weight], iconProps);

export default {
  title: 'Icon',
  component: IconPlayground,
  argTypes: {
    icon: {
      type: 'select',
      defaultValue: 'Add',
      options: Object.keys(Icon),
    },
    weight: {
      type: 'select',
      defaultValue: 'Regular',
      options: ['Fill', 'Regular', 'Thin'],
    },
    fill: {
      type: 'string',
      defaultValue: 'black',
    },
  },
};

export const Basic: ComponentStory<typeof IconPlayground> = props => <IconPlayground {...props} />;
