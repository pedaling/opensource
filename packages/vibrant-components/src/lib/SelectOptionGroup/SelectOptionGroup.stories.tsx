import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { SelectOptionGroup } from './SelectOptionGroup';

export default {
  title: 'SelectOptionGroup',
  component: SelectOptionGroup,
  args: {
    options: [
      {
        label: '데일리 원피스 제작 올인원 패키지',
        value: '1',
      },
      {
        label: '데일리 원피스 제작 패턴 도안 패키지',
        value: '2',
      },
    ],
  },
} as ComponentMeta<typeof SelectOptionGroup>;

export const Basic: ComponentStory<typeof SelectOptionGroup> = props => <SelectOptionGroup {...props} />;

export const WithRenderOption: ComponentStory<typeof SelectOptionGroup> = props => {
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
    <SelectOptionGroup
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
  );
};
