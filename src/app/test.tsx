/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('should render search field', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
  });
});
