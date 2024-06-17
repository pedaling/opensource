import { baseTheme } from '@vibrant-ui/theme';

const themeTypography = baseTheme.typography;

type KindVariation = {
  kind: 'primary' | 'secondary' | 'tertiary';
  backgroundColor: string;
  contentColor: string;
  hoverOpacity: number;
  focusedOpacity: number;
  pressedOpacity: number;
};

type SizeVariation = {
  size: 'lg' | 'md' | 'sm' | 'xl';
  iconSize?: number;
  fontSize?: number | string;
  lineHeight?: number | string;
  fontWeight?: string;
  spinnerSize?: number;
  height?: number;
  paddingLeft?: string;
  paddingRight?: string;
};

export const SizeVariations: SizeVariation[] = [
  {
    size: 'xl',
    iconSize: 20,
    height: 50,
    spinnerSize: 24,
    fontSize: themeTypography.body1.fontSize,
    lineHeight: themeTypography.body1.lineHeight,
    fontWeight: baseTheme.typographyWeight.bold.fontWeight,
    paddingLeft: '14px',
    paddingRight: '14px',
  },
  {
    size: 'lg',
    iconSize: 16,
    height: 44,
    spinnerSize: 24,
    fontSize: themeTypography.body2.fontSize,
    lineHeight: themeTypography.body2.lineHeight,
    fontWeight: baseTheme.typographyWeight.bold.fontWeight,
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  {
    size: 'md',
    iconSize: 16,
    height: 38,
    spinnerSize: 24,
    fontSize: themeTypography.body2.fontSize,
    lineHeight: themeTypography.body2.lineHeight,
    fontWeight: baseTheme.typographyWeight.medium.fontWeight,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  {
    size: 'sm',
    iconSize: 16,
    height: 30,
    spinnerSize: 16,
    fontSize: themeTypography.body4.fontSize,
    lineHeight: themeTypography.body4.lineHeight,
    fontWeight: baseTheme.typographyWeight.medium.fontWeight,
    paddingLeft: '8px',
    paddingRight: '8px',
  },
];

export const LightThemeKindVariations: KindVariation[] = [
  {
    kind: 'primary',
    backgroundColor: '#ff5d00',
    contentColor: '#ffffff',
    hoverOpacity: 0.025,
    focusedOpacity: 0.075,
    pressedOpacity: 0.075,
  },
  {
    kind: 'secondary',
    backgroundColor: '#202020',
    contentColor: '#f3f3f3',
    hoverOpacity: 0.025,
    focusedOpacity: 0.075,
    pressedOpacity: 0.075,
  },
  {
    kind: 'tertiary',
    backgroundColor: '#00000008',
    contentColor: '#0c0c0c',
    hoverOpacity: 0.025,
    focusedOpacity: 0.075,
    pressedOpacity: 0.075,
  },
];

export const DarkThemeKindVariations: KindVariation[] = [
  {
    kind: 'primary',
    backgroundColor: '#ff5d00',
    contentColor: '#ffffff',
    hoverOpacity: 0.75,
    focusedOpacity: 0.125,
    pressedOpacity: 0.125,
  },
  {
    kind: 'secondary',
    backgroundColor: '#f3f3f3',
    contentColor: '#0c0c0c',
    hoverOpacity: 0.75,
    focusedOpacity: 0.125,
    pressedOpacity: 0.125,
  },
  {
    kind: 'tertiary',
    backgroundColor: '#ffffff0d',
    contentColor: '#f3f3f3',
    hoverOpacity: 0.75,
    focusedOpacity: 0.125,
    pressedOpacity: 0.125,
  },
];
