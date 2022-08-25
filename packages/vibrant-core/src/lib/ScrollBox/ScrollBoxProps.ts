import type { Ref } from 'react';
import type { ReactElementChild } from '../../types';
import { isNative } from '../isNative';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  FlexboxSystemProps,
  InteractionSystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  TransformSystemProps,
} from '../props';
import { propVariant } from '../propVariant';
import { withVariation } from '../withVariation';

type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  FlexboxSystemProps &
  InteractionSystemProps &
  PositionSystemProps &
  SizingSystemProps &
  SpacingSystemProps &
  TransformSystemProps;

export type ScrollBoxElements =
  | 'article'
  | 'aside'
  | 'div'
  | 'footer'
  | 'header'
  | 'li'
  | 'main'
  | 'nav'
  | 'section'
  | 'span'
  | 'ul';

export type ScrollBoxProps = {
  ref?: Ref<any>;
  as?: ScrollBoxElements;
  alwaysShowScroll?: boolean;
  hideScroll?: boolean;
  children: ReactElementChild | ReactElementChild[];
} & SystemProps;

export const withScrollBoxVariation = withVariation<ScrollBoxProps>('ScrollBox')(
  propVariant({
    props: [
      {
        name: 'alwaysShowScroll',
        default: false,
        keep: true,
      },
    ],
    variants: {
      true: {
        overflow: isNative ? undefined : ('scroll' as OverflowSystemProps['overflow']),
      },
      false: {
        overflow: isNative ? undefined : ('auto' as OverflowSystemProps['overflow']),
      },
    },
  })
);
