var creater = require('./creater.js');


// var $tender_documents = require('./alties-nadloc.js');
// var $tender_documents = require('./maten-nadloc.js');
// var $tender_documents = require('./kortazh-nadloc.js');
// var $tender_documents = require('./kaspii-neft-nadloc.js');
// var $tender_documents = require('./BNG_nadloc.js');
// var $tender_documents = require('./potencial_i-tender.js');
// var $tender_documents = require('./sazankurak-nadloc.js');
// var $tender_documents = require('./PPK-nadloc.js');
// var $tender_documents = require('./kozhan-nadloc.js');
var $tender_documents = require('./nors-nadloc.js');
// var $tender_documents = require('./nadloc.js');
// var $tender_documents = require('./emba-samryk.js');
// var $tender_documents = require('./urikhtau-samryk.js');
// var $tender_documents = require('./kazmunaiteniz-samryk.js');
// var $tender_documents = require('./ozenmunaigaz-samryk.js');
// var $tender_documents = require('./amangeldy-samryk.js');
	
$tender_documents.forEach( function ( member ) {
	creater( member, 'agk_template' );
  // creater( member, 'bgz_template' );
});
