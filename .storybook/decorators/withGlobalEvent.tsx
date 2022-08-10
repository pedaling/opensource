import { GlobalEventProvider } from '@vibrant-ui/core';

export function withGlobalEvent(storyFn) {
  return <GlobalEventProvider>{storyFn()}</GlobalEventProvider>;
}
