var total = 0;

var arguments = process.argv;

if ( arguments.length > 2 ) {
   for (var i=2; i<arguments.length; i++ )
	total += Number(arguments[i]);
}

console.log( total );