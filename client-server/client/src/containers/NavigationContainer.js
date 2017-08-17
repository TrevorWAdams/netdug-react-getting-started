import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { login, logout } from '../actions/authActions';

class NavigationContainer extends Component {
  render() {
    const { isLoggedIn, login, logout } = this.props;

    return <Header isLoggedIn={isLoggedIn} login={login} logout={logout} />;
  }
}

NavigationContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  NavigationContainer
);
