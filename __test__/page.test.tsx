import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary functions

import Home from '../src/app/page';

describe('Home', () => {
  test('renders main content correctly', () => {
    render(<Home />);

    // main element should exist
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    // description element should exist
    const descriptionElement = screen.getByText(/Get started by editing/i);
    expect(descriptionElement).toBeInTheDocument();

    // Vercel logo should exist
    const vercelLogoElement = screen.getByAltText('Vercel Logo');
    expect(vercelLogoElement).toBeInTheDocument();

    // Next.js logo should exist
    const nextLogoElement = screen.getByAltText('Next.js Logo');
    expect(nextLogoElement).toBeInTheDocument();

    // cards should exist
    const docsCardElement = screen.getByText(/Docs/i);
    expect(docsCardElement).toBeInTheDocument();

    const learnCardElement = screen.getByText('Learn');
    expect(learnCardElement).toBeInTheDocument();

    const templatesCardElement = screen.getByText(/Templates/i);
    expect(templatesCardElement).toBeInTheDocument();

    const deployCardElement = screen.getByText('Deploy');
    expect(deployCardElement).toBeInTheDocument();
  });
});
