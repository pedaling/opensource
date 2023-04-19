import { waitFor } from '@testing-library/react';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { RadioGroupField } from '../RadioGroupField';
import { Radio } from './Radio';

describe('<Radio />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when checked is true', () => {
    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test">
          <Radio value="radio" checked={true} />
        </RadioGroupField>
      );
    });

    it('radio should be checked', async () => {
      await waitFor(() => expect(renderer.getByRole('radio')).toHaveProperty('checked', true));
    });
  });

  describe('when size is md', () => {
    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test">
          <Radio value="radio" size="md" />
        </RadioGroupField>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test">
          <Radio value="radio" size="sm" />
        </RadioGroupField>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
