import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { SelectField } from './SelectField';

export default {
  title: 'SelectField',
  component: SelectField,
  args: {
    label: 'label',
    options: [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2',
        value: '2',
      },
      {
        label: 'option 3',
        value: '3',
        disabled: true,
      },
      {
        label: 'option 4',
        value: '4',
      },
      {
        label: 'option 5',
        value: '5',
      },
      {
        label: 'option 6',
        value: '6',
      },
      {
        label: 'option 7',
        value: '7',
      },
      {
        label: 'option 8',
        value: '8',
      },
    ],
    inlineLabel: true,
  },
} as ComponentMeta<typeof SelectField>;

export const Basic: ComponentStory<typeof SelectField> = props => (
  <Box width="100%">
    <Box height={500} />
    <SelectField {...props} />
    <Box height={500} />
  </Box>
);

export const WithRenderOption: ComponentStory<typeof SelectField> = props => {
  const data = [
    {
      label: 'option 1',
      value: '1',
      discountRate: 10,
      price: 10000,
    },
    {
      label: 'option 2',
      value: '2',
      discountRate: 20,
      price: 20000,
    },
  ];

  return (
    <VStack width="100%">
      <Box height={500} />
      <SelectField
        {...props}
        options={data.map(item => ({ label: item.label, value: item.value }))}
        renderOption={index => (
          <VStack spacing={8}>
            <Body level={2} color="onView1">
              {data[index].label}
            </Body>
            <HStack spacing={4}>
              <Body level={2} weight="bold" color="error">
                {data[index].discountRate}%
              </Body>
              <Body level={2} weight="bold" color="onView1">
                {data[index].price.toLocaleString()}
              </Body>
            </HStack>
          </VStack>
        )}
      />
      <Box height={500} />
    </VStack>
  );
};

export const MultipleSelectField: ComponentStory<typeof SelectField> = props => (
  <Box width="100%" position="relative">
    <Box zIndex={-1} height={500} />
    <SelectField {...props} />
    <Box zIndex={-1} height={20} />
    <SelectField {...props} />
    <Box zIndex={-1} height={500} />
  </Box>
);
