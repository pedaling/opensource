import React from 'react';
import Translate from '@docusaurus/Translate';
import { Callout, VStack } from '@vibrant-ui/components';

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
  default: {
    infimaClassName: 'default',
    label: <Translate id="theme.admonition.default">note</Translate>,
  },
  success: {
    infimaClassName: 'success',

    label: <Translate id="theme.admonition.success">success</Translate>,
  },
  error: {
    infimaClassName: 'error',
    label: <Translate id="theme.admonition.error">error</Translate>,
  },
  informative: {
    infimaClassName: 'informative',
    label: <Translate id="theme.admonition.informative">info</Translate>,
  },
  warning: {
    infimaClassName: 'warning',
    label: <Translate id="theme.admonition.warning">warning</Translate>,
  },
};
// Legacy aliases, undocumented but kept for retro-compatibility

function getAdmonitionConfig(type) {
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(`No admonition config found for admonition type "${type}". Using Info as fallback.`);
  return AdmonitionConfigs.info;
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    item => React.isValidElement(item) && item.props?.mdxType === 'mdxAdmonitionTitle'
  );
  const rest = <>{items.filter(item => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}
function processAdmonitionProps(props) {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}
export default function Admonition(props) {
  const { children, type, title } = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  return (
    <VStack py={20}>
      <Callout kind={type} title={titleLabel} contents={children}>
        {children}
      </Callout>
    </VStack>
  );
}
