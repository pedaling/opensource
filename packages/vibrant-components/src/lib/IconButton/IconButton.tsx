import { Pressable } from '../Pressable';
import { withIconButtonVariation } from './IconButtonProps';

export const IconButton = withIconButtonVariation(
  ({ innerRef, type = 'button', iconSize, IconComponent, color = 'onView1', testId, ...restProps }) => (
    <Pressable
      {...restProps}
      data-testId={testId}
      ref={innerRef}
      as="button"
      buttonType={type}
      interactions={['focus', 'active']}
      borderRadiusLevel={1}
    >
      <IconComponent size={iconSize} fill={color} />
    </Pressable>
  )
);
