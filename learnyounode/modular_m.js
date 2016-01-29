// arguments: 
//   - path
//   - extname
//   - callback

var fs = require('fs');
var path = require('path');


function myReadDir( pathstr, extname, callback ) {
	var content = fs.readdir( pathstr, function( err, list) { 
		if ( err ) 
			return callback( err );

		var filtered = list.filter( function( member ) { 
			return path.extname( member ) === "." + extname;
		});

		callback( null, filtered );
	});
}

module.exports = myReadDir;