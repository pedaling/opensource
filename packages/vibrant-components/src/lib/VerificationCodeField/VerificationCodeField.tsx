import { useEffect, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, TextInput } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { VerificationCodeItem } from '../VerificationCodeItem';
import { VStack } from '../VStack';
import { withVerificationCodeFieldVariation } from './VerificationCodeFieldProps';

export const VerificationCodeField = withVerificationCodeFieldVariation(
  ({ length, state: stateProp = 'default', errorMessage, blurOnComplete, onComplete, ...restProps }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [code, setCode] = useState<string[]>([]);
    const [focusIndex, setFocusIndex] = useState(-1);

    const inputRef = useRef<TextInputRef>(null);

    const splitIndex = Math.ceil(length / 2);

    useEffect(() => {
      setState(stateProp);

      if (stateProp === 'error') {
        inputRef.current?.blur();

        setCode([]);
      }
    }, [stateProp]);

    return (
      <Box data-testid="VerificationCodeField" {...restProps}>
        <TextInput
          ref={inputRef}
          type="number"
          pattern={/\d/}
          maxLength={length}
          defaultValue={code.join('')}
          onFocus={() => {
            setState('default');

            setFocusIndex(Math.min(length - 1, code.length));
          }}
          onBlur={() => setFocusIndex(-1)}
          onValueChange={({ value }) => {
            if (code.length !== length && value.length === length) {
              onComplete?.(value);

              if (blurOnComplete) {
                inputRef.current?.blur();
              }
            }

            setCode(value.split(''));

            setFocusIndex(Math.min(length - 1, value.length));
          }}
          onKeyPress={({ key, prevent }) => {
            if (/Arrow/.test(key) || ['+', '-', '.', 'e'].includes(key.toLowerCase())) {
              prevent();
            }
          }}
          hidden={true}
        />
        <VStack alignment="center" spacing={8}>
          <HStack alignment="center" flexWrap="wrap" mx={-4} my={-6}>
            <HStack alignment="center" my={6}>
              {Array.from({ length: splitIndex }).map((_, index) => (
                <VStack key={index} mx={4}>
                  <VerificationCodeItem
                    key={index}
                    value={code[index]}
                    state={state}
                    active={focusIndex === index}
                    onClick={() => {
                      inputRef.current?.focus();
                    }}
                  />
                </VStack>
              ))}
            </HStack>
            <HStack alignment="center" my={6}>
              {Array.from({ length: length - splitIndex }).map((_, index) => (
                <VStack key={index + splitIndex} mx={4}>
                  <VerificationCodeItem
                    key={index + splitIndex}
                    value={code[index + splitIndex]}
                    state={state}
                    active={focusIndex === index + splitIndex}
                    onClick={inputRef.current?.focus}
                  />
                </VStack>
              ))}
            </HStack>
          </HStack>
          {state === 'error' && errorMessage ? (
            <Body level={4} color="error" textAlign="center">
              {errorMessage}
            </Body>
          ) : null}
        </VStack>
      </Box>
    );
  }
);
