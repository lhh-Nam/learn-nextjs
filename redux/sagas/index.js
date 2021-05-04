import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const API = `https://jsonplaceholder.typicode.com/users`;

function getApi() {
  return fetch(API, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

function* fetchUser(action) {
  try {
    const user = yield call(getApi);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;
