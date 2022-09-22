import React from 'react';
import Layout from '@theme-original/Layout';
import { VibrantProviderWrapper } from '../../components/VibrantProviderWrapper';

export default function LayoutWrapper(props) {
  const { children } = props;
  return (
    <Layout>
      <VibrantProviderWrapper>{children}</VibrantProviderWrapper>
    </Layout>
  );
}
