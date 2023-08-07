import { createSystemProp } from '../../createSystemProp';

const borderWidthProp = createSystemProp({
  property: 'borderWidth',
});

const borderStyleProp = createSystemProp({
  property: 'borderStyle',
});

const borderColorProp = createSystemProp({
  property: 'borderColor',
  scale: 'colors',
});

const borderTopWidthProp = createSystemProp({
  property: 'borderTopWidth',
});

const borderTopStyleProp = createSystemProp({
  property: 'borderTopStyle',
});

const borderTopColorProp = createSystemProp({
  property: 'borderTopColor',
  scale: 'colors',
});

const borderRightWidthProp = createSystemProp({
  property: 'borderRightWidth',
});

const borderRightStyleProp = createSystemProp({
  property: 'borderRightStyle',
});

const borderRightColorProp = createSystemProp({
  property: 'borderRightColor',
  scale: 'colors',
});

const borderBottomWidthProp = createSystemProp({
  property: 'borderBottomWidth',
});

const borderBottomStyleProp = createSystemProp({
  property: 'borderBottomStyle',
});

const borderBottomColorProp = createSystemProp({
  property: 'borderBottomColor',
  scale: 'colors',
});

const borderLeftWidthProp = createSystemProp({
  property: 'borderLeftWidth',
});

const borderLeftStyleProp = createSystemProp({
  property: 'borderLeftStyle',
});

const borderLeftColorProp = createSystemProp({
  property: 'borderLeftColor',
  scale: 'colors',
});

const borderRadiusProp = createSystemProp({
  property: 'borderRadius',
});

const borderTopLeftRadiusProp = createSystemProp({
  property: 'borderTopLeftRadius',
});

const borderTopRightRadiusProp = createSystemProp({
  property: 'borderTopRightRadius',
});

const borderBottomLeftRadiusProp = createSystemProp({
  property: 'borderBottomLeftRadius',
});

const borderBottomRightRadiusProp = createSystemProp({
  property: 'borderBottomRightRadius',
});

const borderTopLeftRadiusLevelProp = createSystemProp({
  property: 'borderTopLeftRadiusLevel',
  styleProperty: 'borderTopLeftRadius',
  scale: 'borderRadius',
});

const borderTopRightRadiusLevelProp = createSystemProp({
  property: 'borderTopRightRadiusLevel',
  styleProperty: 'borderTopRightRadius',
  scale: 'borderRadius',
});

const borderBottomLeftRadiusLevelProp = createSystemProp({
  property: 'borderBottomLeftRadiusLevel',
  styleProperty: 'borderBottomLeftRadius',
  scale: 'borderRadius',
});

const borderBottomRightRadiusLevelProp = createSystemProp({
  property: 'borderBottomRightRadiusLevel',
  styleProperty: 'borderBottomRightRadius',
  scale: 'borderRadius',
});

const roundedProp = createSystemProp({
  property: 'rounded',
  styleProperty: 'borderRadius',
  scale: 'borderRadius',
});

const roundedTopLeftProp = createSystemProp({
  property: 'roundedTopLeft',
  styleProperty: 'borderTopLeftRadius',
  scale: 'borderRadius',
});

const roundedTopRightProp = createSystemProp({
  property: 'roundedTopRight',
  styleProperty: 'borderTopRightRadius',
  scale: 'borderRadius',
});

const roundedBottomLeftProp = createSystemProp({
  property: 'roundedBottomLeft',
  styleProperty: 'borderBottomLeftRadius',
  scale: 'borderRadius',
});

const roundedBottomRightProp = createSystemProp({
  property: 'roundedBottomRight',
  styleProperty: 'borderBottomRightRadius',
  scale: 'borderRadius',
});

const borderCollapseProp = createSystemProp({
  property: 'borderCollapse',
  disabled: true,
});

const outlineWidthProp = createSystemProp({
  property: 'outlineWidth',
});

const outlineStyleProp = createSystemProp({
  property: 'outlineStyle',
});

const outlineColorProp = createSystemProp({
  property: 'outlineColor',
  scale: 'colors',
});

const outlineOffsetProp = createSystemProp({
  property: 'outlineOffset',
});

export const borderSystemProps = [
  borderWidthProp,
  borderStyleProp,
  borderColorProp,
  borderTopWidthProp,
  borderTopStyleProp,
  borderTopColorProp,
  borderRightWidthProp,
  borderRightStyleProp,
  borderRightColorProp,
  borderBottomWidthProp,
  borderBottomStyleProp,
  borderBottomColorProp,
  borderLeftWidthProp,
  borderLeftStyleProp,
  borderLeftColorProp,
  borderRadiusProp,
  borderTopLeftRadiusProp,
  borderTopRightRadiusProp,
  borderBottomLeftRadiusProp,
  borderBottomRightRadiusProp,
  borderTopLeftRadiusLevelProp,
  borderTopRightRadiusLevelProp,
  borderBottomLeftRadiusLevelProp,
  borderBottomRightRadiusLevelProp,
  roundedProp,
  roundedTopLeftProp,
  roundedTopRightProp,
  roundedBottomLeftProp,
  roundedBottomRightProp,
  borderCollapseProp,
  outlineWidthProp,
  outlineStyleProp,
  outlineColorProp,
  outlineOffsetProp,
];
