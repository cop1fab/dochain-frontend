import { combineReducers } from 'redux';
import user from './userReducer';
import currentUser from './currentUserReducer';

const reducers = combineReducers({
  currentUser,
  user,
});

export default reducers;
