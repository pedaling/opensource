import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, VStack } from '@vibrant-ui/components';
import { VibrantHeroBanner } from '../libs/VibrantHeroBanner';
import { VibrantListSection } from '../libs/VibrantListSection/VibrantListSection';

const names = ['루', '앤', '오션', '히로', '미아', '제다이', '제리안', '랄프', '녹', '볼더'];

export const VibrantApp = () => (
  <SafeAreaView>
    <ScrollView>
      <VStack spacing={12} height={400}>
        <VibrantHeroBanner />
      </VStack>
      <VStack spacing={20}>
        {names.map(name => (
          <VibrantListSection key={name} title={`${name} 위한 추천 클래스`} />
        ))}
      </VStack>
    </ScrollView>
  </SafeAreaView>
);
