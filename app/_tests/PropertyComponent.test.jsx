import { PropertyComponent } from "../_components/index";
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

describe('Testing rendered content', () => {
  beforeEach(() => {
    render(<PropertyComponent />);
  })

  fit('Show more button not in document before data is fetched', () => {
    expect(screen.queryByText(/Show more/i)).not.toBeInTheDocument();
  })

  it('renders "Loading", which disappears after content is fetched', async () => {
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
  })
})
