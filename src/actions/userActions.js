import * as types from '../actions-types/userTypes';
import axios from '../helpers/axios';
import { capitalize } from 'lodash';

export const setLoadingUsers = payload => ({
  type: types.SET_LOADING_USERS,
  payload,
});

export const setSubmittingUsers = payload => ({
  type: types.SET_SUBMITTING_USERS,
  payload,
});

export const setSubmittingSingleUser = payload => ({
  type: types.SET_SUBMITTING_SINGLE_USER,
  payload,
});

export const setUsersForm = payload => ({
  type: types.SET_USERS_FORM,
  payload,
});

export const fetchUsersSuccess = payload => ({
  type: types.FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = payload => ({
  type: types.FETCH_USERS_FAILURE,
  payload,
});

export const fetchUsers = ({ words, filterBy, page = 1 } = {}) => dispatch => {
  dispatch(setLoadingUsers(true));
  let url = `/users?page=${page}`;
  if (words) {
    url = `${url}&${filterBy || 'title'}=${words}`;
  }
  return axios(url)
    .then(({ data }) => {
      dispatch(
        fetchUsersSuccess({
          usersList: data.users,
          meta: {
            page: data.page,
            pages: data.pages,
            usersCount: data.usersCount,
          },
        }),
      );
      dispatch(setLoadingUsers(false));
      return data;
    })
    .catch(err => {
      dispatch(fetchUsersFailure(err.message));
      dispatch(setLoadingUsers(false));
      return err;
    });
};

export const submitUsers = (users = []) => dispatch => {
  dispatch(setSubmittingUsers(true));
  return axios
    .post('/users/bulk', { users })
    .then(({ data }) => {
      dispatch(
        fetchUsersSuccess({
          usersList: data.users,
          meta: {
            page: data.page,
            pages: data.pages,
            usersCount: data.usersCount,
          },
        }),
      );
      dispatch(setSubmittingUsers(false));
      return data;
    })
    .catch(err => {
      let error = err.message || '';
      if (err.response) {
        const { errors = [], message } = err.response.data;
        error = message || errors[0].message || error || '';
      }
      dispatch(fetchUsersFailure(capitalize(error.replace(/\"/g, ''))));
      dispatch(setSubmittingUsers(false));
      return err;
    });
};

export const setSingleUserForm = payload => ({
  type: types.SET_SINGLE_USER_FORM,
  payload,
});

export const setSingleUserFormInput = payload => ({
  type: types.SET_SINGLE_USER_FORM_INPUT,
  payload,
});

export const updateSingleUserSuccess = payload => ({
  type: types.UPDATE_SINGLE_USER_SUCCESS,
  payload,
});

export const updateSingleUserFailure = payload => ({
  type: types.UPDATE_SINGLE_USER_FAILURE,
  payload,
});

export const submitUser = user => dispatch => {
  dispatch(setSubmittingSingleUser(true));
  return axios
    .put(`/users/${user.username}`, { ...user })
    .then(({ data }) => {
      dispatch(updateSingleUserSuccess(data.user));
      dispatch(setSubmittingSingleUser(false));
      return data;
    })
    .catch(err => {
      let error = err.message || '';
      if (err.response) {
        const { errors = [], message } = err.response.data;
        error = errors.length > 0 ? errors[0].message : message || error || '';
      }
      dispatch(updateSingleUserFailure(capitalize(error.replace(/\"/g, ''))));
      dispatch(setSubmittingSingleUser(false));
      return err;
    });
};
