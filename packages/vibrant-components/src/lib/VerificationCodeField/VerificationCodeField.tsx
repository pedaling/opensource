import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { UnstyledTextInput } from '../UnstyledTextInput';
import { VerificationCodeItem } from '../VerificationCodeItem';
import { VStack } from '../VStack';
import { withVerificationCodeFieldVariation } from './VerificationCodeFieldProps';

export const VerificationCodeField = withVerificationCodeFieldVariation(
  ({ length, state: stateProp = 'default', errorMessage, blurOnComplete, onComplete, ...restProps }) => {
    const [state, setState] = useState<'default' | 'error'>(stateProp);
    const [code, setCode] = useState<string[]>([]);
    const [focusIndex, setFocusIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = useMemo(() => uuid(), []);

    const splitIndex = Math.ceil(length / 2);

    useEffect(() => {
      setState(stateProp);

      if (stateProp === 'error') {
        inputRef.current?.blur();

        setCode([]);
      }
    }, [stateProp]);

    return (
      <Box {...restProps}>
        <Box<typeof UnstyledTextInput>
          base={UnstyledTextInput}
          ref={inputRef}
          id={inputId}
          position="absolute"
          width={0}
          height={0}
          allowPattern={/\d/}
          maxLength={length}
          value={code.join('')}
          onFocus={() => {
            setState('default');

            setFocusIndex(Math.min(length - 1, code.length));
          }}
          onBlur={() => setFocusIndex(-1)}
          onValueChange={(value: string) => {
            if (code.length !== length && value.length === length) {
              onComplete?.(value);

              if (blurOnComplete) {
                inputRef.current?.blur();
              }
            }

            setCode(value.split(''));

            setFocusIndex(Math.min(length - 1, value.length));
          }}
          onKeyDown={({ key, prevent }: { key: string; prevent: () => void }) => {
            if (/Arrow/.test(key)) {
              prevent();
            }
          }}
        />
        <VStack alignment="center" spacing={8}>
          <HStack justifyItems="center" flexWrap="wrap" rowGap={12} columnGap={8}>
            <HStack flex={1} alignment="center" spacing={8}>
              {Array.from({ length: splitIndex }).map((_, index) => (
                <VerificationCodeItem
                  key={index}
                  inputId={inputId}
                  value={code[index]}
                  state={state}
                  active={focusIndex === index}
                />
              ))}
            </HStack>
            <HStack flex={1} alignment="center" spacing={8}>
              {Array.from({ length: length - splitIndex }).map((_, index) => (
                <VerificationCodeItem
                  key={index + splitIndex}
                  inputId={inputId}
                  value={code[index + splitIndex]}
                  state={state}
                  active={focusIndex === index + splitIndex}
                />
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
