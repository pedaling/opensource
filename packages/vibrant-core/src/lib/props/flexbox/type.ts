import type { ResponsiveValue } from '../../../types';

export type FlexboxSystemProps = {
  flex?: ResponsiveValue<number>;
  flexGrow?: ResponsiveValue<number>;
  flexShrink?: ResponsiveValue<number>;
  flexBasis?: ResponsiveValue<number | string>;
  flexDirection?: ResponsiveValue<'column-reverse' | 'column' | 'row-reverse' | 'row'>;
  flexWrap?: ResponsiveValue<'nowrap' | 'wrap-reverse' | 'wrap'>;
  alignContent?: ResponsiveValue<
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'normal'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
  >;
  alignItems?: ResponsiveValue<
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'normal'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'stretch'
  >;
  alignSelf?: ResponsiveValue<
    | 'auto'
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'normal'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'stretch'
  >;
  justifyContent?: ResponsiveValue<
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'left'
    | 'normal'
    | 'right'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
  >;
  justifyItems?: ResponsiveValue<
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'left'
    | 'legacy'
    | 'normal'
    | 'right'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'stretch'
  >;
  justifySelf?: ResponsiveValue<
    | 'auto'
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'left'
    | 'normal'
    | 'right'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'stretch'
  >;
  order?: ResponsiveValue<number>;
  rowGap?: ResponsiveValue<number>;
  columnGap?: ResponsiveValue<number>;
};
