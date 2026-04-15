import { render, screen, act, fireEvent } from "@testing-library/react";
import { Hero } from "./Hero";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    const { priority, ...rest } = props;
    return <img {...rest} data-priority={priority} />;
  },
}));

// Mock lucide-react
jest.mock("lucide-react", () => ({
  ChevronDown: () => <div data-testid="chevron-down" />,
}));

describe("Hero Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Reset window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("mounts with initial state (opacity-0)", () => {
    render(<Hero />);

    // Check initial state of elements
    const wordmarkContainer = screen.getByAltText("Slabs Vinyl Supply").parentElement;
    expect(wordmarkContainer).toHaveClass("opacity-0");
    expect(wordmarkContainer).toHaveClass("scale-[1.01]");

    const tagline = screen.getByText("Deep archive. New condition. No filler.");
    expect(tagline).toHaveClass("opacity-0");
    expect(tagline).toHaveClass("translate-y-2");

    const shopLink = screen.getByText("Shop");
    const linkContainer = shopLink.parentElement;
    expect(linkContainer).toHaveClass("opacity-0");
    expect(linkContainer).toHaveClass("translate-y-2");

    const chevronContainer = screen.getByTestId("chevron-down").parentElement?.parentElement;
    expect(chevronContainer).toHaveClass("opacity-100");
  });

  it("transitions to mounted state after timeout", () => {
    render(<Hero />);

    // Fast-forward timers by 10ms
    act(() => {
      jest.advanceTimersByTime(10);
    });

    const wordmarkContainer = screen.getByAltText("Slabs Vinyl Supply").parentElement;
    expect(wordmarkContainer).toHaveClass("opacity-100");
    expect(wordmarkContainer).toHaveClass("scale-100");

    const tagline = screen.getByText("Deep archive. New condition. No filler.");
    expect(tagline).toHaveClass("opacity-100");
    expect(tagline).toHaveClass("translate-y-0");
  });

  it("handles scroll events correctly", () => {
    render(<Hero />);

    const chevronContainer = screen.getByTestId("chevron-down").parentElement?.parentElement;
    expect(chevronContainer).toHaveClass("opacity-100");

    // Simulate scrolling past 60px
    act(() => {
      window.scrollY = 61;
      fireEvent.scroll(window);
    });

    expect(chevronContainer).toHaveClass("opacity-0");
    expect(chevronContainer).toHaveClass("pointer-events-none");

    // Simulate scrolling back up
    act(() => {
      window.scrollY = 50;
      fireEvent.scroll(window);
    });

    expect(chevronContainer).toHaveClass("opacity-100");
    expect(chevronContainer).not.toHaveClass("pointer-events-none");
  });

  it("cleans up event listeners and timeouts on unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");

    const { unmount } = render(<Hero />);

    expect(addEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function), { passive: true });

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
    expect(clearTimeoutSpy).toHaveBeenCalled();

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
  });
});
