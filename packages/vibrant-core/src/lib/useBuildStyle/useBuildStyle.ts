import type { BuildStyleFn } from './type';

export const useBuildStyle: BuildStyleFn = ({ styleObjects, theme }) =>
  styleObjects.reduce((result, styleObject, index) => {
    const prevStyleObject = styleObjects[index - 1] ?? {};
    const style = Object.fromEntries(
      Object.entries(styleObject).filter(([key, value]) => prevStyleObject[key] !== value)
    );

    return {
      ...result,
      ...(theme && index >= 1
        ? {
            [`@media screen and (min-width: ${theme.breakpoints[index - 1]}px)`]: style,
          }
        : styleObject),
    };
  }, {});
