import type { ComponentType } from 'react';
import { forwardRef, useMemo } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import type { CurrentTheme } from '@vibrant-ui/theme';
import { isDefined } from '@vibrant-ui/utils';
import type { SystemProp } from '../createSystemProp';
import { OnColorContainer } from '../OnColorContainer';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import type { BoxProps } from './BoxProps';
import { systemProps } from './BoxProps';

const transformAs = (as: keyof JSX.IntrinsicElements): ComponentType => {
  switch (as) {
    case 'button':
      return TouchableOpacity;
    case 'input':
      return TextInput;
    default:
      return View;
  }
};

const systemPropsMap = systemProps
  .filter(props => !props.disabled)
  .reduce((acc, props) => {
    acc[props.propName] = props;

    return acc;
  }, {} as Record<string, SystemProp>);

const interpolation = (props: BoxProps, theme: CurrentTheme): Record<string, any>[] => {
  const styles = Object.keys(props).reduce((acc, propName) => {
    const systemProp = systemPropsMap[propName];

    if (!systemProp) {
      return acc;
    }

    const nextProps = systemProp((props as any)[propName], theme, props => interpolation(props, theme));

    if (isDefined(nextProps)) {
      for (let i = 0; i < nextProps.length; i++) {
        if (!isDefined(acc[i])) {
          acc[i] = {};
        }

        Object.assign(acc[i], nextProps[i]);
      }
    }

    return acc;
  }, [] as Record<string, any>[]);

  return styles;
};

export const Box = forwardRef<HTMLDivElement, BoxProps & { style: any }>((props, ref) => {
  const { theme } = useCurrentTheme();
  const { breakpointIndex } = useResponsiveValue();
  const [systemProps, restProps] = useMemo(() => {
    const systemProps: Record<string, any> = {};
    const restProps: Record<string, any> = {};

    for (const propName in props) {
      const systemProp = systemPropsMap[propName];

      if (!systemProp) {
        restProps[propName] = (props as any)[propName];

        continue;
      }

      systemProps[propName] = (props as any)[propName];
    }

    return [systemProps, restProps];
  }, [props]);

  const styles = useMemo(
    () => interpolation(systemProps, theme),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(systemProps), theme.colors.onColor, theme.mode]
  );

  const {
    BaseComponents,
    props: p,
    ...style
  } = useMemo(
    () => StyleSheet.flatten([props.style, ...styles.filter((_, index) => breakpointIndex >= index)]),
    [breakpointIndex, props.style, styles]
  );

  const Component = BaseComponents ?? props.base ?? (transformAs(props.as ?? 'div') as any);

  const element = <Component ref={ref} {...restProps} {...p} style={style} />;

  if (props.backgroundColor) {
    return <OnColorContainer backgroundColor={props.backgroundColor}>{element}</OnColorContainer>;
  }

  return element;
});

Box.displayName = 'Box';
