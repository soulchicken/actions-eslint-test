import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndexPage from '../pages/index';

describe('IndexPage', () => {
  it('renders without crashing', () => {
    render(<IndexPage />);
    expect(screen.getByText('Hello Next.js 👋101')).toBeInTheDocument(); // 일부러 틀리게 작성
    const links = screen.getAllByRole('link', { name: 'About' });
    expect(links[0]).toBeInTheDocument();
  });
});
