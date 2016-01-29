var fs = require('fs');
var path = require('path');

fs.readdir( process.argv[2], function ( err, list ) { 
	if ( err ) throw err;

	var filtered = list.filter( function ( member ) { 
		return path.extname(member) === ('.' + process.argv[3]);
	});

	for (var i=0; i<filtered.length; i++)
		console.log( filtered[i] );
});