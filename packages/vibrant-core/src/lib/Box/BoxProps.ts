import type { Ref, ComponentType, ReactNode } from 'react';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps } from '../props';
import { propNames } from '../props';

export type BoxProps<
  BaseComponent extends ComponentType | unknown = unknown,
  ElementName extends keyof JSX.IntrinsicElements = 'div',
  ElementProps extends JSX.IntrinsicElements[ElementName] = JSX.IntrinsicElements[ElementName]
> = (BaseComponent extends ComponentType<infer BaseComponentProps>
  ? BaseComponentProps
  : Omit<ElementProps, keyof SystemProps>) &
  SystemProps & {
    as?: ElementName;
    base?: BaseComponent;
    id?: string;
    ref?: Ref<BaseComponent extends abstract new (...args: any) => any ? InstanceType<BaseComponent> : HTMLElement>;
    children?: ReactNode;
  };

export const shouldForwardProp = createShouldForwardProp(propNames);
