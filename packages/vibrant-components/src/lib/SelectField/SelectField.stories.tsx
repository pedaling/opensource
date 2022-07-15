import type { ComponentStory, ComponentMeta } from '@storybook/react';
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
  <Box>
    <Box height={500} />
    <SelectField {...props} />
    <Box height={500} />
  </Box>
);

export const WithRenderItem: ComponentStory<typeof SelectField> = props => (
  <Box>
    <Box height={500} />
    <SelectField
      {...props}
      renderItem={({ label }) => (
        <VStack spacing={8}>
          <Body level={2} color="onView1">
            {label}
          </Body>
          <HStack spacing={4}>
            <Body level={2} weight="bold" color="error">
              22%
            </Body>
            <Body level={2} weight="bold" color="onView1">
              224,700원
            </Body>
          </HStack>
        </VStack>
      )}
    />
    <Box height={500} />
  </Box>
);
