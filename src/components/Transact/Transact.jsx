import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-reader';
import './Transact.scss';
import logo from '../../assets/logo.png';
import axios from '../../helpers/axios';

const initialForm = {
  toPublicKey: '',
  fromDate: '',
  toDate: '',
  names: '',
  title: '',
};
export class Transact extends Component {
  state = {
    result: 'no result',
    submitting: false,
    scan: false,
    form: initialForm,
    formError: {
      toPublicKey: '',
      fromDate: '',
      names: '',
      title: '',
    },
  };

  toggleCamera = e => {
    e.preventDefault();
    this.setState({
      scan: !this.state.scan,
    });
  };

  handleScan = data => {
    if (data) {
      this.setState({
        form: {
          ...this.state.form,
          toPublicKey: data,
        },
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  handleInput = ({ target }) => {
    const { form } = this.state;
    console.log(target.name);
    this.setState({
      form: {
        ...form,
        [target.name]: target.value,
      },
    });
  };

  validateInput = e => {
    e.preventDefault();
    const { form, formError } = this.state;
    this.setState({
      submitting: true,
    });
    let hasError = false;
    Object.keys(form).forEach(key => {
      formError[key] = form[key] === '';
      if (formError[key]) {
        hasError = true;
      }
    });

    this.setState({
      formError,
    });

    if (!hasError) {
      axios
        .post('/blockchains', {
          data: { ...form, toPublicKey: undefined },
          toPublicKey: form.toPublicKey,
        })
        .then(res => {
          this.setState({ form: initialForm });
        });
    }
    setTimeout(() => {
      this.setState({
        submitting: false,
      });
    }, 3000);
  };
  render() {
    const { scan, form, submitting, formError } = this.state;
    return (
      <div className="container">
        <header>
          <Link to="/">
            <img src={logo} width="40px" height="auto" alt="" />
          </Link>
        </header>
        <div className="body">
          {scan ? (
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
          ) : (
            ''
          )}

          <div className="top">
            <div className="selected">New record</div>
            {/* <div>Records</div> */}
          </div>
          <div className="title">New record</div>
          <form action="">
            <div className="columns is-multiline">
              <div className="column is-6">
                <div className="field">
                  <div className="label">From</div>
                  <div className="control">
                    <input
                      className={`input is-medium ${
                        formError.fromDate ? 'is-danger' : ''
                      }`}
                      type="date"
                      name="fromDate"
                      onChange={this.handleInput}
                      value={form.fromDate}
                    />
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <div className="label">To</div>
                  <div className="control">
                    <input
                      className={`input is-medium ${
                        formError.toDate ? 'is-danger' : ''
                      }`}
                      type="date"
                      name="toDate"
                      onChange={this.handleInput}
                      value={form.toDate}
                    />
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <div className="label">
                    Address{' '}
                    <button onClick={this.toggleCamera}>
                      <i className="fa fa-camera" />
                    </button>
                  </div>
                  <div className="control">
                    <input
                      className={`input is-medium ${
                        formError.toPublicKey ? 'is-danger' : ''
                      }`}
                      type="text"
                      placeholder="Public Key"
                      name="toPublicKey"
                      onChange={this.handleInput}
                      value={form.toPublicKey}
                    />
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <div className="label">Name of the employee</div>
                  <div className="control">
                    <input
                      className={`input is-medium ${
                        formError.names ? 'is-danger' : ''
                      }`}
                      type="text"
                      placeholder="Person's names"
                      name="names"
                      onChange={this.handleInput}
                      value={form.names}
                    />
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field">
                  <div className="label">Title</div>
                  <div className="control">
                    <input
                      className={`input is-medium ${
                        formError.title ? 'is-danger' : ''
                      }`}
                      type="text"
                      placeholder="ex: Designer, Developer"
                      name="title"
                      onChange={this.handleInput}
                      value={form.title}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={this.validateInput}
              className={`button primary text-white ${
                submitting ? 'is-loading' : ''
              }`}
            >
              ADD RECORD
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Transact;
