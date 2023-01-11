import { all, fork } from "redux-saga/effects";

// Sagas
import { tickerSaga } from "../ducks/tickers";
import { intervalSaga } from "../ducks/interval";

export default function* rootSaga() {
  yield all([
    //ticker
    fork(tickerSaga),

    //interval
    fork(intervalSaga),
  ]);
}
