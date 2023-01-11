import React from "react";
import { tickerDetails } from "../../../utils/values";

const TickerTableHeader = () => {
  return (
    <div
      className="ticker-table__header table_grid"
      data-testid="ticker-table-header"
    >
      {tickerDetails.map((t) => (
        <span
          key={t}
          className="table_grid__element"
          data-testid="ticker-table-header-elem"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

export default TickerTableHeader;
