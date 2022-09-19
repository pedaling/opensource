import React from 'react';
import * as ReactSpring from '@react-spring/web';
import Layout from '@theme-original/Layout';
import { VibrantProvider } from '@vibrant-ui/core';

export default function LayoutWrapper(props) {
  return (
    <VibrantProvider
      dependencies={{
        reactSpringModule: ReactSpring,
      }}
    >
      <Layout {...props} />
    </VibrantProvider>
  );
}
