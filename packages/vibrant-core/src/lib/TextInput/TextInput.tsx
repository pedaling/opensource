import { createElement, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { convertStyleToClassName } from '../convertStyleToClassName';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps, TextInputProps, TextInputRef } from './TextInputProps';
import { HTMLAutoCompleteOptions, interpolation, replaceValue, systemPropNames } from './TextInputProps';

type HTMLInputProps = Exclude<keyof JSX.IntrinsicElements['input'], keyof SystemProps>;

const shouldForwardProp = createShouldForwardProp<HTMLInputProps>(systemPropNames);

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      type,
      enterKeyType,
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

      if (type === 'search') {
        return 'search';
      }

      return 'text';
    }, [type]);

    useEffect(() => {
      setValue(defaultValue ?? '');

      if (cursor && innerRef.current) {
        innerRef.current.setSelectionRange(cursor, cursor);
      }
    }, [cursor, defaultValue]);

    useImperativeHandle(ref, () => ({
      focus: () => innerRef.current?.focus(),
      blur: () => innerRef.current?.blur(),
      clear: () => {
        setValue('');

        onValueChange?.({
          value: '',
          prevent: () => {},
          target: innerRef.current,
        });
      },
      isFocused: () => document.activeElement === innerRef.current,
    }));

    const styleProps = interpolation({
      ...restProps,
      ...(hidden
        ? {
            position: 'absolute',
            height: 0,
            opacity: 0,
          }
        : {}),
      ...(isFocused ? focusStyle : {}),
    });

    const className = convertStyleToClassName(interpolation(styleProps)).join(' ');

    const domAttributeProps = Object.fromEntries(
      Object.entries(restProps).filter(([key, _]) => shouldForwardProp(key))
    );

    return createElement('input', {
      ref: innerRef,
      type: type === 'number' ? 'text' : type,
      value,
      enterKeyHint: enterKeyType,
      inputMode,
      autoCapitalize,
      autoComplete: HTMLAutoCompleteOptions[autoComplete],
      onFocus: () => {
        setIsFocused(true);

        onFocus?.();
      },
      onBlur: () => {
        setIsFocused(false);

        onBlur?.();
      },

      onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
        const { key } = event.nativeEvent;

        if (key === 'Enter') {
          onSubmit?.(value);

          return;
        }

        onKeyPress?.({ key, prevent: () => event.preventDefault() });
      },
      onInput: (event: FormEvent<HTMLInputElement>) => {
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
      },
      ...domAttributeProps,
      className,
    });
  }
);

TextInput.displayName = 'TextInput';
