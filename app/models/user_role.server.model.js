var     Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity:'admin_user_role',
	connection:'mysql',
	schema:true,
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
	   //            admin_role_id: {
		  // collection: 'admin_role',
    //   			via: 'roles'
		   
		  // },
		  // admin_user_id: {
		  //   collection: 'admin_user',
    //   			via: 'role'
		
		  // }

		 admin_role_id: {
		   columnName: 'admin_role_id',
		    type: 'integer',
		    foreignKey: true,
		    references: 'admin_role',
		    on: 'id'
		  },
		  admin_user_id: {
		    columnName: 'admin_user_id',
		    type: 'integer',
		    foreignKey: true,
		    references: 'admin_user',
		    on: 'id'
		  }
		
	},
	
})