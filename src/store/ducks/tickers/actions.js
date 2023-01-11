import types from "./actionTypes";

const removeTicker = (payload) => ({
  type: types.REMOVE_TICKER,
  payload,
});

const removeTickerSuccess = (payload) => ({
  type: types.REMOVE_TICKER_SUCCESS,
  payload,
});

const addTicker = (payload) => ({
  type: types.ADD_TICKER,
  payload,
});

const addTickerSuccess = (payload) => ({
  type: types.ADD_TICKER_SUCCESS,
  payload,
});

const apiError = () => ({
  type: types.API_ERROR,
});

const actions = {
  removeTicker,
  removeTickerSuccess,
  addTicker,
  addTickerSuccess,
  apiError,
};

export default actions;
