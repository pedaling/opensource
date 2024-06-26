import { useEffect, useMemo, useRef, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, useCurrentTheme } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { ModalBottomSheet } from '../ModalBottomSheet';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { SelectField } from './SelectField';
import type { SelectFieldRefValue } from './SelectFieldProps';

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

export const WithDefaultValue: ComponentStory<typeof SelectField> = props => <SelectField {...props} />;

WithDefaultValue.args = {
  defaultValue: '1',
};

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

export const UsageWithRef: ComponentStory<typeof SelectField> = props => {
  const selectFieldRef = useRef<SelectFieldRefValue>(null);

  return (
    <VStack spacing={10}>
      <HStack spacing={8}>
        <Pressable onClick={() => selectFieldRef.current?.clear()}>
          <Body level={2}>Clear</Body>
        </Pressable>
        <Pressable onClick={() => selectFieldRef.current?.focus()}>
          <Body level={2}>Focus</Body>
        </Pressable>
      </HStack>
      <SelectField {...props} ref={selectFieldRef} />
    </VStack>
  );
};

export const WithOnModalBottomSheet: ComponentStory<typeof SelectField> = props => {
  const {
    theme: { zIndex },
  } = useCurrentTheme();

  return (
    <VStack spacing={10}>
      <ModalBottomSheet
        defaultOpen={true}
        renderOpener={({ open }) => (
          <Pressable onClick={open}>
            <Body level={2}>open modal</Body>
          </Pressable>
        )}
        renderContents={() => (
          <Box px={20}>
            <SelectField zIndex={zIndex.modalBottomSheet} {...props} />
          </Box>
        )}
      />
    </VStack>
  );
};

export const ControlledDefaultValue: ComponentStory<typeof SelectField> = () => {
  const [size, setSize] = useState<string>('level1');

  const weightOptions = useMemo(() => {
    if (size === 'level1' || size === 'level2' || size === 'level3') {
      return ['extraBold'];
    }

    return ['regular', 'extraBold'];
  }, [size]);

  const [weight, setWeight] = useState<string>(weightOptions[0]);

  const sizeOptions = ['level1', 'level2', 'level3', 'level4'];

  useEffect(() => {
    setWeight(weightOptions[0]);
  }, [weightOptions]);

  return (
    <Box width="100%">
      <SelectField
        label="Size"
        options={sizeOptions.map(name => ({ label: name, value: name }))}
        defaultValue={size}
        onValueChange={value => {
          if (value) {
            setSize(value);
          }
        }}
      />
      <SelectField
        label="Weight"
        options={weightOptions.map(name => ({ label: name, value: name }))}
        defaultValue={weight}
        onValueChange={value => {
          if (value) {
            setWeight(value);
          }
        }}
      />
    </Box>
  );
};
