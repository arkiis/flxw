import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import CryptoReducer from "./cryptoReducer";

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  crypto: CryptoReducer
});
