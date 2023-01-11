import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router";
import Header from ".";
import { createMemoryHistory } from "history";

afterEach(() => cleanup());

describe("Header", () => {
  test("Renders correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links[0].href).toEqual("http://localhost/");
    expect(links[1].href).toEqual("http://localhost/settings");
  });

  test("Navigate on logo click working properly", () => {
    const history = createMemoryHistory({ initialEntries: ["/settings"] });
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    fireEvent.click(screen.getByText("TickerChart"));
    expect(history.location.pathname).toBe("/");
  });

  test("Navigate on settings click working properly", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    fireEvent.click(screen.getByText("Settings"));
    expect(history.location.pathname).toBe("/settings");
  });
});
