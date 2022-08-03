import type { ComponentType, Ref } from 'react';
import type { DistributiveOmit } from '@vibrant-ui/utils';
import type { ReactElementChild } from '../../types';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type { SystemProps } from '../props';
import { systemPropNames } from '../props';

export type BoxProps<
  BaseComponent extends ComponentType | undefined = undefined,
  ElementName extends keyof JSX.IntrinsicElements | undefined = undefined
> = DistributiveOmit<
  BaseComponent extends ComponentType<infer BaseComponentProps>
    ? BaseComponentProps
    : ElementName extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[ElementName]
    : Record<never, never>,
  keyof SystemProps
> &
  SystemProps & {
    as?: ElementName;
    base?: BaseComponent;
    id?: string;
    ref?: Ref<BaseComponent extends abstract new (...args: any) => any ? InstanceType<BaseComponent> : HTMLElement>;
    children?: ReactElementChild | ReactElementChild[];
  };

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
