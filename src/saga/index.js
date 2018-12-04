import { call, put, takeEvery, select } from 'redux-saga/effects';


import * as actionsMainPage from '../actions/homeAction';


// import fetchJsonp from 'fetch-jsonp';
// import qs from 'qs';

// const API_URL = '';
// const APP_ID = '';

function* fetchDataSaga(action) {
  // const state = yield select();
  // const page = action.payload;

  // yield put(actions.startRequest(category))
  // const queryString = qs.stringify({})
  // const response = yield call(fetchJSON, `${API_URL}?${queryString}`);

  // if (response) {
  //   yield put(actions.receiveData(category, null, response))
  // }
  // else {
  //   yield put(actions.receiveData(category, response))
  // }
}



function* mySaga() {
  // yield takeEvery(actionTypes.FETCH_REQUEST, fetchDataSaga)
}
export default mySaga;


// async function fetchJSON(URL) {
//   try {
//     const response = await fetchJsonp(URL);
//     const data = await response.json();
//     return data;
//   }
//   catch (err) {
//     return err;
//   }
// }
