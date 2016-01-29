var fs = require('fs');

var content;

fs.readFile( process.argv[2], function ( err, data ) { 
	if ( err ) throw err;
	
	console.log( data.toString().split('\n').length - 1 );
});