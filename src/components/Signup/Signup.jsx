import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Signup.scss';
import TopNav from '../TopNav/TopNav';
import Input from '../common/Input/Input';
import Logo from '../../assets/images/logo.png';
import {
  handleLoginInput,
  submitSignup,
  validateLoginInput,
  setLoginError,
} from '../../actions/currentUserActions';

export class Login extends Component {
  onSubmitForm = e => {
    e.preventDefault();
    const { submitLoginForm, loginForm, validateInput } = this.props;
    loginForm.type = document.querySelector('select[name="type"]').value;
    validateInput(loginForm).then(hasError => {
      if (!hasError) {
        submitLoginForm(loginForm).then(res => {
          if (res.status === 200) {
            window.location.href = '/';
          }
        });
      }
    });
  };

  renderNotification = () => {
    const { loginError, clearError } = this.props;

    if (!loginError) return '';
    return (
      <div className="notification is-danger">
        <button className="delete" onClick={clearError} />
        {loginError}
      </div>
    );
  };

  render() {
    const {
      loginForm,
      loginFormError,
      loggingIn,
      handleInput,
      match,
    } = this.props;
    return (
      <section className="hero is-fullheight">
        <TopNav match={match} />
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="auth-container">
                  <img src={Logo} className="logo" alt="logo" />
                  <div className="error-container">
                    {this.renderNotification()}
                  </div>
                  <h1 className="title">Register</h1>
                  <form action="" onSubmit={this.onSubmitForm}>
                    <div className="field">
                      <p className="control has-icons-right">
                        <label htmlFor="type">Accout type</label>
                        <select name="type" className="input">
                          <option value="user" hidden>
                            Individual
                          </option>
                          <option value="organization">Organization</option>
                        </select>
                        <span className="icon is-small is-right">
                          <i className="fa fa-at" />
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-right">
                        <Input
                          name="email"
                          className={`input ${
                            loginFormError.email ? 'is-danger' : ''
                          }`}
                          type="text"
                          value={loginForm.email}
                          placeholder="email"
                          onChange={handleInput}
                          required
                        />
                        <span className="icon is-small is-right">
                          <i className="fa fa-at" />
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-right">
                        <Input
                          name="password"
                          className={`input ${
                            loginFormError.password ? 'is-danger' : ''
                          }`}
                          type="password"
                          placeholder="Password"
                          value={loginForm.password}
                          onChange={handleInput}
                          required
                        />
                        <span className="icon is-small is-right">
                          <i className="fa fa-lock" />
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-right">
                        <Input
                          name="passwordTwo"
                          className={`input ${
                            loginFormError.password ? 'is-danger' : ''
                          }`}
                          type="password"
                          placeholder="Retype Password"
                          required
                        />
                        <span className="icon is-small is-right">
                          <i className="fa fa-lock" />
                        </span>
                      </p>
                    </div>
                    <button
                      data-el="login-btn"
                      onClick={this.onSubmitForm}
                      className={`button primary fill${
                        loggingIn ? ' is-loading' : ''
                      }`}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginForm: PropTypes.object.isRequired,
  loginFormError: PropTypes.object.isRequired,
  loginError: PropTypes.string.isRequired,
  loggingIn: PropTypes.bool,
  submitLoginForm: PropTypes.func.isRequired,
  validateInput: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

Login.defaultProps = {
  loggingIn: false,
};

export const mapStateToProps = ({
  currentUser: { loggingIn, loginForm, loginFormError, loginError },
}) => ({
  loggingIn,
  loginForm,
  loginFormError,
  loginError,
});

export const mapDispatchToProps = dispatch => ({
  handleInput: ({ target }) => dispatch(handleLoginInput(target)),
  submitLoginForm: payload => dispatch(submitSignup(payload)),
  validateInput: payload => dispatch(validateLoginInput(payload)),
  clearError: () => dispatch(setLoginError('')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
