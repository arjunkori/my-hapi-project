'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port:3001});

server.route({
	method:'GET',
	path:'/',
	handler:function(request,reply){
		reply('Hello Arjun');
	}
});

server.route({
	method:'GET',
	path:'/{name}',
	handler:function(request,reply){
		reply('Hello ,'+request.params.name);
	}

});

server.start(()=>{
	console.log('Server running At',server.info.uri);
});