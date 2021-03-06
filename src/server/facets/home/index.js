exports.register = function(server, options, next) {

	var ws = server.plugins['webservice-adapter'];
	var home = require('./Home')(ws);

	// Define the routes
	server.route({
		method: 'GET',
		path: '/',
		handler: function(request, reply) {

			home.getContent(function(content) {
				reply.view('home', content);
			});
		}
	});

	next();
}

exports.register.attributes = {
	name: 'project-home'
}
