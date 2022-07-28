import { isDefined } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';

function getTransformValue(value: number | string | undefined) {
  if (value === undefined) {
    return '';
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
}

const transformProp = createSystemProp({
  property: 'transform',
  transform: value => {
    const style = Object.keys(value)
      .reduce((style, key) => (isDefined(key) ? `${style} ${key}(${getTransformValue(value[key])})` : ''), '')
      .trim();

    return {
      transform: style,
    };
  },
});

export const transformProps = [transformProp];
