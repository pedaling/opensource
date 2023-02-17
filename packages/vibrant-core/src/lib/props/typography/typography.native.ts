import { convertRemToPixels } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';

const typographyProp = createSystemProp({
  property: 'typography',
  scale: 'typography',
  transform: value => ({
    ...value,
  }),
  shouldInterpolation: 'after',
});

const fontFamilyProp = createSystemProp({
  property: 'fontFamily',
});

const fontSizeProp = createSystemProp({
  property: 'fontSize',
  transform: value => ({ fontSize: convertRemToPixels(value) }),
});

const fontWeightProp = createSystemProp({
  property: 'fontWeight',
  scale: 'typographyWeight',
  transform: value => ({
    ...value,
  }),
});

const fontStyleProp = createSystemProp({
  property: 'fontStyle',
});

const lineHeightProp = createSystemProp({
  property: 'lineHeight',
  transform: value => ({ lineHeight: convertRemToPixels(value) }),
});

export const typographySystemProps = [
  typographyProp,
  fontFamilyProp,
  fontSizeProp,
  fontWeightProp,
  fontStyleProp,
  lineHeightProp,
];
