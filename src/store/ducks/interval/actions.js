import types from "./actionTypes";

const changeInterval = (payload) => ({
  type: types.CHANGE_INTERVAL,
  payload,
});

const changeIntervalSuccess = (payload) => ({
  type: types.CHANGE_INTERVAL_SUCCESS,
  payload,
});

const apiError = () => ({
  type: types.API_ERROR,
});

const actions = {
  changeInterval,
  changeIntervalSuccess,
  apiError,
};

export default actions;
