import { defineTest } from 'jscodeshift/src/testUtils';

describe('Migrate Title Component', () => {
  defineTest(__dirname, './title-replace', null, 'title-replace/basic', { parser: 'babel' });
});
