
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import SideMenu from './SideMenu';
import Register from './Register';

export default class Login extends React.Component {

  state = {
    email: '',
    password: '',
    authToken: null,
    userId: null,
    loading: false
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
		onsuccess = (r) => {
        authInfo = r.data;
        this.setState({'loading': false})
        localStorage.setItem('userId', authInfo.userId);
        localStorage.setItem('authToken', authInfo.authToken);
        this.setState({'userId': authInfo.userId, 'authToken': authInfo.authToken});
				localStorage.setItem('redirectedToLogin', 'no')
        ons.notification.toast('Login successful', {timeout: 1000});
        this.props.navigator.resetPage({component: SideMenu}, {animation: 'fade'});
		};
		onerror = (r) => {
    	this.setState({loading: false});
      ons.notification.toast(r.message, {timeout: 1000});
		};
		var body = { email: this.state.email, password: this.state.password };
		Globals.call('POST',BaseAPI+'/login',body,onsuccess, onerror);
	}

	handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
    this.setState({'userId': null, 'authToken': null});
	}

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Sign In</div>
      </Ons.Toolbar>
    );
  }

	render() {
		// if loading
		if(this.state.loading) return (<Ons.Page><Ons.ProgressBar indeterminate /></Ons.Page>);

		// otherwise show login screen
		return (
			<Ons.Page contentStyle={{padding: 10}} renderToolbar={this.renderToolbar.bind(this)}>
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
				<Ons.Button modifier="large" onClick={this.handleLogin.bind(this)}>Login</Ons.Button>
				<br /><br />
				<a href="#" onClick={() => {this.props.navigator.pushPage({component: Register})}}>No account yet? Register.</a>
				<br /><br />
				<a href="#" onClick={() => {document.location.href = document.location.href}}>
					Experiencing problems? Refresh app!
				</a>
			</Ons.Page>
		);
	}
}
