import { find } from 'lodash';

export function setSelectedUser(payload, state) {
  const { usersData } = state;
  const selectedUser = find(usersData, ['email', payload]);
  return {
    ...state,
    selectedUser: selectedUser ? selectedUser : null
  };
}
