import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router";
import PageNotFound from ".";
import { createMemoryHistory } from "history";

afterEach(() => cleanup());

describe("Header", () => {
  test("Renders correctly", () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links[0].href).toEqual("http://localhost/");
  });

  test("Renders heading with heading", () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("Renders button with href", () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(screen.getByTestId("pnf-btn")).toBeInTheDocument();
    expect(screen.getByTestId("pnf-btn")).toHaveAttribute("href", "/");
  });

  test("Navigate on button click working properly", () => {
    const history = createMemoryHistory({ initialEntries: ["/dummy-page"] });
    render(
      <Router location={history.location} navigator={history}>
        <PageNotFound />
      </Router>
    );

    fireEvent.click(screen.getByText(/home page/i));
    expect(history.location.pathname).toBe("/");
  });
});
