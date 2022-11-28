import { PortalBox } from '../PortalBox';
import { withFixedBoxVariation } from './FixedBoxProps';

export const FixedBox = withFixedBoxVariation(({ innerRef, ...restProps }) => (
  <PortalBox ref={innerRef} {...restProps} />
));
