/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { baseTheme } from '@vibrant-ui/theme';
import { NativeHeroBanner } from '../libs/NativeHeroBanner';
import { NativeSection } from '../libs/NativeSection';

const names = ['루', '앤', '오션', '히로', '미아', '제다이', '제리안', '랄프', '녹', '볼더'];

export const NativeApp = () => {
  const { width } = useWindowDimensions();

  const style = useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingHorizontal: 20,
          backgroundColor: baseTheme.colors.dark.background,
        },
        sectionSpacing: {
          marginTop: width < 640 ? 40 : 56,
        },
      }),
    [width]
  );

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <NativeHeroBanner />
        {names.map(name => (
          <View key={name} style={style.sectionSpacing}>
            <NativeSection title={`${name} 위한 추천 클래스`} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
