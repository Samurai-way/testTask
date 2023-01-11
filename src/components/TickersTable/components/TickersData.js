import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../../../utils/socket";
import { endPolling, startPolling } from "../../../utils/socketActions";
import TickersElement from "./TickersElement";

const TickersData = () => {
  const [tickersData, setTickersData] = useState(null);
  const { tickers } = useSelector((state) => state.Tickers);
  const { interval } = useSelector((state) => state.Interval);

  const updateTickers = (data) => {
    setTickersData((currTickers) => {
      const filteredTickers = data.filter((ticker) =>
        tickers?.includes(ticker.ticker)
      );

      return filteredTickers.map((ticker) =>
        currTickers
          ? {
              ...ticker,
              vector: !!(
                currTickers.find((t) => t.ticker === ticker.ticker)?.price <
                ticker.price
              ),
            }
          : {
              ...ticker,
            }
      );
    });
  };

  useEffect(() => {
    startPolling(interval);

    socket.on("ticker", (data) => {
      updateTickers(data);
    });

    return () => {
      if (socket.connected) {
        endPolling();
      }
    };
    //eslint-disable-next-line
  }, []);

  return tickersData?.map((ticker) => (
    <TickersElement key={ticker.ticker} data={ticker} />
  ));
};

export default TickersData;
