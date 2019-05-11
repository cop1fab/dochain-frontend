import { currentUser as initialState } from '../store/initialState';
import * as types from '../actions-types/currentUserTypes';

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        data: payload,
        isAuth: payload.id !== undefined,
      };
    case types.CLEAR_LOGIN_FORM:
      return {
        ...state,
        loginForm: initialState.loginForm,
      };
    case types.SET_LOGGING_IN:
      return {
        ...state,
        loggingIn: payload,
      };
    case types.SET_LOGIN_INPUT:
      return {
        ...state,
        loginForm: { ...state.loginForm, [payload.name]: payload.value },
        loginFormError: initialState.loginFormError,
      };
    case types.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };
    case types.SET_LOGIN_FORM_ERROR:
      return {
        ...state,
        loginFormError: { ...state.loginFormError, ...payload },
      };
    case types.LOGOUT_CURRENT_USER:
      return { ...initialState, isAuth: false };
    default:
      return state;
  }
};

export default reducer;
