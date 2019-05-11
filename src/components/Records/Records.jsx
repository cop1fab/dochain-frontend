import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Records.scss';
import sml from '../../assets/sml.png';
import search from '../../assets/search.png';
import copy from '../../assets/copy.png';
import { Link } from 'react-router-dom';

export class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      token: localStorage.token,
    };
    this.getRecords = this.getRecords.bind(this);
    this.updateRecordsList = this.updateRecordsList.bind(this);
  }

  // componentDidMount() {
  //   this.getRecords().then(result => {
  //     this.setState({
  //       records: result.records,
  //     });
  //     console.log(result);
  //   });
  // }

  async getRecords(event) {
    event.preventDefault();

    this.publicKey = document.querySelector(
      'form[id="getRecords"] input',
    ).value;
    this.request = new Request(
      `${process.env.SERVER}/blockchains/${this.publicKey}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          authorization: `Bearer ${this.state.token}`,
        },
      },
    );

    const response = await fetch(this.request);
    const result = await response.json();

    if (result.records) {
      this.setState({
        records: result.records,
      });
      return result;
    }
    this.setState({
      records: [],
    });
    return { records: [] };
  }

  updateRecordsList() {
    this.getRecords().then(result => {
      this.setState({
        records: result.records,
      });
    });
  }

  render() {
    return (
      <div class="record">
        <header class="r-header">
          <div className="left">
            <Link to="/">
              <img src={logo} width="30px" height="40px" alt="" />
            </Link>
            <div className="title">Background verification</div>
            <div className="subtitle">
              Cross check individuals work and education history
            </div>
          </div>
          <div className="right">
            <img src={sml} width="180px" height="auto" alt="" />
          </div>
        </header>

        <div className="middle">
          <nav>
            <div class="">Records</div>
            <div class="active">New Record </div>
          </nav>
          <div className="search">
            <form id="getRecords" onSubmit={this.getRecords}>
              <input
                type="text"
                placeholder="Search for employees' records"
                id="seachBlock"
              />
            </form>
            <div class="icon" onClick={this.getRecords}>
              <img src={search} width="20px" height="20px" alt="" />
            </div>
          </div>
          <div className="details">
            <div>
              <b>Names :</b>{' '}
              {this.state.records.length ? this.state.records[0].data.name : ''}
            </div>
          </div>
          <div className="title">RECORDS</div>
          <div className="">
            <div className="keys">
              <table class="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Company's Key</th>
                  </tr>
                </thead>
                {this.state.records.length > 0
                  ? this.state.records.map(record => (
                      <tbody>
                        <tr>
                          <td>{new Date(record.createdAt).toDateString()}</td>
                          <td>{record.data.title}</td>
                          <td>{record.data.organization}</td>
                          <td>
                            {record.fromPublicKey.substring(0, 10)}
                            {'... '}
                            <img src={copy} width="15px" alt="" />
                          </td>
                        </tr>
                      </tbody>
                    ))
                  : ''}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Records;
