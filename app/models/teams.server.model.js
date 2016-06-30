var     Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity:'admin_user_team',
	connection:'mysql',
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
		team_name:{
			type:'string',
			required:true
		},
		parent_id:{
			type:'string',
			required:true
		},
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true,
			unique: true
		    },
		 users: {
	        collection: 'admin_user',
	        through: 'admin_user_team_like',
	        via: 'admin_user_team'
	      }
		 
		
	},
	
})