import {
  FETCHING_CRYPTO_START,
  FETCHING_CRYPTO_SUCCESS,
  FETCHING_CRYPTO_FAIL
} from "../actions/actionTypes";

// const initialState = {
//   isFetching: false,
//   errorMessage: "",
//   cryptoList: []
// };

const CryptoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCHING_CRYPTO_START:
      return { ...state, isFetching: true };
    case FETCHING_CRYPTO_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    case FETCHING_CRYPTO_SUCCESS:
      return { ...state, isFetching: false, fetchCrypto: action.payload };
    default:
      return state;
  }
};

export default CryptoReducer;
