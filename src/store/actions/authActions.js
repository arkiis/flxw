import * as actions from "../actions/actionTypes";
import axios from "axios";
export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // Send the verfication email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName: data.firstName,
        lastName: data.lastName
      });
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_ENDS });
};

// Logout action creators
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};

//Login action creator
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_ENDS });
};

//clean up messages
export const clean = () => ({
  type: actions.CLEAN_UP
});

//Sell tab active action creator
export const sellTab = () => {
  return {
    type: actions.SELL_TAB_ACTIVE
  };
};

export const setSellTab = sellTab => {
  return dispatch => {
    dispatch({
      type: "SET_SELL_TAB",
      sellTab
    });
  };
};

// verify email actionTypes
export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  dispatch({ type: actions.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: actions.VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.VERIFY_FAIL, payload: err.message });
    console.log(err.message);
  }
};

// Send recovery password
export const recoverPassword = data => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  dispatch({ type: actions.RECOVERY_START });
  try {
    // send email here
    await firebase.auth().sendPasswordResetEmail(data.email);

    dispatch({ type: actions.RECOVERY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.RECOVERY_FAIL, payload: err.message });
  }
};

//recieve crpyto data
export const fetchingCryptoStart = () => ({
  type: actions.FETCHING_CRYPTO_START
});

export const fetchingCrpyotSuccess = json => ({
  type: actions.FETCHING_CRYPTO_SUCCESS,
  payload: json
});

export const fetchingCryptoFail = error => ({
  type: actions.FETCHING_CRYPTO_FAIL,
  payload: error
});

export function fetchCrypto() {
  let request = axios
    .get(
      "https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=BTC,ETH,XRP,BCH,LTC,EOS&interval=1d,30d"
    )
    .then(response => response.data);

  return {
    type: "FETCHING_CRYPTO_SUCCESS",
    payload: request
  };
}
