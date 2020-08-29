import Index from '../../pages/index';
import { render, screen, waitFor } from '../../test-utils';
import '@testing-library/jest-dom';

describe('IndexPage', () => {
  it('should render index page', async () => {
    render(<Index />);
    await waitFor(() =>
      expect(screen.getByText(/Next.js example/)).toBeInTheDocument(),
    );
  });
});
