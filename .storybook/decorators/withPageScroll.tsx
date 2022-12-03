import type { DecoratorFn } from '@storybook/react';
import { PageScroll } from '@vibrant-ui/core';

export const withPageScroll: DecoratorFn = StoryComponent => (
  <PageScroll>
    <StoryComponent />
  </PageScroll>
);
