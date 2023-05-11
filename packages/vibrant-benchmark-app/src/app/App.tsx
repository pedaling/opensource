/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { VibrantProvider } from '@vibrant-ui/core';
import { NativeApp } from './NativeApp';
import { VibrantApp } from './VibrantApp';

//Update this constant to inspect vibrant or native app
const IS_NATIVE = true;

export const App = () => (
  <>
    {IS_NATIVE ? (
      <NativeApp />
    ) : (
      <VibrantProvider>
        <VibrantApp />
      </VibrantProvider>
    )}
  </>
);

export default App;
