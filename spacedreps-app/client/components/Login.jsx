
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import CardsList from './CardsList';
import Register from './Register';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			authToken: null,
			userId: null,
			loading: false
		};
	}
  componentDidMount() {
    // need to check if token valid, but we assume that now
    var authToken = localStorage.getItem('authToken');
    var userId = localStorage.getItem('userId');
    if(authToken) {
    	this.setState({userId: userId, authToken: authToken});
    }
  }
	handleLogin() {
		this.setState({loading: true});
    fetch(BaseAPI + '/login', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: this.state.email, password: this.state.password}),})
    .then((response) => response.json()).then((r) => {
      if(!r.status == 'success') {
      	this.setState({loading: false});
        ons.notification.toast(r.message, {timeout: 1000});
      }
      else {
        authInfo = r.data;
        this.setState({'loading': false})
        localStorage.setItem('userId', authInfo.userId);
        localStorage.setItem('authToken', authInfo.authToken);
        this.setState({'userId': authInfo.userId, 'authToken': authInfo.authToken});
        ons.notification.toast('Login successful', {timeout: 1000});
        document.location.href = document.location.href;
      }
    }).catch((error) => { console.error(error); });
	}
	handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
    this.setState({'userId': null, 'authToken': null});
	}

	render() {
		// if loading
		if(this.state.loading) return (<Ons.Page><Ons.ProgressBar indeterminate /></Ons.Page>);

		// if logged in
		if(this.state.authToken) return (
			<Ons.Page contentStyle={{padding: 20}} renderToolbar={this.renderToolbar}>
				<p> You are logged in. </p>
				<Ons.Button onClick={this.handleLogout.bind(this)}>Logout</Ons.Button> <br /> <br />
			</Ons.Page>
		)

		// otherwise show login screen
		return (
			<Ons.Page contentStyle={{padding: 20}}>
				<h1> Welcome. </h1>
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
				<Ons.Button onClick={this.handleLogin.bind(this)}>Login</Ons.Button>
				<br /><br />
				<Ons.Button onClick={() => {this.props.navigator.pushPage({component: Register})}}>No account yet? Register.</Ons.Button>

			</Ons.Page>
		);
	}
}
