import type { ComponentType, FC, ReactNode } from 'react';
import type { ExternalComponentName } from '../DependencyProvider';
import { useDependency } from '../DependencyProvider';

type ExternalComponentProps = {
  name: ExternalComponentName;
  children?: ReactNode;
};

export const ExternalComponent: FC<ExternalComponentProps> = ({ name, ...restProps }) => {
  const { dependencies } = useDependency();

  const Component = dependencies[name] as ComponentType<any>;

  if (Component) {
    return <Component {...restProps} />;
  }

  return null;
};

ExternalComponent.displayName = 'ExternalComponent';
