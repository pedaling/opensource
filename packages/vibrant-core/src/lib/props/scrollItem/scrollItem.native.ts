import { createSystemProp } from '../../createSystemProp';

const snapAlignmentProp = createSystemProp({
  property: 'snapAlignment',
  disabled: true,
});

const scrollSnapStopProp = createSystemProp({
  property: 'scrollSnapStop',
  disabled: true,
});

export const scrollItemSystemProps = [scrollSnapStopProp, snapAlignmentProp];
