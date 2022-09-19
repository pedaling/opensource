import React from 'react';
import * as VibrantComponents from '@vibrant-ui/components';
import * as VibrantCore from '@vibrant-ui/core';
import * as VibrantMotion from '@vibrant-ui/motion';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...VibrantComponents,
  ...VibrantCore,
  ...VibrantMotion,
};
export default ReactLiveScope;
