import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { Hero } from '../Hero';

// Mock next/image
vi.mock('next/image', () => ({
  default: (props: any) => {
    const { priority, alt, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt || ''} {...rest} data-priority={priority} />;
  },
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, className }: any) => (
    <a href={href} className={className}>{children}</a>
  ),
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
  ChevronDown: () => <div data-testid="chevron-down" />,
}));

describe('Hero Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders correctly', () => {
    render(<Hero />);
    expect(screen.getByAltText('Slabs Vinyl Supply')).toBeInTheDocument();
    expect(screen.getByText('Deep archive. New condition. No filler.')).toBeInTheDocument();
  });

  it('mounts with initial state (opacity-0)', () => {
    render(<Hero />);

    const wordmarkContainer = screen.getByAltText('Slabs Vinyl Supply').parentElement;
    expect(wordmarkContainer).toHaveClass('opacity-0');
    expect(wordmarkContainer).toHaveClass('scale-[1.01]');

    const tagline = screen.getByText('Deep archive. New condition. No filler.');
    expect(tagline).toHaveClass('opacity-0');
    expect(tagline).toHaveClass('translate-y-2');
  });

  it('transitions to mounted state after timeout', () => {
    render(<Hero />);

    act(() => {
      vi.advanceTimersByTime(10);
    });

    const wordmarkContainer = screen.getByAltText('Slabs Vinyl Supply').parentElement;
    expect(wordmarkContainer).toHaveClass('opacity-100');
    expect(wordmarkContainer).toHaveClass('scale-100');

    const tagline = screen.getByText('Deep archive. New condition. No filler.');
    expect(tagline).toHaveClass('opacity-100');
    expect(tagline).toHaveClass('translate-y-0');
  });

  it('handles scroll events correctly', () => {
    render(<Hero />);

    const chevronContainer = screen.getByTestId('chevron-down').parentElement?.parentElement;
    expect(chevronContainer).toHaveClass('opacity-100');

    act(() => {
      window.scrollY = 61;
      fireEvent.scroll(window);
    });

    expect(chevronContainer).toHaveClass('opacity-0');
    expect(chevronContainer).toHaveClass('pointer-events-none');

    act(() => {
      window.scrollY = 50;
      fireEvent.scroll(window);
    });

    expect(chevronContainer).toHaveClass('opacity-100');
    expect(chevronContainer).not.toHaveClass('pointer-events-none');
  });

  it('adds and removes scroll event listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');

    const { unmount } = render(<Hero />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true });

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    expect(clearTimeoutSpy).toHaveBeenCalled();

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
  });
});
