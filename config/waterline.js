const     Waterline = require('waterline'),
               mysqlAdapter = require('sails-mysql'),
	config =require('./config'),
	users = require('../app/models/users.server.model'),
	role = require('../app/models/role.server.model'),
	userole = require('../app/models/user_role.server.model'),
	useteam = require('../app/models/user_team_like.server.model'),
	team = require('../app/models/teams.server.model'),
	
	orm = new Waterline();
	wlconfig = {
		adapters: {
		mysql:mysqlAdapter,
		default:'mysql'
		},
		connections:{
		 	mysql:{
		 		adapter:'mysql',
		 		url : config.mysql

		 	}
		 }
	};
orm.loadCollection(users);
orm.loadCollection(role);
orm.loadCollection(userole);
orm.loadCollection(useteam);
orm.loadCollection(team);



exports.wlconfig =wlconfig;
exports.orm = orm;
