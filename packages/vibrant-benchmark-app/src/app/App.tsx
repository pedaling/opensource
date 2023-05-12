/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Paper } from '@vibrant-ui/components';
import { VibrantProvider } from '@vibrant-ui/core';
import { NativeApp } from './NativeApp';
import { VibrantApp } from './VibrantApp';

// Update this constant to inspect vibrant or native app
const IS_NATIVE = false;

export const App = () => (
  <>
    {IS_NATIVE ? (
      <NativeApp />
    ) : (
      <VibrantProvider theme={{ mode: 'dark' }}>
        <Paper backgroundColor="background">
          <VibrantApp />
        </Paper>
      </VibrantProvider>
    )}
  </>
);

export default App;
