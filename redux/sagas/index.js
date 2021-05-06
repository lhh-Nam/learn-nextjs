import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { IMAGES } from "../NameAction";
import imagesSaga from "./imagesSaga";

// function* handleImagesLoad() {
//   console.log("fetching images");
// }

// function* rootSaga() {
//   yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }

// watcher saga -> actions -> worker saga

export default imagesSaga;
