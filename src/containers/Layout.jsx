import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav/TopNav';
import './Layout.scss';

const Layout = ({ children, match }) => (
  <div>
    <TopNav match={match} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  match: PropTypes.any,
};

Layout.defaultProps = {
  children: '',
  match: { params: {} },
};

export default Layout;
