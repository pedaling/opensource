import type { Theme } from '@vibrant-ui/theme';
import type { Path } from '@vibrant-ui/utils';

export type SystemPropThemeScale = Extract<Path<Theme>, 'colors' | 'opacity' | 'typography' | 'typographyWeight'>;

export type SystemPropConfig = {
  property: string;
  styleProperty?: string;
  scale?: SystemPropThemeScale;
  shouldInterpolation?: 'before' | 'after' | false;
  disabled?: boolean;
  transform?: (value: any) => Record<string, any> | undefined;
};

export type SystemProp = {
  (value: any, theme: Record<SystemPropThemeScale, any>, interpolation?: (props: any) => any): Record<string, any>[];
  propName: string;
  disabled: boolean;
};
