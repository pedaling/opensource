import { useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Input } from '../Input';
import { VerificationCodeItem } from '../VerificationCodeItem';
import { VStack } from '../VStack';
import { withVerificationCodeFieldVariation } from './VerificationCodeFieldProps';

export const VerificationCodeField = withVerificationCodeFieldVariation(
  ({ length, state, errorMessage, ...restProps }) => {
    const [code, setCode] = useState<string[]>([]);
    const [focusIndex, setFocusIndex] = useState(-1);
    const inputId = useMemo(() => uuid(), []);

    const splitIndex = Math.ceil(length / 2);

    return (
      <Box {...restProps}>
        <Input
          id={inputId}
          position="absolute"
          width={0}
          height={0}
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
          {state === 'error' && errorMessage && (
            <Body level={4} color="error">
              {errorMessage}
            </Body>
          )}
        </VStack>
      </Box>
    );
  }
);
