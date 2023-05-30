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

const generateCardComponentMock =
  (name: string) =>
  ({ size }: { size: ResponsiveValue<number> }) =>
    (
      <Paper backgroundColor="primary" width={size}>
        <Body level={3}>{name}</Body>
      </Paper>
    );

export const Basic: ComponentStory<typeof CardNumberField> = props => (
  <CustomizationProvider
    cardNumberField={{
      cardIconMap: {
        others: generateCardComponentMock('others'),
        'american-express': generateCardComponentMock('amex'),
        'diners-club': generateCardComponentMock('diners'),
        discover: generateCardComponentMock('discover'),
        jcb: generateCardComponentMock('jcb'),
        maestro: generateCardComponentMock('maestro'),
        mastercard: generateCardComponentMock('mastercard'),
        unionpay: generateCardComponentMock('unionpay'),
        visa: generateCardComponentMock('visa'),
      },
    }}
  >
    <VStack width="100%" p={20}>
      <CardNumberField
        onValueChange={({ prevent }) => {
          prevent();
        }}
        {...props}
      />
    </VStack>
  </CustomizationProvider>
);
