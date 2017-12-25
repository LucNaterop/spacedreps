import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import SideMenu from './SideMenu.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class Login extends React.Component {
	componentDidUpdate() {
		if(Meteor.user()) {
			this.props.navigator.resetPage({
				'component': SideMenu
			});
		}
	}
	renderToolbar() {
		return (
			<Ons.Toolbar>Sign in</Ons.Toolbar>
		);
	}
	render() {
		return (
			<Ons.Page contentStyle={{padding: 20}} renderToolbar={this.renderToolbar}>
				<h1> Welcome. </h1>
				<p> Please sign in </p>
				<AccountsUIWrapper />
			</Ons.Page>
		);
	}
}

export default createContainer(() => {
	return {
		currentUser: Meteor.user()
	};
}, Login);
