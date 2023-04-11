import { Linking, Pressable } from 'react-native';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withLinkVariation } from './LinkProps';

export const Link = withLinkVariation(({ innerRef, isExternal: _, href, onClick, onFocusIn, onFocusOut, ...props }) => {
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
    return (
      <Box
        base={link}
        href={href}
        ref={innerRef}
        onPress={onClick}
        onFocus={onFocusIn}
        onBlur={onFocusOut}
        {...props}
      />
    );
  }

  return (
    <Box
      ref={innerRef}
      base={Pressable}
      role="link"
      onPress={openLink}
      onFocus={onFocusIn}
      onBlur={onFocusOut}
      {...props}
    />
  );
});
