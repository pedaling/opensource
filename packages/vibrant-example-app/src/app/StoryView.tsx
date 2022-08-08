import type { FC } from 'react';
import { createElement } from 'react';
import { storyNameFromExport } from '@storybook/csf';
import { Title } from '@vibrant-ui/components';
import { stories } from '../stories';

type ComponentMeta = {
  title?: string;
  args?: Record<string, any>;
};

export type StoryViewProps = {
  componentName: string;
  storyName: string;
  componentProps: Record<string, any>;
};

const componentStories = stories.reduce((prev, story) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  const storyMeta = story.default as ComponentMeta;
  const { default: _, ...stories } = story;

  if (!storyMeta.title) {
    return prev;
  }

  return {
    ...prev,
    [storyMeta.title]: Object.keys(stories).reduce(
      (prev, curr) => ({
        ...prev,
        [storyNameFromExport(curr)]: ({ children, ...restProps }: any) =>
          createElement(stories[curr], { ...(storyMeta.args ?? {}), ...restProps }, children),
      }),
      {}
    ),
  };
}, {}) as Record<string, Record<string, FC>>;

export const StoryView: FC<StoryViewProps> = ({ componentName, storyName, componentProps }) => {
  const StoryComponent = componentStories[componentName]?.[storyName];

  if (!StoryComponent) {
    return <Title level={2}>Story Not Found</Title>;
  }

  return <StoryComponent {...componentProps} />;
};
