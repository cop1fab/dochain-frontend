import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';
import logo from '../../assets/logo.png';

const TopNav = () => (
  <header>
    <div className="logo">
      <img src={logo} width="50px" alt="" />
    </div>
    <nav>
      <a class="btn  primary text-white">LOGIN</a>
      <a class="btn  is-outlined text-primary">REGISTER</a>
    </nav>
  </header>
);

export default TopNav;
