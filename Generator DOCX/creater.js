var fs = require('fs');
var zip = new require('node-zip')();

var fields = {
	title_doc_ru: '[TITLE_DOC_RU]',
	content_title_ru: '[CONTENT_TITLE_RU]',
	content_doc_ru: '[CONTENT_DOC_RU]',
	percentage_ru: '[PERCENTAGE_RU]',
	supplier_ru: '[SUPPLIER_RU]',
	title_doc_kz: '[TITLE_DOC_KZ]',
	content_title_kz: '[CONTENT_TITLE_KZ]',
	content_doc_kz: '[CONTENT_DOC_KZ]',
	percentage_kz: '[PERCENTAGE_KZ]',
	supplier_kz: '[SUPPLIER_KZ]'
}

module.exports = function ( data, company ) { 
	
	zip.load( fs.readFileSync( company + data.template + '.docx' ) );
	var content = zip.files['word/document.xml'].asText();
	
	for ( var key in fields ) { 
		content = String( content ).replace( fields[key] , data[key] );
	}
	
	zip.file('word/document.xml', content);
	var compress = zip.generate({ base64:false, compression:'DEFLATE'});
	
	fs.writeFile( 'result/' + data.filename + ' КазРус.docx', compress, 'binary', function ( err ) { 
		if ( err ) throw err;
		console.log( data.filename + ' was writed successfull' );
	});
	
}