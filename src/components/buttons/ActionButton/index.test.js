import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ActionButton from "./index";

afterEach(() => cleanup());

describe("ActionButton", () => {
  test("Renders corrently", () => {
    render(<ActionButton type="button">Action button</ActionButton>);

    expect(screen.getByText("Action button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Functions correctly", () => {
    const handleClick = jest.fn();

    render(
      <ActionButton type="button" onClick={handleClick}>
        Action button
      </ActionButton>
    );
    fireEvent.click(screen.getByText(/action button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Renders as type button", () => {
    render(<ActionButton type="submit">Action button</ActionButton>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("Renders as type submit", () => {
    render(<ActionButton>Action button</ActionButton>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  test("Has initial class name", () => {
    render(<ActionButton>Action button</ActionButton>);
    expect(screen.getByRole("button")).toHaveClass("action-button");
  });
});
