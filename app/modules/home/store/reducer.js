import { types } from './actions';
import { setSelectedUser } from './selectors';

export const initialState = {
  requestInProgress: false,
  usersData: null,
  selectedUser: null,
  pagination: {
    page: 1
  }
};

export default (state = initialState, { type, payload }) => {
  const { selectedUser } = state;
  switch (type) {
    case types.FETCH_USERS__REQUEST:
      return {
        ...state,
        requestInProgress: true
      };
    case types.FETCH_USERS__SUCCESS:
      return {
        ...state,
        usersData: payload.newResponse.results,
        pagination: payload.newResponse.info,
        requestInProgress: false
      };

    case types.FETCH_USERS__FAILURE:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false
      };

    case types.SET_SELECTED_USER:
      return setSelectedUser(payload, state);

    case types.UPDATE_PHOTO:
      return {
        ...state,
        selectedUser: {
          ...selectedUser,
          picture: {
            ...selectedUser.picture,
            large: payload
          }
        }
      };
    default:
      return state;
  }
};
