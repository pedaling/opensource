import type { ComponentType, Ref } from 'react';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps } from '../props';
import { systemPropNames } from '../props';
import type { ReactElementChild } from '../types';

export type BoxProps<
  BaseComponent extends ComponentType | undefined = undefined,
  ElementName extends keyof JSX.IntrinsicElements | undefined = undefined
> = (BaseComponent extends ComponentType<infer BaseComponentProps>
  ? BaseComponentProps
  : ElementName extends keyof JSX.IntrinsicElements
  ? Omit<JSX.IntrinsicElements[ElementName], keyof SystemProps>
  : Record<never, never>) &
  SystemProps & {
    as?: ElementName;
    base?: BaseComponent;
    id?: string;
    ref?: Ref<BaseComponent extends abstract new (...args: any) => any ? InstanceType<BaseComponent> : HTMLElement>;
    children?: ReactElementChild | ReactElementChild[];
  };

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
