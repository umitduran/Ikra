import {USER_LOGGED_IN} from '../actions/actionType';
const defaultState = {
  isUserLoggedIn: false,
  userName: '',
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        userName: action.payload.userName,
        isUserLoggedIn: true,
      };

    default:
      return state;
  }
};

export default loginReducer;
