import type { DecoratorFn } from '@storybook/react';
import { ToastProvider } from "@vibrant-ui/components";

export const withToastProvider: DecoratorFn = storyFn => (
    <ToastProvider>
        {storyFn()}
    </ToastProvider>
)