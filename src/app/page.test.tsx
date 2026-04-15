import { render } from '@testing-library/react';
import HomePage from './page';

// Mock the child components to simplify the test and focus on HomePage's rendering logic
jest.mock('../components/Nav', () => ({
  Nav: ({ cartCount, currentPath, transparent }: any) => (
    <div data-testid="mock-nav" data-cart-count={cartCount} data-current-path={currentPath} data-transparent={transparent}>
      Mock Nav
    </div>
  ),
}));

jest.mock('../components/Hero', () => ({
  Hero: () => <div data-testid="mock-hero">Mock Hero</div>,
}));

jest.mock('../components/NewArrivals', () => ({
  NewArrivals: () => <div data-testid="mock-new-arrivals">Mock New Arrivals</div>,
}));

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    const { getByTestId, getByRole } = render(<HomePage />);

    // Verify that main container exists
    const mainElement = getByRole('main');
    expect(mainElement).toBeInTheDocument();

    // Verify all child components are rendered
    expect(getByTestId('mock-nav')).toBeInTheDocument();
    expect(getByTestId('mock-hero')).toBeInTheDocument();
    expect(getByTestId('mock-new-arrivals')).toBeInTheDocument();
  });

  it('passes the correct props to the Nav component', () => {
    const { getByTestId } = render(<HomePage />);
    const navElement = getByTestId('mock-nav');

    expect(navElement).toHaveAttribute('data-cart-count', '0');
    expect(navElement).toHaveAttribute('data-current-path', '/');
    expect(navElement).toHaveAttribute('data-transparent', 'true');
  });
});
