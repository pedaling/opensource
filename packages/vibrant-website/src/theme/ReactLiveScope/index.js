import React from 'react';
import * as VibrantComponents from '@vibrant-ui/components';
import * as VibrantCore from '@vibrant-ui/core';
import * as VibrantIcon from '@vibrant-ui/icons';
import * as VibrantMotion from '@vibrant-ui/motion';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...VibrantComponents,
  ...VibrantCore,
  ...VibrantMotion,
  ...VibrantIcon,
};
export default ReactLiveScope;
