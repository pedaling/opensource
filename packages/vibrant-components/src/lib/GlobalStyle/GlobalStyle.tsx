import type { FC } from 'react';
import { Global, css } from '@emotion/react';

const style = css`
  :root {
    --safe-area-inset-top: 0px;
    --safe-area-inset-right: 0px;
    --safe-area-inset-bottom: 0px;
    --safe-area-inset-left: 0px;

    @supports (top: constant(safe-area-inset-top)) {
      --safe-area-inset-top: constant(safe-area-inset-top);
      --safe-area-inset-right: constant(safe-area-inset-right);
      --safe-area-inset-bottom: constant(safe-area-inset-bottom);
      --safe-area-inset-left: constant(safe-area-inset-left);
    }

    @supports (top: env(safe-area-inset-top)) {
      --safe-area-inset-top: env(safe-area-inset-top);
      --safe-area-inset-right: env(safe-area-inset-right);
      --safe-area-inset-bottom: env(safe-area-inset-bottom);
      --safe-area-inset-left: env(safe-area-inset-left);
    }
  }

  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  *:focus {
    outline: 0;
  }

  input[type='search'] {
    appearance: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }

  input:autofill,
  input:autofill:hover,
  input:autofill:focus,
  input:autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }
`;

export const GlobalStyle: FC = () => <Global styles={style} />;

GlobalStyle.displayName = 'GlobalStyle';
