import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Transact.scss';
import logo from '../../assets/logo.png';

export class Transact extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img src={logo} width="40px" height="auto" alt="" />
          </Link>
        </header>
        <div class="body">
          <div className="top">
            <div class="selected">New record</div>
            {/* <div>Records</div> */}
          </div>
          <div className="form">
            <div className="title">New record</div>
            <form action="">
              <div class="left">
                <div className="bx">
                  <div className="label">Address</div>
                  <input type="text" placeholder="Public Key" />
                </div>
                <div className="bx">
                  <div className="label">Name of the employee</div>
                  <input type="text" />
                </div>
                <div className="bx">
                  <div className="label">Title</div>
                  <input type="text" placeholder="ex: Designer, Developer" />
                </div>
              </div>
              <div>
                <div className="bx">
                  <div className="label">From</div>
                  <input type="date" />
                </div>
                <div className="bx">
                  <div className="label">To</div>
                  <input type="date" />
                </div>
                <a class="btn primary text-white ">ADD RECORD</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Transact;
