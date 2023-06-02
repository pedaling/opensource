import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body, CustomizationProvider, Paper, VStack } from '@vibrant-ui/components';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { Form } from '../Form';
import { FormCardNumberField } from './FormCardNumberField';

export default {
  title: 'FormCardNumberField',
  component: FormCardNumberField,
  args: {
    name: 'test',
    label: '카드번호',
    helperText: '카드번호를 입력해주세요',
    separator: '-',
  },
} as ComponentMeta<typeof FormCardNumberField>;
const generateCardComponentMock =
  (name: string) =>
  ({ size }: { size: ResponsiveValue<number> }) =>
    (
      <Paper backgroundColor="primary" width={size}>
        <Body level={3}>{name}</Body>
      </Paper>
    );

export const Basic: ComponentStory<typeof FormCardNumberField> = props => (
  <Form>
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
        <FormCardNumberField {...props} />
      </VStack>
    </CustomizationProvider>
  </Form>
);
