import { put, takeEvery } from "redux-saga/effects";

import actions from "./actions";
import types from "./actionTypes";

function* changeIntervalSaga({ payload }) {
  try {
    yield put(actions.changeIntervalSuccess(payload));
  } catch {
    yield put(actions.apiError());
  }
}

function* intervalSaga() {
  yield takeEvery(types.CHANGE_INTERVAL, changeIntervalSaga);
}

export default intervalSaga;
