import { put, takeEvery, select } from "redux-saga/effects";

import actions from "./actions";
import types from "./actionTypes";

const getTickers = (state) => state.Tickers;

function* addTickerSaga({ payload }) {
  try {
    const tickers = yield select(getTickers);
    const modifiedTickers = [...tickers.tickers, payload];
    yield put(actions.addTickerSuccess(modifiedTickers));
  } catch {
    yield put(actions.apiError());
  }
}

function* removeTickerSaga({ payload }) {
  try {
    const tickers = yield select(getTickers);
    const modifiedTickers = tickers.tickers.filter(
      (ticker) => ticker !== payload
    );
    yield put(actions.addTickerSuccess(modifiedTickers));
  } catch {
    yield put(actions.apiError());
  }
}

function* tickerSaga() {
  yield takeEvery(types.ADD_TICKER, addTickerSaga);
  yield takeEvery(types.REMOVE_TICKER, removeTickerSaga);
}

export default tickerSaga;
