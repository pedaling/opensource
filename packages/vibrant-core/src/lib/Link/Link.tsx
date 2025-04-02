import { isDefined } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { useConfig } from '../ConfigProvider';
import { withLinkVariation } from './LinkProps';

export const Link = withLinkVariation(
  ({
    innerRef,
    isExternal,
    onFocusIn,
    onFocusOut,
    onHoverIn,
    onHoverOut,
    onPressIn,
    onPressOut,
    testId,
    hitSlop: _,
    ...props
  }) => {
    const {
      dependencies: { link },
    } = useConfig();

    return (
      <Box
        {...(isDefined(link) ? {} : { as: 'a' })}
        data-testid={testId}
        base={link}
        ref={innerRef}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
        onFocus={onFocusIn}
        onBlur={onFocusOut}
        onMouseDown={(event?: { stopPropagation: () => void }) => {
          // workaround for the virtualized table
          event?.stopPropagation();
          onPressIn?.();
        }}
        onMouseUp={() => {
          onPressOut?.();

          onFocusOut?.();
        }}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      />
    );
  }
);
