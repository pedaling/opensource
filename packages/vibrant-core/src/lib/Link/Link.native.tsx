import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withLinkVariation } from './LinkProps';

export const Link = withLinkVariation(({ innerRef, isExternal, ...props }) => {
  const {
    dependencies: { link },
  } = useConfig();

  return (
    <Box
      as="a"
      base={link}
      ref={innerRef}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    />
  );
});
