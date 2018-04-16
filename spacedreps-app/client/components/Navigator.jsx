
import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import SideMenu from './SideMenu.jsx';
import Login from './Login.jsx';

export default class Navigator extends React.Component {

  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;
    props.key = props._id || Random.id();
    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Ons.Navigator
        initialRoute={{component: SideMenu}}
        renderPage={this.renderPage.bind(this)}
      />
    );
  }
}
