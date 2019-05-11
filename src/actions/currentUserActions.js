import * as types from '../actions-types/currentUserTypes';
import axios from '../helpers/axios';

export const setLoggingIn = payload => ({
  type: types.SET_LOGGING_IN,
  payload,
});

export const setCurrentUser = payload => ({
  type: types.SET_CURRENT_USER,
  payload,
});

export const handleLoginInput = payload => ({
  type: types.SET_LOGIN_INPUT,
  payload,
});

export const setLoginError = payload => ({
  type: types.SET_LOGIN_ERROR,
  payload,
});

export const setLoginFormError = payload => ({
  type: types.SET_LOGIN_FORM_ERROR,
  payload,
});

export const validateLoginInput = payload => dispatch =>
  new Promise(resolve => {
    const errors = {};
    let hasError = false;
    Object.keys(payload).forEach(key => {
      if (key === 'email') {
        errors[key] = !/\S+@\S+\.\S+/.test(payload[key]);
      } else {
        errors[key] = payload[key] === '';
      }
      if (errors[key]) {
        hasError = true;
      }
    });
    dispatch(setLoginFormError(errors));
    resolve(hasError);
  });

export const submitLogin = formData => dispatch => {
  dispatch(setLoggingIn(true));
  dispatch(setLoginError(''));
  return axios
    .post('/auth/login', formData)
    .then(res => {
      const { user, token } = res.data;
      localStorage.setItem('token', `Bearer ${token}`);
      dispatch(setCurrentUser({ ...user, token }));
      dispatch(setLoggingIn(false));
      return res;
    })
    .catch(err => {
      const { message = err.message } = err.response ? err.response.data : {};
      dispatch(setLoginError(message));
      dispatch(setLoggingIn(false));
      return err;
    });
};

export const submitSignup = formData => dispatch => {
  dispatch(setLoggingIn(true));
  dispatch(setLoginError());
  return axios
    .post('/auth/signup', formData)
    .then(res => {
      const { user, token } = res.data;
      localStorage.setItem('token', token);
      dispatch(setCurrentUser({ ...user, token }));
      dispatch(setLoggingIn(false));
      return res;
    })
    .catch(err => {
      const { message = err.message } = err.response ? err.response.data : {};
      dispatch(setLoginError(message));
      dispatch(setLoggingIn(false));
      return err;
    });
};

export const fetchCurrentUser = () => dispatch => {
  return axios
    .get('/auth/data')
    .then(res => {
      const { user } = res.data;
      dispatch(setCurrentUser(user));
      return res;
    })
    .catch(err => {
      dispatch(setCurrentUser({}));
      localStorage.removeItem('token');
      return err;
    });
};

export const logout = () => ({
  type: types.LOGOUT_CURRENT_USER,
});

export const submitLogout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(logout());
};
