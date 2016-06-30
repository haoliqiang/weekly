var     Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity:'admin_user_team_like',
	connection:'mysql',
	schema:true,
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
	              admin_user_team_id: {
		  model: 'admin_user_team'
		   
		  },
		  admin_user_id: {
		    model: 'admin_user'		
		  }

		 
		
	},
	
})