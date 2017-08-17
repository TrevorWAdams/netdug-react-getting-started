import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isLoggedIn, login, logout } = this.props;

    return (
      <div className="header">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Simple Blog</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/posts">
                <NavItem>Posts</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              {isLoggedIn
                ? <NavItem onClick={logout}>Logout</NavItem>
                : <NavItem onClick={login}>Login</NavItem>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
