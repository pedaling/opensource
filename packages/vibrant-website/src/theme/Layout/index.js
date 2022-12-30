import React from 'react';
import Layout from '@theme-original/Layout';
import { VibrantProviderWrapper } from '../../components/VibrantProviderWrapper';
import { GlobalStyle } from '../../css/custom';

export default function LayoutWrapper(props) {
  const { children } = props;
  return (
    <Layout>
      <VibrantProviderWrapper>
        <GlobalStyle />
        {children}
      </VibrantProviderWrapper>
    </Layout>
  );
}
