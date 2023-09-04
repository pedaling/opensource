import { Pressable } from '../Pressable';
import { withIconButtonVariation } from './IconButtonProps';

export const IconButton = withIconButtonVariation(
  ({ innerRef, type = 'button', iconSize, IconComponent, color = 'onView1', testId = 'icon-button', ...restProps }) => (
    <Pressable
      {...restProps}
      data-testid={testId}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['focus', 'active']}
      rounded="sm"
    >
      <IconComponent size={iconSize} fill={color} />
    </Pressable>
  )
);
