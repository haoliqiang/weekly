var     Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity:'users',
	connection:'mysql',
	schema:true,
	attributes:{
		login_name:{
			type:'string',
			required:true
		},
		password:{
			type:'string',
			required:true
		},
		name:{
			type:'string',
			required:true
		},
		team:{
			type:'string',
			required:true
		},
		job:{
			type:'string',
			required:true
		}
	},
	// beforeCreate: function(value, cb) {
	// 	value.createTime = new Date();
	// 	console.log('beforeCreate executed');
	// 	return cb();
	// }
})