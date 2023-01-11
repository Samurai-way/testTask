import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../../../components/buttons/ActionButton";
import { tickerActions } from "../../../../store/ducks/tickers";
import { tickers as defaultTickers } from "../../../../utils/values";

const TickerSelection = () => {
  const { tickers } = useSelector((state) => state.Tickers);

  return (
    <div
      className="tickers-selection settings-page_section"
      data-testid="ticker-selection"
    >
      <span className="section__heading">Tickers list</span>
      {defaultTickers.map((dt, idx) => (
        <TickerSelectionElement key={idx} tickers={tickers} dt={dt} />
      ))}
    </div>
  );
};

const TickerSelectionElement = ({ tickers, dt }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(tickers.includes(dt) && "active", "ticker-item")}
      data-testid="ticker-selection-item"
      key={dt}
    >
      <span
        className={classNames(
          tickers.includes(dt) ? "ticker-text_active" : "ticker-text"
        )}
      >
        {dt}
      </span>
      {tickers.includes(dt) ? (
        <ActionButton
          type="submit"
          onClick={() => dispatch(tickerActions.removeTicker(dt))}
        >
          Remove
        </ActionButton>
      ) : (
        <ActionButton
          type="submit"
          onClick={() => dispatch(tickerActions.addTicker(dt))}
        >
          Add
        </ActionButton>
      )}
    </div>
  );
};

export default TickerSelection;
