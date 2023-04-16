import { useEffect, useState } from 'react';
import { useCallbackRef } from '@vibrant-ui/utils';
import { RadioGroupProvider } from './context/RadioGroupContext';
import type { RadioGroupContextValue } from './context/RadioGroupContext';
import { withRadioGroupFieldVariation } from './RadioGroupFieldProps';

export const RadioGroupField = withRadioGroupFieldVariation(({ defaultValue, onValueChange, children, ...props }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleValueChange = useCallbackRef<RadioGroupContextValue['onValueChange']>(event => {
    setValue(event.value);

    onValueChange?.(event);
  });

  return (
    <RadioGroupProvider value={value} onValueChange={handleValueChange} {...props}>
      {children}
    </RadioGroupProvider>
  );
});
