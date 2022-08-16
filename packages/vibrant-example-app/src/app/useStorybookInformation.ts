import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import type { StoryViewProps } from './StoryView';

type Story = StoryViewProps;

const getStoryFromUrl = (url: string | null): Story | null => {
  if (!url) {
    return null;
  }

  const { queryParams } = Linking.parse(url);

  return {
    componentName: queryParams?.component?.toString() ?? '',
    storyName: queryParams?.story?.toString() ?? '',
    componentProps: JSON.parse(queryParams?.props?.toString() ?? '{}'),
  };
};

export const useStorybookInformation = () => {
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    if (story) {
      return;
    }

    Linking.getInitialURL().then(getStoryFromUrl).then(setStory);
  }, [story]);

  useEffect(() => {
    const listener = Linking.addEventListener('url', event => setStory(getStoryFromUrl(event.url)));

    return () => {
      listener.remove();
    };
  }, []);

  return { story };
};
