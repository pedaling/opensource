import type { ReactNode } from 'react';
import type { DependencyName } from '../ConfigProvider';
import { withVariation } from '../withVariation';

export type ExternalComponentProps<Name extends DependencyName> = {
  ref?: any;
  name: Name;
  children?: ReactNode;
};

export const withExternalComponentVariation =
  withVariation<ExternalComponentProps<DependencyName>>('ExternalComponent')();
