var conn = DDP.connect('http://localhost:3000');

Users = new Mongo.Collection('users', conn);
Cards = new Mongo.Collection('cards', conn);

Tracker.autorun(() => {
	conn.subscribe('cards');
});

