
backendURL = 'http://159.89.16.187:3000/';
// backendURL = 'http://localhost:3000';

Remote = DDP.connect(backendURL)
Meteor.call = function(){
	return Remote.call.apply(Remote, arguments);
};
Meteor.connection = Remote;
Accounts.connection = Meteor.connection;
Accounts.users = new Meteor.Collection('users', {
	connection: Remote
});

Users = Meteor.users;
Cards = new Meteor.Collection('cards');


Tracker.autorun(() => {
	Meteor.connection.subscribe('users');
	Meteor.connection.subscribe('cards');
});

