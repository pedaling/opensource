/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export const NativeApp = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.textLg}>Hello there,</Text>
          <Text style={[styles.textXl, styles.appTitleText]} testID="heading">
            Native APP
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  textLg: {
    fontSize: 24,
  },
  textXl: {
    fontSize: 48,
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
});
