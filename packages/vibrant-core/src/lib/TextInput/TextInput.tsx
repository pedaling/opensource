import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps, TextInputProps, TextInputRef } from './TextInputProps';
import { HTMLAutoCompleteOptions, interpolation, replaceValue, systemPropNames } from './TextInputProps';

type HTMLInputProps = Exclude<keyof JSX.IntrinsicElements['input'], keyof SystemProps>;

const shouldForwardProp = createShouldForwardProp<HTMLInputProps>(systemPropNames);

const SystemTextInput = styled<'input', HTMLInputProps>('input', {
  shouldForwardProp,
})(interpolation);

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      type,
      defaultValue,
      pattern,
      hidden,
      focusStyle,
      autoCapitalize,
      autoComplete = 'none',
      cursor,
      onFocus,
      onBlur,
      onKeyPress,
      onValueChange,
      onSubmit,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue ?? '');

    const [isFocused, setIsFocused] = useState(false);

    const innerRef = useRef<HTMLInputElement>(null);

    const inputMode = useMemo(() => {
      if (type === 'number') {
        return 'numeric';
      }

      if (type === 'email') {
        return 'email';
      }

      if (type === 'url') {
        return 'url';
      }

      return 'text';
    }, [type]);

    useEffect(() => {
      setValue(defaultValue ?? '');

      if (cursor && innerRef.current) {
        innerRef.current.setSelectionRange(cursor, cursor);
      }
    }, [cursor, defaultValue, value]);

    useImperativeHandle(ref, () => ({
      focus: () => innerRef.current?.focus(),
      blur: () => innerRef.current?.blur(),
      clear: () => {
        setValue('');

        onValueChange?.({ value: '', prevent: () => {} });
      },
      isFocused: () => document.activeElement === innerRef.current,
    }));

    return (
      <SystemTextInput
        ref={innerRef}
        type={type === 'number' ? 'text' : type}
        value={value}
        inputMode={inputMode}
        autoCapitalize={autoCapitalize}
        autoComplete={HTMLAutoCompleteOptions[autoComplete]}
        onFocus={() => {
          setIsFocused(true);

          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);

          onBlur?.();
        }}
        onKeyDown={event => {
          const { key } = event.nativeEvent;

          if (key === 'Enter') {
            onSubmit?.(value);

            return;
          }

          onKeyPress?.({ key, prevent: () => event.preventDefault() });
        }}
        onInput={event => {
          const replacedValue = replaceValue({
            pattern: type === 'number' ? /\d/ : pattern,
            value: event.currentTarget.value,
          });

          let isPrevented = false;

          if (value === replacedValue) {
            event.preventDefault();

            return;
          }

          onValueChange?.({
            value: replacedValue,
            prevent: () => {
              isPrevented = true;

              event.preventDefault();
            },
            target: innerRef.current,
          });

          if (!isPrevented) {
            setValue(replacedValue);
          }
        }}
        {...restProps}
        {...(isFocused ? focusStyle : {})}
        {...(hidden ? { position: 'absolute', height: 0, opacity: 0 } : {})}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
