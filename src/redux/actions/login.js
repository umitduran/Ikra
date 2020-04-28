import {USER_LOGGED_IN} from './actionType';
export function userLoggedIn(userName) {
  return {
    type: USER_LOGGED_IN,
    payload: {
      userName,
    },
  };
}
