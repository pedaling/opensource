import { useControllableState } from '@vibrant-ui/utils';
import { RadioGroupProvider } from './context/RadioGroupContext';
import { RadioSizeProvider } from './context/RadioSizeContext';
import { withRadioGroupFieldVariation } from './RadioGroupFieldProps';

export const RadioGroupField = withRadioGroupFieldVariation(
  ({ defaultValue, value: valueProp, onChange, size, children, state = 'default', disabled = false, name }) => {
    const [value, setValue] = useControllableState<string>({
      value: valueProp,
      defaultValue,
      onChange: value => onChange?.({ value }),
    });

    return (
      <RadioGroupProvider value={value} onChange={setValue} state={state} disabled={disabled} name={name}>
        <RadioSizeProvider size={size}>{children}</RadioSizeProvider>
      </RadioGroupProvider>
    );
  }
);
