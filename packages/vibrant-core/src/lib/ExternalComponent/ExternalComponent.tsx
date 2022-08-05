import type { ComponentType, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { ExternalComponentName } from '../DependencyProvider';
import { useDependency } from '../DependencyProvider';

type ExternalComponentProps = {
  name: ExternalComponentName;
  children?: ReactNode;
};

export const ExternalComponent: FC<ExternalComponentProps> = forwardRef(({ name, ...restProps }, ref) => {
  const { dependencies } = useDependency();

  const Component = dependencies[name] as ComponentType<any>;

  if (Component) {
    return <Component ref={ref} {...restProps} />;
  }

  return null;
});

ExternalComponent.displayName = 'ExternalComponent';
