import { Linking } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { PressableBox } from '../PressableBox';
import { withLinkVariation } from './LinkProps';

export const Link = withLinkVariation(({ innerRef, isExternal: _, href, onClick, ...props }) => {
  const {
    dependencies: { link },
  } = useConfig();

  const openLink = () => {
    Linking.openURL(href).catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
    });

    onClick?.();
  };

  if (link) {
    return <Box base={link} ref={innerRef} {...props} />;
  }

  return <PressableBox ref={innerRef} role="link" onClick={openLink} {...props} />;
});
