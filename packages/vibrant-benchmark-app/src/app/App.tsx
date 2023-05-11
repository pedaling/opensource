/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NativeApp } from './NativeApp';
import { VibrantApp } from './VibrantApp';

//Update this constant to inspect vibrant or native app
const IS_NATIVE = true;

export const App = () => <>{IS_NATIVE ? <NativeApp /> : <VibrantApp />}</>;

export default App;
