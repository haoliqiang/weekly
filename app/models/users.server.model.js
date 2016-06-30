var     Waterline = require('waterline');


module.exports = Waterline.Collection.extend({
	identity:'admin_user',
	connection:'mysql',
	schema:true,
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
		 
		name:{
			type:'string',
			required:true
		},
		email:{
			type:'string',
			required:true
		},
		username:{
			type:'string',
			required:true
		},
		password:{
			type:'string',
			required:true
		},
		is_enabled:{
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
		   
		role: {
		    collection: 'admin_user_role',
		    references: 'admin_user_role',
		    on: 'admin_user_id',
		    via: 'admin_role_id'
		  }
		
	},
	
})