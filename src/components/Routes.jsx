import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import UserQRCode from './Account/UserQRCode';

export const Routes = ({ isAuth }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/login"
      render={props => (!isAuth ? <Login {...props} /> : <Redirect to="/" />)}
    />
    <Route
      exact
      path="/signup"
      render={props => (!isAuth ? <Signup {...props} /> : <Redirect to="/" />)}
    />
    <Route
      exact
      path="/qrcode/:publicKey"
      render={props =>
        isAuth ? <Login {...props} /> : <UserQRCode {...props} />
      }
    />
  </Switch>
);

Routes.propTypes = {
  isAuth: PropTypes.bool,
};

Routes.defaultProps = {
  isAuth: false,
};

export const mapStateToProps = ({ currentUser: { isAuth } }) => ({
  isAuth,
});

export default connect(mapStateToProps)(Routes);
