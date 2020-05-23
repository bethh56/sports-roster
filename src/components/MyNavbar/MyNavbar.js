import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Sports Roster</a>
                {
                  authed
                    ? <button className="nav-link btn btn-dark text-white ml-auto" onClick={this.logMeOut}>Logout</button>
                    : ''
                }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
