import { Box, useSafeArea } from '@vibrant-ui/core';
import { withSafeAreaViewVariation } from './SafeAreaViewProps';

export const SafeAreaView = withSafeAreaViewVariation(
  ({
    mode = 'margin',
    edges = { bottom: 0, left: 0, right: 0, top: 0 },
    width = '100%',
    height = '100%',
    insets = [],
    children,
  }) => {
    const { insets: defaultInsets } = useSafeArea();

    const calculatedInsets = insets.reduce(
      (prev, inset) => ({
        ...prev,
        [inset]:
          typeof defaultInsets[inset] === 'string'
            ? `max(${defaultInsets[inset]}, ${edges[inset] ?? 0}px)`
            : Math.max(defaultInsets[inset] as number, edges[inset] ?? 0),
      }),
      {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      }
    );

    const isMarginMode = mode === 'margin';
    const isPaddingMode = mode === 'padding';

    return (
      <Box width={width} height={height}>
        <Box
          mb={isMarginMode ? calculatedInsets['bottom'] : undefined}
          ml={isMarginMode ? calculatedInsets['left'] : undefined}
          mr={isMarginMode ? calculatedInsets['right'] : undefined}
          mt={isMarginMode ? calculatedInsets['top'] : undefined}
          pb={isPaddingMode ? calculatedInsets['bottom'] : undefined}
          pl={isPaddingMode ? calculatedInsets['left'] : undefined}
          pr={isPaddingMode ? calculatedInsets['right'] : undefined}
          pt={isPaddingMode ? calculatedInsets['top'] : undefined}
          width="100%"
          height="100%"
        >
          {children}
        </Box>
      </Box>
    );
  }
);
