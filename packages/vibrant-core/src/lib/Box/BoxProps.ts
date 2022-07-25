import type { ComponentType, ReactNode, Ref } from 'react';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps } from '../props';
import { systemPropNames } from '../props';

export type BoxProps<
  BaseComponent extends ComponentType | unknown = unknown,
  ElementName extends keyof JSX.IntrinsicElements = 'div',
  ElementProps extends JSX.IntrinsicElements[ElementName] = JSX.IntrinsicElements[ElementName]
> = BaseComponent & SystemProps extends ComponentType<infer BaseComponentProps>
  ? BaseComponentProps
  : Omit<ElementProps, keyof SystemProps> & {
      as?: ElementName;
      base?: BaseComponent;
      id?: string;
      ref?: Ref<BaseComponent extends abstract new (...args: any) => any ? InstanceType<BaseComponent> : HTMLElement>;
      children?: ReactNode;
    };

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
