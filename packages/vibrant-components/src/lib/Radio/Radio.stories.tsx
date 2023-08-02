import { useId } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { RadioGroupField } from '../RadioGroupField/RadioGroupField';
import { VStack } from '../VStack';
import { Radio } from './Radio';
import { useRadio } from './useRadio';

export default {
  title: 'Radio',
  component: Radio,
  args: {
    label: 'Radio',
    description: 'Description',
    value: '1',
  },
} as ComponentMeta<typeof Radio>;

export const Basic: ComponentStory<typeof Radio> = props => (
  <RadioGroupField name="radioGroup">
    <VStack spacing={8} width={300} alignHorizontal="start">
      <Radio {...props} />
      <Radio value="2" label="Second" />
      <Radio value="3" label="Third" />
    </VStack>
  </RadioGroupField>
);

const RadioButton = ({ value, label }: { value: string; label: string }) => {
  const { name, isChecked, isDisabled, onChange } = useRadio({ value });

  const id = useId();

  return (
    <Pressable
      as="span"
      width={100}
      disabled={isDisabled}
      backgroundColor={isChecked ? 'primary' : 'background'}
      p={10}
      rounded="lg"
    >
      <>
        <Box
          as="input"
          id={id}
          value={value}
          name={name}
          type="radio"
          checked={isChecked}
          onChange={onChange}
          opacity={0}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        />
        <Body as="label" level={1} htmlFor={id}>
          {label}
        </Body>
      </>
    </Pressable>
  );
};

export const Custom: ComponentStory<typeof Radio> = () => (
  <RadioGroupField name="radioGroup">
    <RadioButton value="1" label="First" />
    <RadioButton value="2" label="Second" />
    <RadioButton value="3" label="Third" />
  </RadioGroupField>
);
