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
			 model: 'admin_user',
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
		 users: {
        collection: 'admin_user',
        through: 'admin_user_role',
        via: 'admin_role'
      }
		
	},
	
})