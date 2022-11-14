import type { DecoratorFn } from '@storybook/react';
import { PageScroll } from "@vibrant-ui/core";

export const withPageScroll: DecoratorFn = StoryFn => (
    <PageScroll>
        <StoryFn/>
    </PageScroll>
);