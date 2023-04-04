import { waitFor } from '@testing-library/react';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { CustomizationProvider } from '../CustomizationProvider';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when size is lg', () => {
    beforeEach(async () => {
      renderer = render(<Avatar size="lg" src="" alt="" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is md', () => {
    beforeEach(async () => {
      renderer = render(<Avatar size="md" src="" alt="" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(async () => {
      renderer = render(<Avatar size="sm" src="" alt="" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is xs', () => {
    beforeEach(async () => {
      renderer = render(<Avatar size="xs" src="" alt="" />);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when valid src provided', () => {
    beforeEach(() => {
      renderer = render(
        <Avatar
          size="md"
          src="https://cdn.class101.net/images/7776e542-d6db-49c6-b86f-7e93f0cf5425/200x200.png"
          alt=""
        />
      );
    });

    it('should render the img element with src as source', () => {
      expect(renderer.getByRole('img').getAttribute('src')).toBe(
        'https://cdn.class101.net/images/7776e542-d6db-49c6-b86f-7e93f0cf5425/200x200.png'
      );
    });
  });

  describe('when invalid src provided', () => {
    const defaultPlaceholder = 'https://cdn.class101.net/images/e1cba897-73d1-43de-864b-c36cefdea670/200x200.png';

    beforeEach(() => {
      renderer = render(
        <CustomizationProvider avatar={{ placeholder: defaultPlaceholder }}>
          <Avatar size="md" src="" alt="" />
        </CustomizationProvider>
      );
    });

    it('should render the img element with default placeholder as source', async () => {
      await waitFor(() => expect(renderer.getByRole('img').getAttribute('src')).toBe(defaultPlaceholder));
    });
  });

  describe('when alt provided', () => {
    beforeEach(() => {
      renderer = render(
        <Avatar
          size="md"
          src="https://cdn.class101.net/images/7776e542-d6db-49c6-b86f-7e93f0cf5425/200x200.png"
          alt="avatar"
        />
      );
    });

    it('should render the img element with alt', () => {
      expect(renderer.queryByAltText('avatar')).toBeTruthy();
    });
  });

  describe('when placeholder provided and invalid src provided', () => {
    const placeholder = 'https://cdn.class101.net/images/e1cba897-73d1-43de-864b-c36cefdea670/100x100.png';

    beforeEach(() => {
      renderer = render(<Avatar size="md" src="" alt="" placeholder={placeholder} />);
    });

    it('should render the img element with placeholder value as source', async () => {
      await waitFor(() => expect(renderer.getByRole('img').getAttribute('src')).toBe(placeholder));
    });
  });
});
