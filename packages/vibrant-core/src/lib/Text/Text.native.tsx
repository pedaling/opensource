import type { FC } from 'react';
import { forwardRef, useMemo } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import type { CurrentTheme } from '@vibrant-ui/theme';
import { isDefined } from '@vibrant-ui/utils';
import type { SystemProp } from '../createSystemProp';
import { nl2br } from '../nl2br';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import { systemProps } from './TextProps';
import type { TextProps } from './TextProps';

const systemPropsMap = systemProps
  .filter(props => !props.disabled)
  .reduce((acc, props) => {
    acc[props.propName] = props;

    return acc;
  }, {} as Record<string, SystemProp>);

const interpolation = (props: TextProps, theme: CurrentTheme): Record<string, any>[] => {
  const styles = Object.keys(props).reduce((acc, propName) => {
    const systemProp = systemPropsMap[propName];

    if (!systemProp) {
      return acc;
    }

    const nextProps = systemProp((props as any)[propName], theme, props => interpolation(props, theme)[0]);

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

export const Text: FC<TextProps> = forwardRef<unknown, TextProps & { style?: any }>(({ children, ...props }, ref) => {
  const { theme } = useCurrentTheme();
  const { breakpointIndex } = useResponsiveValue();

  const [systemProps, restProps] = useMemo(() => {
    const systemProps: Record<string, any> = {
      color: 'onColor',
      textAlign: 'left',
    };
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

  const { props: p, ...style } = useMemo(
    () => StyleSheet.flatten([props.style, ...styles.filter((_, index) => breakpointIndex >= index)]),
    [breakpointIndex, props.style, styles]
  );

  return (
    <RNText
      ref={ref}
      children={typeof children === 'string' ? nl2br(children) : children}
      {...restProps}
      {...p}
      style={[style, restProps['style']]}
    />
  );
});

Text.displayName = 'Text';
