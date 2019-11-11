import { SELL_TAB_ACTIVE } from "../actions/actionTypes";

const initialState = {
  sellTab: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELL_TAB_ACTIVE:
      return { ...state, sellTab: !state.sellTab };

    default:
      return state;
  }
};
