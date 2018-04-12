
backendURL = 'http://159.89.16.187:3000/';
// backendURL = 'http://localhost:3000';

var conn = DDP.connect(backendURL);

Users = new Mongo.Collection('users', conn);
Cards = new Mongo.Collection('cards', conn);

Tracker.autorun(() => {
	conn.subscribe('cards');
});

