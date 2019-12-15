export const types = {
  FETCH_USERS__REQUEST: 'FETCH_USERS__REQUEST',
  FETCH_USERS__SUCCESS: 'FETCH_USERS__SUCCESS',
  FETCH_USERS__FAILURE: 'FETCH_USERS__FAILURE',
  SET_SELECTED_USER: 'SET_SELECTED_USER',
  UPDATE_PHOTO: 'UPDATE_PHOTO'
};

export const fetchUsersDetails = page => ({
  type: types.FETCH_USERS__REQUEST,
  payload: page
});

export const fetchUsersDetailsSuccess = response => ({
  type: types.FETCH_USERS__SUCCESS,
  payload: response
});

export const fetchUsersDetailsFailure = error => ({
  type: types.FETCH_USERS__FAILURE,
  payload: error
});

export const setSelectedUser = email => ({
  type: types.SET_SELECTED_USER,
  payload: email
});

export const updateSelectedUserPhoto = photo => ({
  type: types.UPDATE_PHOTO,
  payload: photo
});
