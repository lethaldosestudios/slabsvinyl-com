import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from '../Nav';
import { vi } from 'vitest';

// Mock lucide-react to avoid missing icons issues
vi.mock('lucide-react', () => ({
  Menu: () => <div data-testid="icon-menu" />,
  X: () => <div data-testid="icon-x" />,
  Search: () => <div data-testid="icon-search" />,
  ShoppingBag: () => <div data-testid="icon-shopping-bag" />,
  Disc: () => <div data-testid="icon-disc" />,
  Archive: () => <div data-testid="icon-archive" />,
  Moon: () => <div data-testid="icon-moon" />,
  Sun: () => <div data-testid="icon-sun" />,
}));

// Mock next/link to prevent navigation errors in jsdom
vi.mock('next/link', () => {
  return {
    default: ({ children, href, onClick, className }: any) => {
      return (
        <button
          onClick={(e) => {
             e.preventDefault();
             if (onClick) onClick(e);
          }}
          className={className}
          data-href={href}
        >
          {children}
        </button>
      );
    },
  };
});

describe('Nav Component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders correctly with wordmark and desktop links', () => {
    render(<Nav cartCount={0} currentPath="/" />);
    expect(screen.getByText('SLABS')).toBeInTheDocument();

    // Check navigation links
    expect(screen.getAllByText('Shop')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Collections')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Crate')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Journal')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About')[0]).toBeInTheDocument();
  });

  it('displays cart count when greater than 0', () => {
    const { rerender } = render(<Nav cartCount={0} currentPath="/" />);
    // When 0, should not render count span
    expect(screen.queryByText('0')).not.toBeInTheDocument();

    rerender(<Nav cartCount={3} currentPath="/" />);
    // Displays in both desktop and mobile locations
    expect(screen.getAllByText('3')).toHaveLength(2);
  });

  it('highlights the active link correctly based on currentPath', () => {
    render(<Nav cartCount={0} currentPath="/shop" />);

    const shopLink = screen.getAllByText('Shop')[0];
    const activeSpan = shopLink.parentElement?.querySelector('span.w-full');
    expect(activeSpan).toBeInTheDocument();

    const aboutLink = screen.getAllByText('About')[0];
    const inactiveSpan = aboutLink.parentElement?.querySelector('span.w-0');
    expect(inactiveSpan).toBeInTheDocument();
  });

  it('handles transparent prop correctly before scrolling', () => {
    render(<Nav cartCount={0} currentPath="/" transparent={true} />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-transparent');
    expect(header).toHaveClass('border-transparent');
  });

  it('handles background color change on scroll', () => {
    render(<Nav cartCount={0} currentPath="/" transparent={true} />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-transparent');

    // Simulate scroll
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(header).toHaveClass('bg-slabs-surface');
    expect(header).toHaveClass('border-slabs-border');
  });

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup();
    render(<Nav cartCount={0} currentPath="/" />);

    const openMenuButton = screen.getByLabelText('Open Menu');
    const closeMenuButton = screen.getByLabelText('Close Menu');

    expect(document.body.style.overflow).toBe('');

    await user.click(openMenuButton);
    expect(document.body.style.overflow).toBe('hidden');

    await user.click(closeMenuButton);
    expect(document.body.style.overflow).toBe('');
  });

  it('closes mobile menu when clicking wordmark', async () => {
    const user = userEvent.setup();
    render(<Nav cartCount={0} currentPath="/" />);

    const openMenuButton = screen.getByLabelText('Open Menu');
    await user.click(openMenuButton);
    expect(document.body.style.overflow).toBe('hidden');

    const wordmark = screen.getByText('SLABS');
    await user.click(wordmark);

    expect(document.body.style.overflow).toBe('');
  });

  it('closes mobile menu when clicking a mobile link', async () => {
    const user = userEvent.setup();
    render(<Nav cartCount={0} currentPath="/" />);

    const openMenuButton = screen.getByLabelText('Open Menu');
    await user.click(openMenuButton);
    expect(document.body.style.overflow).toBe('hidden');

    const mobileLinkListShop = screen.getAllByText('Shop')[1];

    await user.click(mobileLinkListShop);

    expect(document.body.style.overflow).toBe('');
  });
});
