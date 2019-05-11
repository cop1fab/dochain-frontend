import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../containers/Layout';

export class Home extends Component {
  render() {
    const { match } = this.props;
    return (
      <Layout match={match}>
      </Layout>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object.isRequired,
};

export default connect(
  null,
  null,
)(Home);
