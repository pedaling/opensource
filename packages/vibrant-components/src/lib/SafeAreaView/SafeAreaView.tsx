import { Box, useSafeArea } from '@vibrant-ui/core';
import { withSafeAreaViewVariation } from './SafeAreaViewProps';

export const SafeAreaView = withSafeAreaViewVariation(({ mode, edges, width = '100%', height = '100%', children }) => {
  const { insets } = useSafeArea();

  const m: Record<'b' | 'l' | 'r' | 't', number | string> = {
    b: 0,
    l: 0,
    r: 0,
    t: 0,
  };

  const p: Record<'b' | 'l' | 'r' | 't', number | string> = {
    b: 0,
    l: 0,
    r: 0,
    t: 0,
  };

  if (mode === 'margin') {
    if (typeof insets.bottom === 'string') {
      m.b = `max(${insets.bottom}, ${edges.bottom ?? 0}px)`;
    } else {
      m.b = Math.max(insets.bottom, edges.bottom ?? 0);
    }

    if (typeof insets.left === 'string') {
      m.l = `max(${insets.left}, ${edges.left ?? 0}px)`;
    } else {
      m.l = Math.max(insets.left, edges.left ?? 0);
    }

    if (typeof insets.right === 'string') {
      m.r = `max(${insets.right}, ${edges.right ?? 0}px)`;
    } else {
      m.r = Math.max(insets.right, edges.right ?? 0);
    }

    if (typeof insets.top === 'string') {
      m.t = `max(${insets.top}, ${edges.top ?? 0}px)`;
    } else {
      m.t = Math.max(insets.top, edges.top ?? 0);
    }
  } else if (mode === 'padding') {
    if (typeof insets.bottom === 'string') {
      p.b = `max(${insets.bottom}, ${edges.bottom ?? 0}px)`;
    } else {
      p.b = Math.max(insets.bottom, edges.bottom ?? 0);
    }

    if (typeof insets.left === 'string') {
      p.l = `max(${insets.left}, ${edges.left ?? 0}px)`;
    } else {
      p.l = Math.max(insets.left, edges.left ?? 0);
    }

    if (typeof insets.right === 'string') {
      p.r = `max(${insets.right}, ${edges.right ?? 0}px)`;
    } else {
      p.r = Math.max(insets.right, edges.right ?? 0);
    }

    if (typeof insets.top === 'string') {
      p.t = `max(${insets.top}, ${edges.top ?? 0}px)`;
    } else {
      p.t = Math.max(insets.top, edges.top ?? 0);
    }
  }

  return (
    <Box width={width} height={height}>
      <Box
        mb={m.b}
        ml={m.l}
        mr={m.r}
        mt={m.t}
        pb={p.b}
        pl={p.l}
        pr={p.r}
        pt={p.t}
        backgroundColor="black"
        width="100%"
        height="100%"
      >
        {children}
        <Box height={500} width={100} backgroundColor="primary" />
      </Box>
    </Box>
  );
});
