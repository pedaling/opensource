import { createSystemProp } from '../../createSystemProp';

const snapAlignmentProp = createSystemProp({
  property: 'snapAlignment',
  styleProperty: 'scrollSnapAlign',
});

const scrollSnapStopProp = createSystemProp({
  property: 'scrollSnapStop',
  styleProperty: 'scrollSnapStop',
});

export const scrollItemSystemProps = [scrollSnapStopProp, snapAlignmentProp];
