import type * as ReactSpringModule from 'react-spring';
import { useConfig } from '@vibrant-ui/core';

export const useReactSpring = (): typeof ReactSpringModule => {
  const {
    dependencies: { reactSpringModule },
  } = useConfig();
  const module = reactSpringModule;

  if (!module) {
    throw new Error('ReactSpring dependency not provided');
  }

  return module;
};
