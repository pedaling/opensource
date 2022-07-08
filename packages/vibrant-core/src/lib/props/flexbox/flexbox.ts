import { createSystemProp } from '../../createSystemProp';

const flexProp = createSystemProp({
  property: 'flex',
});

const flexGrowProp = createSystemProp({
  property: 'flexGrow',
});

const flexShrinkProp = createSystemProp({
  property: 'flexShrink',
});

const flexBasisProp = createSystemProp({
  property: 'flexBasis',
});

const flexDirectionProp = createSystemProp({
  property: 'flexDirection',
});

const flexWrapProp = createSystemProp({
  property: 'flexWrap',
});

const alignContentProp = createSystemProp({
  property: 'alignContent',
});

const alignItemsProp = createSystemProp({
  property: 'alignItems',
});

const alignSelfProp = createSystemProp({
  property: 'alignSelf',
});

const justifyContentProp = createSystemProp({
  property: 'justifyContent',
});

const justifyItemsProp = createSystemProp({
  property: 'justifyItems',
});

const justifySelfProp = createSystemProp({
  property: 'justifySelf',
});

const orderProp = createSystemProp({
  property: 'order',
});

const rowGapProp = createSystemProp({
  property: 'rowGap',
});

export const flexboxProps = [
  flexProp,
  flexGrowProp,
  flexShrinkProp,
  flexBasisProp,
  flexDirectionProp,
  flexWrapProp,
  alignContentProp,
  alignItemsProp,
  alignSelfProp,
  justifyContentProp,
  justifyItemsProp,
  justifySelfProp,
  orderProp,
  rowGapProp,
];
