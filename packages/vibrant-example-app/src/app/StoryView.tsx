import type { FC } from 'react';
import { createElement } from 'react';
import { storyNameFromExport } from '@storybook/csf';
import { Box } from '@vibrant-ui/core';
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

const parseProps = (props: any): any =>
  Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      if (typeof value === 'string' && value.length === 24 && value[10] === 'T') {
        return [key, new Date(value)];
      }

      if (typeof value === 'object' && Array.isArray(value)) {
        return [key, value.map(v => (typeof v === 'object' && v !== null ? parseProps(v) : v))];
      }

      if (typeof value === 'object' && value !== null) {
        return [key, parseProps(value)];
      }

      return [key, value];
    })
  );

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
          createElement(
            stories[curr],
            parseProps({ ...(storyMeta.args ?? {}), ...(stories[curr].args ?? {}), ...restProps }),
            children
          ),
      }),
      {}
    ),
  };
}, {}) as Record<string, Record<string, FC>>;

export const StoryView: FC<StoryViewProps> = ({ componentName, storyName, componentProps }) => {
  const StoryComponent = componentStories[componentName]?.[storyName];

  if (!StoryComponent) {
    return <Box width={[200, 300]} height={200} backgroundColor="primary" />;
  }

  return <StoryComponent {...componentProps} />;
};
