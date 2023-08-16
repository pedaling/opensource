import { Pressable } from '../Pressable';
import { withOperationButtonVariation } from './OperatorButtonProps';

export const OperatorButton = withOperationButtonVariation(
  ({ IconComponent, backgroundColor, iconFill, testId = 'operator-button', ...restProps }) => (
    <Pressable
      p={7}
      borderWidth={0}
      rounded="sm"
      backgroundColor={backgroundColor}
      overlayColor="onView1"
      interactions={['hover', 'focus', 'active']}
      data-testid={testId}
      {...restProps}
    >
      <IconComponent size={16} fill={iconFill} />
    </Pressable>
  )
);
