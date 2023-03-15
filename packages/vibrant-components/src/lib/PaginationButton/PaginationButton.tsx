import { Pressable } from '../Pressable';
import { withPaginationButtonVariation } from './PaginationButtonProps';

export const PaginationButton = withPaginationButtonVariation(
  ({ innerRef, IconComponent, onClick, onColor, ariaLabel, testId, ...restProps }) => (
    <Pressable
      ref={innerRef}
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
      width={38}
      height={38}
      borderRadius={19}
      interactions={['focus', 'active']}
      ariaLabel={ariaLabel}
      data-testid={testId}
      {...restProps}
    >
      <IconComponent size={20} fill={onColor} />
    </Pressable>
  )
);
