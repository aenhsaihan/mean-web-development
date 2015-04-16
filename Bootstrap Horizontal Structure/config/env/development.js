module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '694945120615750',
		clientSecret: '057528d493dc86d1e40d6c564b74d290',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '264759370654-mrj04q8fojtb3usiee9217fqpvic6ff5.apps.googleusercontent.com',
		clientSecret: '264759370654-mrj04q8fojtb3usiee9217fqpvic6ff5@developer.gserviceaccount.com',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};
