import { fireEvent, waitFor } from '@testing-library/react';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Radio } from '../Radio/Radio';
import { RadioGroupField } from '../RadioGroupField';

describe('<RadioGroupField />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe("when the 'name' prop provided", () => {
    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test">
          <Radio value="radio" />
        </RadioGroupField>
      );
    });

    it("radio should have same name with 'name' prop value", () => {
      expect(renderer.getByRole('radio')).toHaveProperty('name', 'test');
    });
  });

  describe("when the 'defaultValue' prop provided", () => {
    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test" defaultValue="1">
          <Radio value="1" label="First" />
          <Radio value="2" label="Second" />
          <Radio value="3" label="Third" />
        </RadioGroupField>
      );
    });

    it("radio with 'defaultValue' prop value should be checked", () => {
      expect(renderer.getByRole('radio', { checked: true })).toHaveProperty('value', '1');
    });
  });

  describe("when the 'value' prop provided", () => {
    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test" defaultValue="1">
          <Radio value="1" label="First" />
          <Radio value="2" label="Second" />
          <Radio value="3" label="Third" />
        </RadioGroupField>
      );
    });

    it("radio with 'value' prop value should be checked", () => {
      expect(renderer.getByRole('radio', { checked: true })).toHaveProperty('value', '1');
    });
  });

  describe("when the 'onChange' prop provided", () => {
    const onChangeMock = jest.fn();

    beforeEach(() => {
      renderer = render(
        <RadioGroupField name="test" onChange={onChangeMock}>
          <Radio value="1" label="First" />
          <Radio value="2" label="Second" />
          <Radio value="3" label="Third" />
        </RadioGroupField>
      );
    });

    describe('after the radio element with value 1 clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByLabelText('First'));
      });

      it('onChange callback should be called with value 1', async () => {
        await waitFor(() => expect(onChangeMock).toBeCalledWith({ value: '1' }));
      });
    });
  });
});
