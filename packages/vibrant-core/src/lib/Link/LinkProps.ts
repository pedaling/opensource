import { withVariation } from '../withVariation';

type LinkProps = {
  ref?: any;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
};

export const withLinkVariation = withVariation<LinkProps>('Link')();
