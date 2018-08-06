import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const requestAllUsers = () => dispatch => {
  return UserAPIUtil.fetchAllUsers()
  .then(users => {
    dispatch(receiveAllUsers(users));
    return users;
  });
};

export const requestSingleUser = (user) => dispatch => {
  return UserAPIUtil.fetchSingleUser(user)
  .then(user => {
    dispatch(receiveSingleUser(user));
    return user;
  });
};
