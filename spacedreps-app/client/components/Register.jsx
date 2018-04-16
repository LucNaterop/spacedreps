
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			loading: false
		};
	}

	handleRegister() {
		this.setState({loading: true});
    fetch(BaseAPI + '/register', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: this.state.email, password: this.state.password}),})
    .then((response) => response.json()).then((r) => {
      if(!r.status == 'success') {
      	this.setState({loading: false});
        ons.notification.toast(r.message, {timeout: 1000});
      }
      else {
      	setTimeout(() => {
	      	this.setState({loading: false});
	        ons.notification.toast(r.message, {timeout: 1000});
      	},1000) 
      }
    }).catch((error) => { console.error(error); });
	}

	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className="left"><Ons.BackButton>Back</Ons.BackButton></div>
				<div className="center">Register</div>
			</Ons.Toolbar>
		);
	}

	render() {
		// if loading
		if(this.state.loading) return (<Ons.Page><Ons.ProgressBar indeterminate /></Ons.Page>);
		return (
			<Ons.Page contentStyle={{padding: 20}} renderToolbar={this.renderToolbar.bind(this)}>
				<Ons.Input
					modifier='underbar'
					value={this.state.email}
					onChange={(e) => {this.setState({email: e.target.value})}}
					placeholder='email'
				/>
				<br />
				<Ons.Input
					type='password'
					modifier='underbar'
					value={this.state.password}
					onChange={(e) => {this.setState({password: e.target.value})}}
					placeholder='password'
				/>
				<br /><br />
				<Ons.Button onClick={this.handleRegister.bind(this)}>Register</Ons.Button>
			</Ons.Page>
		);
	}
}
