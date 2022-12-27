import type { FC } from 'react';
import React from 'react';
import { Global, css } from '@emotion/react';
import { useCurrentTheme } from '@vibrant-ui/core';

const style = theme => css`
  :root {
    --ifm-color-primary: ${theme.colors.primary};
    --ifm-color-primary-dark: rgb(33, 175, 144);
    --ifm-color-primary-darker: rgb(31, 165, 136);
    --ifm-color-primary-darkest: rgb(26, 136, 112);
    --ifm-color-primary-light: rgb(70, 203, 174);
    --ifm-color-primary-lighter: rgb(102, 212, 189);
    --ifm-color-primary-lightest: rgb(146, 224, 208);
    --ifm-pre-background: ${theme.colors.background};
    --ifm-code-font-size: 80%;
    --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
  }
  /* If you have a different syntax highlighting theme for dark mode. */
  [data-theme='dark'] {
    /* Color which works with dark mode syntax highlighting theme */
    --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
  }

  .docusaurus-highlight-code-line {
    background-color: rgba(0, 0, 0, 0.1);
    display: block;
    margin: 0 calc(-1 * var(--ifm-pre-padding));
    padding: 0 var(--ifm-pre-padding);
  }

  html[data-theme='dark'] .docusaurus-highlight-code-line {
    background-color: rgba(0, 0, 0, 0.3);
  }

  :root {
    --safe-area-inset-top: 0px;
    --safe-area-inset-right: 0px;
    --safe-area-inset-bottom: 0px;
    --safe-area-inset-left: 0px;
  }

  @supports (top: constant(safe-area-inset-top)) {
    :root {
      --safe-area-inset-top: constant(safe-area-inset-top);
      --safe-area-inset-right: constant(safe-area-inset-right);
      --safe-area-inset-bottom: constant(safe-area-inset-bottom);
      --safe-area-inset-left: constant(safe-area-inset-left);
    }
  }

  @supports (top: env(safe-area-inset-top)) {
    :root {
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
  ul,
  li {
    list-style: none;
    font-size: 0.813rem;
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

  *:focus {
    outline: 0;
  }

  .header-github-link:before {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E")
      no-repeat;
    content: '';
    display: flex;
    height: 24px;
    width: 24px;
  }

  .code-block-error-line {
    background-color: #ff000020;
    display: block;
    margin: 0 calc(-1 * var(--ifm-pre-padding));
    padding: 0 var(--ifm-pre-padding);
    border-left: 3px solid #ff000080;
  }

  .playgroundHeader_node_modules-\@docusaurus-theme-live-codeblock-lib-theme-Playground-styles-module:first-of-type {
    display: none;
  }

  .row .docItemCol_node_modules-\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module {
    max-width: 100% !important;
  }
`;

export const GlobalStyle: FC = () => {
  const { theme } = useCurrentTheme();

  return <Global styles={() => style(theme)} />;
};

GlobalStyle.displayName = 'GlobalStyle';
