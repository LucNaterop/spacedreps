
import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Profile extends React.Component {
	render() {
		return (
			<Ons.Page contentStyle={{padding: 20}}>
				<h2>Profile</h2>
				<AccountsUIWrapper />
			</Ons.Page>
		);	
	}
}
