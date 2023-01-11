import classNames from "classnames";

const TickersElement = ({ data }) => {
  const {
    last_trade_time,
    exchange,
    ticker,
    price,
    vector,
    change,
    change_percent,
    dividend,
    yield: tickerYield,
  } = data;

  const renderChangeColor = (vector) => {
    if (typeof vector !== "undefined") {
      return vector ? "change_positive" : "change_negative";
    }
  };

  return (
    <div key={ticker} className="table_grid" data-testid="ticker-element">
      <span className="table_grid__element" data-testid="last_trade_time">
        {new Date(last_trade_time).toLocaleString()}
      </span>
      <span className="table_grid__element" data-testid="exchange">
        {exchange}
      </span>
      <span className="table_grid__element" data-testid="ticker">
        {ticker}
      </span>
      <span className="table_grid__element" data-testid="price">
        {price}
      </span>
      <span className="table_grid__element" data-testid="change">
        {change}
      </span>
      <div
        className={classNames("table_grid__element", renderChangeColor(vector))}
        data-testid="change-percent"
      >
        {parseInt(change_percent * 100) + "%"}
      </div>
      <span className="table_grid__element" data-testid="dividend">
        {dividend}
      </span>
      <span className="table_grid__element" data-testid="yield">
        {tickerYield}
      </span>
    </div>
  );
};

export default TickersElement;
