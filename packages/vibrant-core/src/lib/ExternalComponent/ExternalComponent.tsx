import type { ComponentType, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { DependencyName } from '../ConfigProvider';
import { useConfig } from '../ConfigProvider';

type ExternalComponentProps = {
  name: DependencyName;
  children?: ReactNode;
};

export const ExternalComponent: FC<ExternalComponentProps> = forwardRef(({ name, ...restProps }, ref) => {
  const { dependencies } = useConfig();

  const Component = dependencies[name] as ComponentType<any>;

  if (Component) {
    return <Component ref={ref} {...restProps} />;
  }

  return null;
});

ExternalComponent.displayName = 'ExternalComponent';
