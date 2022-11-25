import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { VStack } from '../VStack';
import { TextField } from './TextField';
export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: '이메일',
    helperText: '이메일을 입력해주세요',
    autoCapitalize: 'none',
    autoComplete: 'none',
  },
  argTypes: {
    renderStart: { controls: false },
    renderEnd: { controls: false },
  },
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = props => (
  <VStack width="100%" p={20}>
    <TextField {...props} />
  </VStack>
);

export const WithAddon: ComponentStory<typeof TextField> = props => (
  <VStack width="100%" p={20}>
    <TextField
      renderEnd={() => <Icon.Star.Thin size={20} fill="onView2" />}
      renderStart={() => <Icon.Add.Thin size={20} fill="onView2" />}
      {...props}
    />
  </VStack>
);

export const MidiumSize: ComponentStory<typeof TextField> = props => (
  <VStack width="100%" p={20}>
    <TextField {...props} size="md" />
  </VStack>
);
export const MidiumSizeWithAddon: ComponentStory<typeof TextField> = props => (
  <VStack width="100%" p={20}>
    <TextField
      {...props}
      size="md"
      renderEnd={() => <Icon.Star.Thin size={20} fill="onView2" />}
      renderStart={() => <Icon.Add.Thin size={20} fill="onView2" />}
    />
  </VStack>
);
