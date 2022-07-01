import emotionPropValid from '@emotion/is-prop-valid';

const validPropNames = ['as', 'base'];

export const isPropValid = (propName: string) => emotionPropValid(propName) || validPropNames.includes(propName);
