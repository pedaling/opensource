import { css } from '@emotion/css';
import { staticClassName } from '../../cssConstants';

export const convertStyleToClassName = (styleObj: Record<string, any>) =>
  Object.entries(styleObj).map(([key, value]) => {
    const staticClassName = `${key}-${value}`;

    if (isExistInStaticStyle(staticClassName)) {
      return staticClassName;
    }

    return css({ [key]: value });
  });

const isExistInStaticStyle = (value: string) => staticClassName.has(value);
