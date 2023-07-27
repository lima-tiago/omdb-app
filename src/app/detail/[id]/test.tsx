/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import MovieDetail from './page';

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  useSearchParams: () => [[{ revalidate: '1' }]],
  back: jest.fn(),
  useParams: () => {
    id: 'tt0304141';
  },
}));

describe('MovieDetail', () => {
  it('should render the details', async () => {
    render(<MovieDetail />);
    expect(screen.getByTestId('detail-wrapper')).not.toBeNull();
  });
});
