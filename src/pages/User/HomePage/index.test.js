import { render, screen } from "@testing-library/react";
import App from "../../../App";

describe("Home page", () => {
  test("Render ticker table in document", () => {
    render(<App />);
    const table = screen.getByTestId("ticker-table");
    expect(table).toBeInTheDocument();
  });
});
