import { Navbar } from "../_components/index";
import { render, screen } from '@testing-library/react';

describe('Navbar content rendered', () => {
  beforeEach(() => {
    render(<Navbar />);
  })

  it('prints header text', () => {
    expect(screen.getByText(/Featured Listed Property/)).toBeInTheDocument();
  })

  describe('buttons have correct behaviour during navigation', () => {
    it('has border radius 1000px', () => {
      const view_all = screen.getByRole('button', {
        name: /view all/i
      })
      expect(view_all).toHaveStyle(`background-color: rgba(25, 118, 210, 0.04)`);
    })
  })
})


