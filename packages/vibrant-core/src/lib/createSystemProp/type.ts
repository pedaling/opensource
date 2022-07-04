import type { Theme } from '@vibrant-ui/theme';
import type { Path } from '@vibrant-ui/utils';

export type SystemPropConfig = {
  property: string;
  styleProperty?: string;
  scale?: Extract<Path<Theme>, 'colors' | 'opacity' | 'typography' | 'typographyWeight'>;
  disabled?: boolean;
  transform?: (value: any) => Record<string, any> | undefined;
};

export type SystemProp = {
  (props: Record<string, any>): Record<string, any>;
  propName: string;
  disabled: boolean;
};
