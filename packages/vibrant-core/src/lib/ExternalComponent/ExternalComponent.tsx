import type { ComponentType } from 'react';
import type { Dependencies, DependencyName } from '../ConfigProvider';
import { useConfig } from '../ConfigProvider';
import type { ExternalComponentProps } from './ExternalComponentProps';
import { withExternalComponentVariation } from './ExternalComponentProps';

export const ExternalComponent = withExternalComponentVariation(({ innerRef, name, ...restProps }) => {
  const { dependencies } = useConfig();

  const Component = dependencies[name] as ComponentType<any>;

  if (Component) {
    return <Component ref={innerRef} {...restProps} />;
  }

  return null;
}) as <Name extends DependencyName>(
  props: ExternalComponentProps<Name> &
    (Required<Dependencies>[Name] extends ComponentType<infer Props> ? Props : Record<never, never>)
) => JSX.Element;
