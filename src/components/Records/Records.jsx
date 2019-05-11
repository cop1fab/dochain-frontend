import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Records.scss';
import sml from '../../assets/sml.png';
import search from '../../assets/search.png';
import copy from '../../assets/copy.png';
import { Link} from 'react-router-dom';

export class Records extends Component {
    render() {
        return (
            <div class="record">
                <header class="r-header">
                    <div className="left">
                        <Link to="/"><img src={logo} width="30px" height="40px" alt="" /></Link>
                        <div className="title">Background verification</div>
                        <div className="subtitle">Cross check individuals work and education history</div>
                    </div>
                    <div className="right">
                        <img src={sml} width="180px" height="auto" alt=""/>
                    </div>
                </header>

                <div className="middle">
                    <nav>
                        <div class="">Records</div>
                        <div class="active">New Record </div>
                    </nav>
                    <div className="search">
                        <input type="text" placeholder="Search for employees' records"/>
                       <div class="icon">
                        <img src={search} width="20px" height="20px" alt="" />
                       </div>
                    </div>
                    <div className="details">
                        <div><b>Employee's details</b></div>
                        <div><b>Name:</b> Grace Lungu</div>
                        <div><b>Title:</b> Designer</div>
                    </div>
                    <div className="title">RECORDS</div>
                    <div className="">
                        <div className="keys">

                            <table class="table">
                            <thead>
                                <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Company's Key</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>26/04/2019</td>
                                    <td>Designer</td>
                                    <td>MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AjANBgkqhkiG9w0BAQEFAAOCAg8A <img src={copy} width="15px" alt=""/></td>
                               </tr>
                            </tbody>
                            </table>

                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Records;