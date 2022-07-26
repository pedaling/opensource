import type { ComponentType, Ref } from 'react';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps } from '../props';
import { systemPropNames } from '../props';

export type BoxProps<
  BaseComponent extends ComponentType | unknown = unknown,
  ElementName extends keyof JSX.IntrinsicElements = 'div',
  ElementProps extends JSX.IntrinsicElements[ElementName] = JSX.IntrinsicElements[ElementName]
> = Omit<
  BaseComponent extends ComponentType<infer BaseComponentProps> ? BaseComponentProps : ElementProps,
  keyof SystemProps
> &
  SystemProps & {
    as?: ElementName;
    base?: BaseComponent;
    id?: string;
    ref?: Ref<BaseComponent extends abstract new (...args: any) => any ? InstanceType<BaseComponent> : HTMLElement>;
  };

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
