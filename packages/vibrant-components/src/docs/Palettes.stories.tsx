import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PressableBox, Text, useCurrentTheme } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';
import { palettes } from '@vibrant-ui/theme';
import { HStack } from '../lib/HStack';
import { Paper } from '../lib/Paper';
import { VStack } from '../lib/VStack';

export default {
  title: 'Palettes',
  component: HStack,
  args: {},
} as ComponentMeta<typeof HStack>;

export const ColorTokenChips: ComponentStory<typeof HStack> = () => {
  const {
    theme: { colors },
  } = useCurrentTheme();

  const onColorToken: Record<ColorToken, ColorToken> = {
    white: 'black',
    black: 'white',
    transparent: 'onView1',
    primary: 'onPrimary',
    onPrimary: 'primary',
    primaryContainer: 'onPrimaryContainer',
    onPrimaryContainer: 'primaryContainer',
    informative: 'onInformative',
    onInformative: 'informative',
    informativeContainer: 'onInformativeContainer',
    onInformativeContainer: 'informativeContainer',
    error: 'onError',
    onError: 'error',
    errorContainer: 'onErrorContainer',
    onErrorContainer: 'errorContainer',
    success: 'onSuccess',
    onSuccess: 'success',
    successContainer: 'onSuccessContainer',
    onSuccessContainer: 'successContainer',
    warning: 'onWarning',
    onWarning: 'warning',
    warningContainer: 'onWarningContainer',
    onWarningContainer: 'warningContainer',
    surface1: 'onView1',
    surface2: 'onView1',
    surface3: 'onView1',
    surface4: 'onView1',
    disable: 'onView1',
    outline1: 'onView1',
    outline2: 'onView1',
    outlineNeutral: 'onInverseSurface',
    outlineDisable: 'onView1',
    outlinePrimary: 'onView1',
    outlineInformative: 'onView1',
    outlineError: 'onView1',
    outlineSuccess: 'onView1',
    outlineWarning: 'onView1',
    onView1: 'onInverseSurface',
    onView2: 'onView1',
    onView3: 'onView1',
    onViewPrimary: 'onView1',
    onViewInformative: 'onView1',
    onViewError: 'onView1',
    onViewSuccess: 'onView1',
    onViewWarning: 'onView1',
    background: 'onView1',
    inverseSurface: 'onInverseSurface',
    onInverseSurface: 'inverseSurface',
    dim: 'onView1',
    overlay: 'onView1',
    onColor: 'onView2',
  };

  return (
    <HStack m={10}>
      <Paper backgroundColor="background">
        <HStack rowGap={20} flexWrap="wrap">
          {Object.entries(colors).map(([key, value]) => (
            <PressableBox
              key={value}
              onClick={() => {
                window.navigator.clipboard.writeText(value);
              }}
              alignItems="center"
              justifyContent="center"
              width="33%"
              height={70}
              backgroundColor={key}
            >
              <Text
                fontWeight="bold"
                wordBreak="break-all"
                color={onColorToken[key as ColorToken]}
                fontSize={4}
              >{`${key}`}</Text>
              <Text color={onColorToken[key as ColorToken]} fontSize={4}>{`${value}`}</Text>
            </PressableBox>
          ))}
        </HStack>
      </Paper>
    </HStack>
  );
};

export const ColorBasicChips: ComponentStory<typeof HStack> = () => (
  <HStack p={10} flexWrap="wrap" rowGap={20} columnGap={20}>
    {Object.entries(palettes).map(([key, value]) => {
      if (typeof value === 'object') {
        return (
          <HStack flexWrap="wrap" key={key} flexShrink={0}>
            {Object.entries(value).map(([numberKey, numberValue]) => (
              <VStack key={`${numberValue}_stack`} alignVertical="center" spacing={2}>
                <Text fontWeight="bold" fontSize={4}>{`${numberKey}`}</Text>
                <PressableBox
                  onClick={() => {
                    window.navigator.clipboard.writeText(numberValue);
                  }}
                  width={50}
                  height={50}
                  backgroundColor={numberValue}
                  children={null}
                />
                <Text fontSize={4}>{`${numberValue.replace('rgba', '')}`}</Text>
              </VStack>
            ))}
          </HStack>
        );
      } else {
        return (
          <VStack key={`${value}_stack`} alignHorizontal="center" spacing={2}>
            <Text fontWeight="bold" fontSize={4}>{`${key}`}</Text>
            <PressableBox
              onClick={() => {
                window.navigator.clipboard.writeText(value);
              }}
              width={50}
              height={50}
              backgroundColor={value}
              children={null}
            />
            <HStack flexWrap="wrap" flexShrink={1}>
              <Text fontSize={4}>{`${value}`}</Text>
            </HStack>
          </VStack>
        );
      }
    })}
  </HStack>
);
