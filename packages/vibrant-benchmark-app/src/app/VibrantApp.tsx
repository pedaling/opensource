import React from 'react';
import { ContentArea, SafeAreaView, Title, VStack } from '@vibrant-ui/components';

export const VibrantApp = () => (
  <ContentArea>
    <SafeAreaView>
      <VStack>
        <Title level={3}>Vibrant App</Title>
      </VStack>
    </SafeAreaView>
  </ContentArea>
);
