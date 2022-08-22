import type { FC } from 'react';
import { createElement } from 'react';
import styled from '@emotion/styled';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text = styled(({ as = 'span', ...restProps }) => createElement(as, restProps), {
  shouldForwardProp,
})(interpolation);

(Text as FC).displayName = 'Text';
