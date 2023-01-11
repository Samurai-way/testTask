import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Layout from "./index";

afterEach(() => cleanup());

describe("Layout", () => {
  test("Renders header", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const header = screen.getByTestId("layout-header");
    expect(header).toBeInTheDocument();
  });
});
