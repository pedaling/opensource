import { useMemo } from 'react';
import { Box, useSafeArea } from '@vibrant-ui/core';
import { withSafeAreaViewVariation } from './SafeAreaViewProps';

export const SafeAreaView = withSafeAreaViewVariation(
  ({
    mode = 'margin',
    edges = ['top', 'left', 'right', 'bottom'],
    width = '100%',
    height = '100%',
    minInsets = { bottom: 0, left: 0, right: 0, top: 0 },
    children,
    ...restProps
  }) => {
    const { generateStyle } = useSafeArea();

    const style = useMemo(() => {
      const generatedStyle = generateStyle({
        edges,
        minInsets,
      });

      return {
        pt: generatedStyle.top,
        pl: generatedStyle.left,
        pr: generatedStyle.right,
        pb: generatedStyle.bottom,
      };
    }, [edges, generateStyle, minInsets]);

    return (
      <Box width={width} height={height} {...(mode === 'margin' && style)}>
        <Box
          width={width === 'auto' ? 'auto' : '100%'}
          height={height === 'auto' ? 'auto' : '100%'}
          {...(mode === 'padding' && style)}
          {...restProps}
        >
          {children}
        </Box>
      </Box>
    );
  }
);
