import { tickers } from "../../../utils/values";
import actions from "./actionTypes";

const initialState = {
  tickers: tickers,
  loading: false,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TICKER:
      return {
        ...state,
        loading: true,
      };
    case actions.ADD_TICKER_SUCCESS:
      return {
        ...state,
        tickers: action.payload,
        loading: false,
      };
    case actions.REMOVE_TICKER:
      return {
        ...state,
        loading: true,
      };
    case actions.REMOVE_TICKER_SUCCESS:
      return {
        ...state,
        tickers: action.payload,
        loading: false,
      };
    case actions.API_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default contact;
