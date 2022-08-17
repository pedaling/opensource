import type { Ref } from 'react';
import type { DistributiveOmit } from '@vibrant-ui/utils';
import type { ReactElementChild, ReactTextChild } from '../../types';
import { createInterpolation } from '../createInterpolation';
import { createShouldForwardProp } from '../createShouldForwardProp';
import { injectTheme } from '../injectTheme';
import type { ColorSystemProps, DisplaySystemProps, TextSystemProps, TypographySystemProps } from '../props';
import { colorSystemProps, displaySystemProps, textSystemProps, typographySystemProps } from '../props';

type SystemProps = ColorSystemProps & DisplaySystemProps & TextSystemProps & TypographySystemProps;

export const systemProps = [...colorSystemProps, ...displaySystemProps, ...textSystemProps, ...typographySystemProps];

export const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled)
  .map(systemProp => systemProp.propName);

export type TextElements = 'br' | 'h1' | 'h2' | 'h3' | 'h5' | 'h6' | 'label' | 'p' | 'span';

export type TextProps<ElementName extends TextElements | undefined = undefined> = DistributiveOmit<
  ElementName extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[ElementName] : Record<never, never>,
  keyof SystemProps
> &
  SystemProps & {
    as?: ElementName;
    ref?: Ref<HTMLElement>;
    children?: ReactElementChild | ReactElementChild[] | ReactTextChild | ReactTextChild[];
  };

export const shouldForwardProp = createShouldForwardProp(systemPropNames);

export const interpolation = injectTheme(
  createInterpolation(systemProps, {
    display: 'flex',
    fontFamily: 'Pretendard',
    textAlign: 'left',
    color: 'onColor',
  })
);
