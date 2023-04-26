import type { FC } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';

export const NativeBreakpointProvider: FC<{ children: ReactElementChild }> = ({ children }) => <>{children}</>;

export const useNativeBreakpoint = (_: { root: boolean }) => 0;
