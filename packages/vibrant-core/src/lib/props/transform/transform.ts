import { isDefined } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';

function getTransformValue(value: number | string) {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
}

const transformProp = createSystemProp({
  property: 'transform',
  transform: value => {
    const style = Object.keys(value)
      .filter(key => isDefined(value[key]))
      .reduce((style, key) => `${style} ${key}(${getTransformValue(value[key])})`, '')
      .trim();

    return {
      transform: style,
    };
  },
});

export const transformProps = [transformProp];
