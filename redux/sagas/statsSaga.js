import { put, take, fork, call } from "redux-saga/effects";
import { IMAGES } from "../NameAction";
import {
  loadImageStats,
  setImageStats,
  setImageStatsError,
} from "../actions/StatsAction";
import { fetchImageStats } from "../../api";

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id));
      const res = yield call(fetchImageStats, id);
      console.log("🚀 ~ res", res.downloads.total);

      yield put(setImageStats(id, res.downloads.total));
      return true;
    } catch (error) {}
  }

  yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchStatsRequest;
