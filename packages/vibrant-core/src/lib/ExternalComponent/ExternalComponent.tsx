import type { ComponentType, ReactNode } from 'react';
import type { Dependencies, DependencyName } from '../ConfigProvider';
import { useConfig } from '../ConfigProvider';
import { withVariation } from '../withVariation';

type ExternalComponentProps<Name extends DependencyName> = {
  ref?: any;
  name: Name;
  children?: ReactNode;
};

const withExternalComponentVariation = withVariation<ExternalComponentProps<DependencyName>>('ExternalComponent')();

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
