import { Box, useSafeArea } from '@vibrant-ui/core';
import { withSafeAreaViewVariation } from './SafeAreaViewProps';

export const SafeAreaView = withSafeAreaViewVariation(
  ({
    mode = 'margin',
    edges = [],
    width = '100%',
    height = '100%',
    minInsets = { bottom: 0, left: 0, right: 0, top: 0 },
    children,
  }) => {
    const { insets: defaultInsets } = useSafeArea();

    const calculatedInsets = edges.reduce(
      (prev, edge) => ({
        ...prev,
        [`${mode[0]}${edge[0]}`]:
          typeof defaultInsets[edge] === 'string'
            ? `max(${defaultInsets[edge]}, ${minInsets[edge] ?? 0}px)`
            : Math.max(defaultInsets[edge] as number, minInsets[edge] ?? 0),
      }),
      {
        mb: 0,
        ml: 0,
        mr: 0,
        mt: 0,
        pb: 0,
        pl: 0,
        pr: 0,
        pt: 0,
      }
    );

    return (
      <Box width={width} height={height}>
        <Box {...calculatedInsets} width="100%" height="100%">
          {children}
        </Box>
      </Box>
    );
  }
);
