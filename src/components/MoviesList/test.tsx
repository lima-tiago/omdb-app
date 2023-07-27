/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { MoviesList } from './';

describe('MoviesList', () => {
  it('should render list of movies or series', () => {
    render(<MoviesList />);
    expect(screen.getByTestId('list-movies')).toBeInTheDocument();
  });
});
