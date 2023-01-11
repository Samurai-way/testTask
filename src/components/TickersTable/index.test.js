import { render, screen, cleanup } from "@testing-library/react";
import TickersTable from "./index";
import { Provider } from "react-redux";
import store from "../../store";
import TickersElement from "./components/TickersElement";
import TickerTableHeader from "./components/TickerTableHeader";
import { tickerDetails } from "../../utils/values";

afterEach(() => cleanup());

describe("TickerTable", () => {
  test("Renders corrently", () => {
    render(
      <Provider store={store}>
        <TickersTable />
      </Provider>
    );

    expect(screen.getByTestId("ticker-table")).toBeInTheDocument();
    expect(screen.getByTestId("ticker-table-header")).toBeInTheDocument();
  });

  describe("TickerTableHeader", () => {
    test("Renders all elements", () => {
      render(<TickerTableHeader />);
      expect(screen.getAllByTestId("ticker-table-header-elem").length).toBe(
        tickerDetails.length
      );
    });
  });

  describe("TickerData", () => {
    test("Does no render ticker element if state is equal to an empty array", () => {
      render(
        <Provider store={store}>
          <TickersTable />
        </Provider>
      );
      expect(screen.queryAllByTestId("ticker-element").length).toBe(0);
    });

    describe("TickerElement", () => {
      test("Renders all field", () => {
        const tickerData = {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "253.87",
          change: "78.31",
          change_percent: "0.44",
          dividend: "0.19",
          yield: "1.26",
          last_trade_time: "2022-10-13T11:03:45.000Z",
        };
        render(<TickersElement data={tickerData} />);

        expect(screen.getByTestId("last_trade_time")).toBeInTheDocument();
        expect(screen.getByTestId("exchange")).toBeInTheDocument();
        expect(screen.getByTestId("ticker")).toBeInTheDocument();
        expect(screen.getByTestId("price")).toBeInTheDocument();
        expect(screen.getByTestId("change")).toBeInTheDocument();
        expect(screen.getByTestId("change-percent")).toBeInTheDocument();
        expect(screen.getByTestId("dividend")).toBeInTheDocument();
        expect(screen.getByTestId("yield")).toBeInTheDocument();
      });

      test("Has initial class name", () => {
        const tickerData = {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "253.87",
          change: "78.31",
          change_percent: "0.44",
          dividend: "0.19",
          vector: true,
          yield: "1.26",
          last_trade_time: "2022-10-13T11:03:45.000Z",
        };
        render(<TickersElement data={tickerData} />);

        expect(screen.getByTestId("ticker-element")).toHaveClass("table_grid");
      });

      test("Displays green color if positive vector", () => {
        const tickerData = {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "253.87",
          change: "78.31",
          change_percent: "0.44",
          dividend: "0.19",
          vector: true,
          yield: "1.26",
          last_trade_time: "2022-10-13T11:03:45.000Z",
        };
        render(<TickersElement data={tickerData} />);

        expect(screen.getByTestId("change-percent")).toHaveClass(
          "change_positive"
        );
      });

      test("Displays red color if negative vector", () => {
        const tickerData = {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "253.87",
          change: "78.31",
          change_percent: "0.44",
          dividend: "0.19",
          vector: false,
          yield: "1.26",
          last_trade_time: "2022-10-13T11:03:45.000Z",
        };
        render(<TickersElement data={tickerData} />);

        expect(screen.getByTestId("change-percent")).toHaveClass(
          "change_negative"
        );
      });
    });
  });
});
