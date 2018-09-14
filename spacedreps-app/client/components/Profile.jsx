
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ons from 'onsenui';
import * as Ons from 'react-onsenui';

import Login from './Login';

export default class Profile extends React.Component {

  handleLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    this.props.navigator.pushPage({component: Login}, {animation: 'none'});
  }

  render() {
    return (
      <Ons.Page contentStyle={{padding: 10}}>
        <p> You are logged in. </p>
        <Ons.Button onClick={this.handleLogout.bind(this)}>Logout</Ons.Button>
      </Ons.Page>
    );
  }

}

