import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Box } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { Input } from '../Input';
import { Text } from '../Text';
import { VerificationCodeItem } from '../VerificationCodeItem';
import { VStack } from '../VStack';
import { withVerificationCodeFieldVariation } from './VerificationCodeFieldProps';

export const VerificationCodeField = withVerificationCodeFieldVariation(
  ({ length, state, errorMessage, ...restProps }) => {
    const [code, setCode] = useState<string[]>([]);
    const [focusIndex, setFocusIndex] = useState<number>(-1);
    const inputIdRef = useRef(uuid());

    const splitIndex = Math.ceil(length / 2);

    return (
      <Box {...restProps}>
        <Box
          base={Input}
          id={inputIdRef.current}
          position="absolute"
          width={0}
          height={0}
          opacity={0}
          allowPattern={/\d/}
          maxLength={length}
          onFocus={() => setFocusIndex(Math.min(length - 1, code.length))}
          onBlur={() => setFocusIndex(-1)}
          onValueChange={(value: string) => {
            setCode(value.split(''));

            setFocusIndex(Math.min(length - 1, value.length));
          }}
          onKeyDown={({ key, prevent }: { key: string; prevent: () => void }) => {
            if (/Arrow/.test(key)) {
              prevent();
            }
          }}
        />
        <VStack display="inline-flex" flexWrap="wrap" alignment="center" spacing={8}>
          <HStack justifyItems="center" flexWrap="wrap" rowGap={12} columnGap={8}>
            <HStack flex={1} alignment="center" spacing={8}>
              {Array.from({ length: splitIndex }).map((_, index) => (
                <VerificationCodeItem
                  key={index}
                  inputId={inputIdRef.current}
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
                  inputId={inputIdRef.current}
                  value={code[index + splitIndex]}
                  state={state}
                  active={focusIndex === index + splitIndex}
                />
              ))}
            </HStack>
          </HStack>
          {state === 'error' && errorMessage && (
            <Text kind="body4" color="error">
              {errorMessage}
            </Text>
          )}
        </VStack>
      </Box>
    );
  }
);
