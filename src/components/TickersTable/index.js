import React from "react";
import TickersData from "./components/TickersData";
import TickerTableHeader from "./components/TickerTableHeader";
import "./styles.scss";

const TickerTable = () => {
  return (
    <div className="ticker-table" data-testid="ticker-table">
      <TickerTableHeader />
      <TickersData />
    </div>
  );
};

export default TickerTable;
