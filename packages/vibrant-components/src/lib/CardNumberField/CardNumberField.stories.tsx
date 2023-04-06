import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { Body } from '../Body';
import { CustomizationProvider } from '../CustomizationProvider';
import { Paper } from '../Paper';
import { VStack } from '../VStack';
import { CardNumberField } from './CardNumberField';

export default {
  title: 'CardNumberField',
  component: CardNumberField,
  args: {
    label: '카드번호',
    helperText: '카드번호를 입력해주세요',
    separator: '-',
  },
} as ComponentMeta<typeof CardNumberField>;

const Test = ({ size }: { size: ResponsiveValue<number> }) => (
  <Paper backgroundColor="primary" width={size}>
    <Body level={2}>other</Body>
  </Paper>
);

export const Basic: ComponentStory<typeof CardNumberField> = props => (
  <CustomizationProvider cardNumberField={{ cardIconMap: { others: Test } }}>
    <VStack width="100%" p={20}>
      <CardNumberField
        onValueChange={({ value, prevent }) => {
          console.log(value);

          prevent();
        }}
        {...props}
      />
    </VStack>
  </CustomizationProvider>
);
