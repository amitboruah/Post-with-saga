import { call, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";

const datafetch = () => {
  const res = axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    });
  return res;
};

const dataPost = (action) => {
  // console.log(action.payload,"saga")
  const res = axios
    .post("https://jsonplaceholder.typicode.com/posts", action.payload)
    .then((res) => {
      // console.log(res.data, "response");
      return res.data;
    });
  return res;
};

function* getItems() {
  const data = yield call(datafetch);
  yield put({ type: "GET_DATA_SUCCESS", data });
}

function* postItem(action) {
  const data = yield call(dataPost, action);
  console.log(data, "postdata from saga");
  yield put({ type: "POST_DATA_SUCCESS", data });
}

function* getSaga() {
  yield takeEvery("FETCH_DATA", getItems);
}

function* postSaga() {
  yield takeEvery("POST_DATA", postItem);
}

const mySaga = [fork(getSaga), fork(postSaga)];

export default mySaga;
