var readdir = require('./modular_m.js');

readdir( process.argv[2], process.argv[3], function( err, data ) { 
	if ( err ) 
		return console.error( "Error : ", err );

	data.forEach( function( m ) {
		console.log( m );
	});
});