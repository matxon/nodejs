$.fn.datepicker.dates['kk'] = {
		days: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
		daysShort: ["Жек", "Дүй", "Сей", "Сәр", "Бей", "Жұм", "Сен"],
		daysMin: ["Жс", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"],
		months: ["Қантар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
		monthsShort: ["Қаң", "Ақп", "Нау", "Сәу", "Мамыр", "Мау", "Шлд", "Тмз", "Қыр", "Қзн", "Қар", "Жел"],
		today: "Бүгін",
		weekStart: 1,
		clear: "Өшір"
	};	

$('document').ready( function() {



	$('.datepicker').datepicker({
		format: 'dd-mm-yyyy',
		//keyboardNavigation: true,
		language: 'kk',
		startDate: new Date()
	});

	
	$('#new').on('click', function() {
		var newwindow = window.open("file:///D:/C++/nodejs/tender/tender_v1/index.html", "new", "top=100, left=700,width=1000, height=500, location=no, scrollbars=yes, centerscreen=yes, chrome=yes");
		
		//newwindow.document.write("<h1 id='header'>Сәлем, саған, сәлем саған, Туған жер!!!</h1>");
		
		
	});
});

