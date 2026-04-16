import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

vi.mock('next/image', () => ({
  default: (props: any) => {
    // avoid passing priority boolean to img element as it causes a warning
    const { priority, alt, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt || ""} {...rest} />;
  },
}));

vi.mock('next/link', () => ({
  default: ({ children, href, className }: any) => {
    return <a href={href} className={className}>{children}</a>;
  },
}));

describe('Hero component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Hero />);

    expect(screen.getByAltText('Slabs Vinyl Supply')).toBeInTheDocument();

    expect(screen.getByText('Deep archive. New condition. No filler.')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '/shop');
    expect(screen.getByRole('link', { name: 'Dig the Crates' })).toHaveAttribute('href', '/crate');
  });

  it('adds and removes scroll event listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<Hero />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true });

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
