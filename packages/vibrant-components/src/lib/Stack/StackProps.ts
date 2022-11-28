import type { RefObject } from 'react';
import type {
  BoxProps,
  DisplaySystemProps,
  FlexboxSystemProps,
  InteractionSystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  ReactElementChildren,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

type SemanticTagName = 'article' | 'aside' | 'footer' | 'header' | 'li' | 'nav' | 'ol' | 'section' | 'ul';

export type Alignment = 'center' | 'end' | 'space-between' | 'start' | 'stretch';

type AlignmentStyle = 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'stretch';

export type StackProps = DisplaySystemProps &
  Omit<FlexboxSystemProps, 'alignItems' | 'justifyContent'> &
  OverflowSystemProps &
  SizingSystemProps &
  InteractionSystemProps &
  PositionSystemProps &
  SpacingSystemProps & {
    as?: SemanticTagName | 'div' | 'label' | 'span';
    id?: string;
    direction: ResponsiveValue<'horizontal' | 'vertical'>;
    ref?: RefObject<HTMLElement>;
    spacing?: ResponsiveValue<number>;
    children?: ReactElementChildren;
    alignHorizontal?: ResponsiveValue<Alignment>;
    alignVertical?: ResponsiveValue<Alignment>;
    arialLabel?: string;
  } & Pick<BoxProps, 'onLayout'>;

const CrossAlignmentMap: { [key in Alignment]: Exclude<AlignmentStyle, 'space-between'> } = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-between': 'flex-start',
  stretch: 'stretch',
};

const MainAlignmentMap: { [key in Alignment]: Exclude<AlignmentStyle, 'stretch'> } = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-between': 'space-between',
  stretch: 'flex-start',
};

export const withStackVariation = withVariation<StackProps>('Stack')(
  propVariant({
    props: [
      {
        name: 'direction',
        responsive: true,
        keep: true,
      },
    ],
    variants: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'direction',
        keep: true,
        responsive: true,
      },
      {
        name: 'alignHorizontal',
        responsive: true,
      },
      {
        name: 'alignVertical',
        responsive: true,
      },
    ],
    variants: ({ direction, alignHorizontal, alignVertical }) => {
      if (direction === 'horizontal') {
        return {
          justifyContent: MainAlignmentMap[alignHorizontal ?? 'start'],
          alignItems: CrossAlignmentMap[alignVertical ?? 'stretch'],
        };
      }

      return {
        justifyContent: MainAlignmentMap[alignVertical ?? 'start'],
        alignItems: CrossAlignmentMap[alignHorizontal ?? 'stretch'],
      };
    },
  }),
  propVariant({
    props: [
      {
        name: 'direction',
        responsive: true,
      },
      {
        name: 'spacing',
        responsive: true,
        keep: true,
      },
    ],
    variants: ({ direction, spacing }) => {
      if (!spacing) {
        return {
          spaceWidth: 0,
          spaceHeight: 0,
        };
      }

      if (direction === 'horizontal') {
        return {
          spaceWidth: spacing,
          spaceHeight: 0,
        };
      }

      return {
        spaceWidth: 0,
        spaceHeight: spacing,
      };
    },
  })
);
