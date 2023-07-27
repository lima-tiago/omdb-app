/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { EmptyScreen } from './';

describe('EmptyScreen', () => {
  it('should render empty screen', () => {
    render(<EmptyScreen />);
    expect(
      screen.getByRole('heading', {
        name: /don't know what to search?/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Here's an offer you can't refuse"),
    ).toBeInTheDocument();
  });
});
