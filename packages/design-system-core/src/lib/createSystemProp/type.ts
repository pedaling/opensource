import type { Theme } from '../types';

export type InterpolationFn = (props: Record<string, any>) => Record<string, any>;

export type SystemPropConfig = {
  property: string;
  styleProperty?: string;
  scale?: keyof Pick<Theme, 'colors' | 'space' | 'opacity'>;
  disabled?: boolean;
  transform?: (value: any) => Record<string, any> | undefined;
};

export type SystemProp = {
  (props: Record<string, any>): Record<string, any>;
  propName: string;
  disabled: boolean;
};
