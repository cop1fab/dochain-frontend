import { user as initialState } from '../store/initialState';
import * as types from '../actions-types/userTypes';

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING_USER:
      return {
        ...state,
        loadingUser: payload,
      };
    case types.SET_USER_FORM:
      return {
        ...state,
        userForm: payload,
      };
    case types.SET_USER_FORM_INPUT:
      return {
        ...state,
        userForm: {
          ...state.userForm,
          [payload.name]: payload.value,
        },
      };
    case types.SET_SUBMITTING_USER:
      return {
        ...state,
        submittingUser: payload,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        requestError: payload,
      };
    default:
      return state;
  }
};

export default reducer;
