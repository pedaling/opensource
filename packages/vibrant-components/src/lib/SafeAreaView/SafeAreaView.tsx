import { Box, useSafeArea } from '@vibrant-ui/core';
import { withSafeAreaViewVariation } from './SafeAreaViewProps';

export const SafeAreaView = withSafeAreaViewVariation(
  ({
    mode,
    edges = { bottom: 0, left: 0, right: 0, top: 0 },
    width = '100%',
    height = '100%',
    insets = [],
    children,
  }) => {
    const { insets: defaultInsets } = useSafeArea();

    const m: Record<'bottom' | 'left' | 'right' | 'top', number | string> = {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    };
    const p: Record<'bottom' | 'left' | 'right' | 'top', number | string> = {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    };

    insets.map(inset => {
      const defaultValue = defaultInsets[inset];

      if (mode === 'margin') {
        if (typeof defaultValue === 'string') {
          m[inset] = `max(${defaultValue}, ${edges[inset]}px)`;
        } else {
          m[inset] = Math.max(defaultValue, edges[inset] ?? 0);
        }
      } else if (mode === 'padding') {
        if (typeof defaultValue === 'string') {
          p[inset] = `max(${defaultValue}, ${edges[inset]}px)`;
        } else {
          p[inset] = Math.max(defaultValue, edges[inset] ?? 0);
        }
      }
    });

    return (
      <Box width={width} height={height}>
        <Box
          mb={m.bottom}
          ml={m.left}
          mr={m.right}
          mt={m.top}
          pb={p.bottom}
          pl={p.left}
          pr={p.right}
          pt={p.top}
          width="100%"
          height="100%"
        >
          {children}
        </Box>
      </Box>
    );
  }
);
