import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import rootSaga from "../../../store/helpers/sagas";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SettingsPage from ".";
import { tickers as defaultTickers } from "../../../utils/values";
import store from "../../../store";
import { tickerActions } from "../../../store/ducks/tickers";
import createSagaMiddleware from "redux-saga";
import reducers from "../../../store/helpers/reducers";
import { intervalActions } from "../../../store/ducks/interval";
import ContextProviders from "../../../context";

beforeEach(() => cleanup());

describe("Settings page", () => {
  test("Renders correctly", () => {
    const history = createMemoryHistory({ initialEntries: ["/settings"] });
    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <ContextProviders>
            <SettingsPage />
          </ContextProviders>
        </Provider>
      </Router>
    );

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByTestId("ticker-selection")).toBeInTheDocument();
  });

  describe("Ticker selection", () => {
    test("Renders default tickers for selection", () => {
      const history = createMemoryHistory({
        initialEntries: ["/settings"],
      });
      render(
        <Router location={history.location} navigator={history}>
          <Provider store={store}>
            <ContextProviders>
              <SettingsPage />
            </ContextProviders>
          </Provider>
        </Router>
      );

      expect(screen.queryAllByTestId("ticker-selection-item").length).toBe(
        defaultTickers.length
      );
    });

    test("Adds ticker after select click", () => {
      const history = createMemoryHistory({
        initialEntries: ["/settings"],
      });
      render(
        <Router location={history.location} navigator={history}>
          <Provider store={store}>
            <ContextProviders>
              <SettingsPage />
            </ContextProviders>
          </Provider>
        </Router>
      );

      const sagaMiddleware = createSagaMiddleware();
      const mockStore = configureMockStore([sagaMiddleware])(reducers);
      sagaMiddleware.run(rootSaga);

      mockStore.dispatch(tickerActions.removeTicker(defaultTickers[0]));
      mockStore.dispatch(tickerActions.addTicker(defaultTickers[0]));

      const testAction = { type: "app/tickers/ADD_TICKER", payload: "AAPL" };
      expect(mockStore.getActions()).toContainEqual(testAction);
    });

    test("Removes ticker after remove click", () => {
      const history = createMemoryHistory({
        initialEntries: ["/settings"],
      });
      render(
        <Router location={history.location} navigator={history}>
          <Provider store={store}>
            <ContextProviders>
              <SettingsPage />
            </ContextProviders>
          </Provider>
        </Router>
      );

      const sagaMiddleware = createSagaMiddleware();
      const mockStore = configureMockStore([sagaMiddleware])(reducers);
      sagaMiddleware.run(rootSaga);

      mockStore.dispatch(tickerActions.removeTicker(defaultTickers[0]));

      const testAction = { type: "app/tickers/REMOVE_TICKER", payload: "AAPL" };
      expect(mockStore.getActions()).toContainEqual(testAction);
    });
  });

  describe("Interval selection", () => {
    test("Changes interval on submit", () => {
      const history = createMemoryHistory({
        initialEntries: ["/settings"],
      });
      render(
        <Router location={history.location} navigator={history}>
          <Provider store={store}>
            <ContextProviders>
              <SettingsPage />
            </ContextProviders>
          </Provider>
        </Router>
      );

      const sagaMiddleware = createSagaMiddleware();
      const mockStore = configureMockStore([sagaMiddleware])(reducers);
      sagaMiddleware.run(rootSaga);

      mockStore.dispatch(intervalActions.changeInterval(4000));

      const testAction = {
        type: "app/interval/CHANGE_INTERVAL",
        payload: 4000,
      };
      expect(mockStore.getActions()).toContainEqual(testAction);
    });
  });
});
