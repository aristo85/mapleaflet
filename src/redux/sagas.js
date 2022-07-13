import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchRandomPoints } from "./Api";

import {
  FETCH_RANDOM_DATA,
  FETCH_RANDOM_DATA_FILED,
  FETCH_RANDOM_DATA_SUCCEEDED,
} from "./const";

export function* fetchRandomData() {
  try {
    const randomData = yield call(fetchRandomPoints);
    yield put({ type: FETCH_RANDOM_DATA_SUCCEEDED, data: randomData });
  } catch (e) {
    yield put({ type: FETCH_RANDOM_DATA_FILED, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_RANDOM_DATA, fetchRandomData);
}

export default mySaga;
