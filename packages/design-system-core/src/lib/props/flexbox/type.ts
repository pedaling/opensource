import type { ResponsiveValue } from '../../types';

export type FlexboxProps = {
  flex?: ResponsiveValue<string | number>;
  flexGrow?: ResponsiveValue<string | number>;
  flexShrink?: ResponsiveValue<string | number>;
  flexBasis?: ResponsiveValue<string | number>;
  flexDirection?: ResponsiveValue<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: ResponsiveValue<'nowrap' | 'wrap' | 'wrap-reverse'>;
  alignContent?: ResponsiveValue<
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start'
    | 'baseline'
    | 'normal'
  >;
  alignItems?: ResponsiveValue<
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'baseline'
    | 'normal'
    | 'stretch'
  >;
  alignSelf?: ResponsiveValue<
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'auto'
    | 'baseline'
    | 'normal'
    | 'stretch'
  >;
  justifyContent?: ResponsiveValue<
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start'
    | 'left'
    | 'normal'
    | 'right'
  >;
  justifyItems?: ResponsiveValue<
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'baseline'
    | 'left'
    | 'legacy'
    | 'normal'
    | 'right'
    | 'stretch'
  >;
  justifySelf?: ResponsiveValue<
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'auto'
    | 'baseline'
    | 'left'
    | 'normal'
    | 'right'
    | 'stretch'
  >;
  order?: ResponsiveValue<number>;
};
