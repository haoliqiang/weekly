var     Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity:'admin_role',
	connection:'mysql',
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
		role_name:{
			type:'string',
			required:true
		},
		role_desc:{
			type:'string',
			required:true
		},
		is_system:{
			type:'string',
			required:true
		}
		,
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true,
			unique: true
		    },
		
		  roles: {
		    collection: 'admin_user_role',
		    references: 'admin_user_role',
		    on: 'admin_role_id',
		    via: 'admin_user_id'
		  }
		
	},
	
})