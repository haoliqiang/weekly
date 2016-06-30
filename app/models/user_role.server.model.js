var     Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity:'admin_user_role',
	connection:'mysql',
	schema:true,
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
	              admin_role_id: {
		  model: 'admin_role'
		   
		  },
		  admin_user_id: {
		    model: 'admin_user'		
		  }

		 // admin_role_id: {
		 //   columnName: 'admin_role_id',
		 //    type: 'integer',
		 //    foreignKey: true,
		 //    references: 'admin_role',
		 //    on: 'id'
		 //  },
		 //  admin_user_id: {
		 //    columnName: 'admin_user_id',
		 //    type: 'integer',
		 //    foreignKey: true,
		 //    references: 'admin_user',
		 //    on: 'id'
		 //  }
		
	},
	
})