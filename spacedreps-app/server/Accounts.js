
Accounts.onCreateUser(function(options, user){
	if(!user.profile){
		user.profile = {};
	}
	user.profile.cardsCount = 0;
	return user;
});
