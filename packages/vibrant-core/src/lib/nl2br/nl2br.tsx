import { createElement } from 'react';

const newlineRegex = /(\r\n|\n\r|\r|\n|\\n)/g;

export function nl2br(string: string) {
  if (typeof string !== 'string') {
    return string;
  }

  return string.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      return createElement('br', { key: index.toString() });
    }

    return line;
  });
}
