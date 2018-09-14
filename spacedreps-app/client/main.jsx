import { Meteor } from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Navigator from './components/Navigator.jsx';

Meteor.startup(() => {
	render(<Navigator />, document.getElementById('render-target'));
	localStorage.setItem('redirectedToLogin', 'no');
});

// add this to your meteor client
Meteor.startup(() => { 
	// var url = new URL(document.location.href);
	// var platform = url.searchParams.get('platform');
	// ons.platform.select(platform);
	function KeyPress(e) {
	      var evtobj = window.event? event : e
	      if (evtobj.keyCode == 84 && evtobj.ctrlKey) 
	      	window.open('http://lucnat.github.io/onsen-tuktuk');
	}
	document.onkeydown = KeyPress
});

// BaseURL = 'http://localhost:3030'; 
BaseURL = 'http://galacticgargleblaster.com';
BaseAPI = BaseURL + '/srapi/v1';

Globals = {
	authHeaders: { 
		'X-User-Id': localStorage.getItem('userId'),
		'X-Auth-Token': localStorage.getItem('authToken'),
		'Accept': 'application/json', 
		'Content-Type': 'application/json'
	},
	headers: { 
		'Accept': 'application/json', 
		'Content-Type': 'application/json'
	}
}

Globals.authCall = (method, URL, body, onsuccess, onerror) => {
    fetch(URL, {
    	method: method,
    	headers: Globals.authHeaders,
    	body: body ? JSON.stringify(body) : null
    })
    .then((response) => response.json()).then((r) => {
      if(r.status == 'error') {
      	if(onerror) onerror(r)
      	console.log(r.message);
      }
      else onsuccess(r);
    }).catch((error) => { console.error(error); });
};

Globals.call = (method, URL, body, onsuccess, onerror) => {
    fetch(URL, {
    	method: method,
    	headers: Globals.headers,
    	body: body ? JSON.stringify(body) : null
    })
    .then((response) => response.json()).then((r) => {
      if(r.status == 'error') {
      	if(onerror) onerror(r)
      	console.log(r.message);
      }
      else onsuccess(r);
    }).catch((error) => { console.error(error); });
};

