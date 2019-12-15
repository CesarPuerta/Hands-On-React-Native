import { takeLatest, put, select } from 'redux-saga/effects';

import {
  types,
  fetchUsersDetails as dispatchFetchUsersDetails,
  fetchUsersDetailsSuccess,
  fetchUsersDetailsFailure
} from 'home/store/actions';

export function* fetchUsersDetails({ payload }) {
  const users = yield select(state => state.usersDetails.usersData);
  try {
    const response = yield fetch(
      `https://randomuser.me/api/?page=${payload}&results=10&seed=1`
    ).then(res => res.json());

    const newUsers = payload === 1 ? response.results : [...users, ...response.results];
    const newResponse = {
      ...response,
      results: [...newUsers]
    };
    yield put(fetchUsersDetailsSuccess({ newResponse }));
  } catch (error) {
    yield put(fetchUsersDetailsFailure(error));
  }
}

export function* fetchUsersDetailsSaga() {
  yield takeLatest(types.FETCH_USERS__REQUEST, fetchUsersDetails);
}
