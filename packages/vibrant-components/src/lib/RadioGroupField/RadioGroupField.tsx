import { useControllableState } from '@vibrant-ui/utils';
import { RadioGroupProvider } from './context/RadioGroupContext';
import { RadioSizeProvider } from './context/RadioSizeContext';
import { withRadioGroupFieldVariation } from './RadioGroupFieldProps';

export const RadioGroupField = withRadioGroupFieldVariation(
  ({ defaultValue, value: valueProp, onChange, size, children, ...props }) => {
    const [value, setValue] = useControllableState<string>({
      value: valueProp,
      defaultValue,
      onChange: value => onChange?.({ value }),
    });

    return (
      <RadioGroupProvider value={value} onChange={setValue} {...props}>
        <RadioSizeProvider size={size}>{children}</RadioSizeProvider>
      </RadioGroupProvider>
    );
  }
);
