import type { ComponentType } from 'react';
import type { ExternalComponentName } from '../DependencyProvider';
import { useDependency } from '../DependencyProvider';

type ExternalComponentProps = {
  name: ExternalComponentName;
};

export const ExternalComponent = ({ name, ...restProps }: ExternalComponentProps) => {
  const { dependencies } = useDependency();

  const Component = dependencies[name] as ComponentType<any>;

  if (Component) {
    return <Component {...restProps} />;
  }

  return null;
};
