/* 
 * REESTR.NADLOC.KZ - тендерлеріне қатысуға арналған шаблондар
 */
var $supplier_kz = 'Атыраугеоконтроль';
var $supplier_ru = 'Атыраугеоконтроль'; 

var $supplier_boss_ru = 'директор - Сулейменов Ж.';
var $supplier_boss_kz = 'директор - Сулейменов Ж.';

// var $supplier_kz = 'БатысГеоЗерттеу';
// var $supplier_ru = 'БатысГеоЗерттеу';

// var $supplier_boss_ru = 'директор - Нурмуханов Кайрат Умирович';
// var $supplier_boss_kz = 'директор - Нұрмұқанов Қайрат Өмірұлы';

var $title_doc_kz = '«Кор-Таж Мұнай» ЖШС-нің конкурстық комиссиясының төрағасына';
var $title_doc_ru =  'Председателю конкурсной комиссии ТОО «Кор-Таж Мұнай»';

var $tender_name_ru = '«Геолого-технические исследование (ГТИ), Вертикальное сейсмическое профилирование (ВСП)»';
var $tender_name_kz = '«Геологиялық-техникалық зерттеулер (ГТЗ), тік сейсмикалық бейіндеу (ТСБ)»';

var $tender_type_kz = 'ашық конкурс тәсілімен сатып алу';
var $tender_type_ru = 'открытом конкурсе';

// var $tender_type_kz = 'электронды жүйе арқылы сатып алу';
// var $tender_type_ru = 'конкурсе через СЭЗ';

var lots = [
  {
    kaz: "№ 1 лот - «Геологиялық-техникалық зерттеулер (ГТЗ)»",
    rus: "лот №1 - «Геолого-технические исследование (ГТИ)»"
  },
  {
    kaz: "№ 2 лот - «Тік сейсмикалық бейіндеу (ТСБ)»",
    rus: "лот №2 - «Вертикальное сейсмическое профилирование (ВСП)»"
  },
  // {
    // kaz: "№ 3 лот - «Мәтен кен орны ұңғымыларға гидродинамиқалық зерттеу жүргізу»",
    // rus: "лот №3 - «Гидродинамические исследования скважин месторождения Матин»"
  // }
];


var head = {
  supplier_kz:  $supplier_kz,
  supplier_ru:  $supplier_ru,

  title_doc_kz:  $title_doc_kz,
  title_doc_ru:  $title_doc_ru
};


var documents = [];

documents.push(
	// Письмо о составе учредителей
	{
		template: '1',
		filename: 'Письмо учредители',
		content_doc_ru: 'Настоящим сообщаем, что Устав ТОО «' + $supplier_ru + '» содержит сведения об учредителе и составе учредителей.',
		content_doc_kz: '«' + $supplier_kz + '» ЖШС-нің құрылтайшылары немесе құрылтайшылардың құрамы жайлы мәліметтер Жарғыда көрсетілген.',
    __proto__: head
	}
);

documents.push(
  // Письмо о доверенности
	{
		template: '1',
		filename: 'Письмо о доверенности',
		content_doc_ru: 'Настоящим сообщаем, что интересы ТОО «' + $supplier_ru + '» на право подписания заявки и документов, содержащихся в заявке на участие в проводимом ' +  $tender_type_ru + ' по закупу работ '+ $tender_name_ru + ' будет представлять первый руководитель, ' + $supplier_boss_ru + '.',
		content_doc_kz: '«' + $supplier_kz + '» ЖШС-гі өткізіліп отырған '+ $tender_name_kz + ' ' + $tender_type_kz + ' құжаттарына және конкурсқа қатысуға арналған өтінішке ' + $supplier_boss_kz + ' мырзаның қолы қойылғанын хабардар етеді.',
    __proto__: head
	}
);

documents.push(
	// Письмо о ликвидации или банкротства
	{
		template: '1',
		filename: 'ПисьмоЛиквидБанкрот',
		content_doc_ru: 'Настоящим гарантируем, что ТОО «' + $supplier_ru + '» не находится в процессе ликвидации или банкротства.',
		content_doc_kz: 'Осымен «' + $supplier_kz + '» ЖШС қазіргі уақытта тарату немесе банкрот болу рәсімінде жоқ екеніне кепіл боламыз. ',
    __proto__: head
	}
);

documents.push(
	// Гарантийное письмо об отсутствии оснований 811
	{
		template: '2',
		filename: 'Гар.Письмо 811',
		content_title_ru: 'Гарантийное письмо',
		content_title_kz: 'Кепіл хат',
		content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», ГАРАНТИРУЕТ, что не имеет оснований, запрещающих нам участвовать в проводимом ' +  $tender_type_ru + ' по закупу работ ' + $tender_name_ru + ', предусмотренных 	подпунктом 3) пункта 8, подпунктах 1), 2) и 4) пункта 11 Правил приобретения товаров, работ и услуг при проведении операций по недропользованию, утвержденных постановлением Правительства Республики Казахстан №602 от 31.05.2014 года. ------>\
		В случае возникновения таких обстоятельств, мы понесем полную ответственность за предоставление недостоверной информации в том числе, материальные и денежные расходы заказчика, понесенные Заказчиком в связи с предоставлением нами недостоверной информации, в соответствии с действующим на дату представления информации законодательством Республики Казахстан. ',
		content_doc_kz: 'Осымен  «' + $supplier_kz + '» ЖШС-гі ' + $tender_name_kz +  $tender_type_kz + 'қызметтеріне қатысуға тыйым салатын, Қазақстан Республикасы Үкіметінің 2014 жылы 31 мамыр №602 Қаулысымен бекітілген Жер қойнауын пайдалану операцияларын жүргізу барысында тауарларды, жұмыстарды және қызметтерді сатып алу Қағидаларының 3 тармақшаның 8 тармағында және 1, 2, 4 тармақшалардың 11 тармағында көзделген негіздемелердің жоқтығы туралы КЕПІЛДІК БЕРЕДІ. ------->\
		Мұндай жағдайлар орын алса, біз шүбәлі ақпаратты ұсынғанымыз үшін, бұған шүбәлі ақпараттың ұсынылуына байланысты Тапсырыс берушінің материалдық және ақшалай шығыстары да кіреді, Қазақстан Республикасының ақпарат ұсынған күнге қолданыстағы заңнамасына сәйкес өзімізге толық жауапкершілікті аламыз. ',
    __proto__: head
	},
  // Только для Каспий нефть»
    // Гарантийное письмо об отсутствии оснований на каждый ЛОТ отдельно
    {
      template: '2',
      filename: 'Прил5-ОтсутствиеОснований',
      content_title_ru: 'Гарантийное письмо потенциального поставщика об отсутствии оснований, запрещающих участвовать в проводимом открытом конкурсе ',
      content_title_kz: 'Ашық конкурсқа қатысуға тиым салатын, негіздің жоқтығы туралы әлеуетті жеткізушінің кепіл хаты',
      content_doc_ru: 'Настоящим гарантируем об отсутствии оснований, запрещающих участвовать в проводимом ' + $tender_type_ru + ' ' + $tender_name_ru + '.',
      content_doc_kz: 'Осы арқылы ' + $tender_type_kz + 'ға қатысуға тиым салатын негіздің жоқтығына кепіл береміз ' + $tender_name_kz + '.',
      __proto__: head
    }
);

documents.push(
 	// Гарантийное письмо о соблюдении требования о сдаче отчетности по местному содержанию
	{
		template: '2',
		filename: 'ОсдачеОтчетностиПоКазСод',
		content_title_ru: 'Гарантийное письмо',
		content_title_kz: 'Кепіл хат',
		content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '» гарантирует соблюдение требований о сдаче отчетности по местному содержанию по формам в соответствии с законодательством Республики Казахстан (Постановление Республики Казахстан от 20 сентября 2010 года №965 «Об утверждении форм и Правил составления и предоставления годовой, среднесрочной, долгосрочной программ закупа товаров, работ и услуг, отчетов недропользователей о приобретенных товарах, работах и услугах и об исполнении обязательств по местному содержанию) и ответственности за содержание информации отраженной в отчетах, нарушение сроков предоставления отчетности и несоблюдение потенциальными поставщиками обязательств по местному содержанию.',
		content_doc_kz: '«' + $supplier_kz + '» ЖШС-і осы хат арқылы Қазақстан Республикасының заңнамасына сәйкес үлгі бойынша жергілікті мазмұнға қатысты есептілікті тапсыру жайындағы талаптарды сақтау туралы кепілдік хаты (2010 жылдың 20 қыркүйегіндегі №965 Қазақстан Республикасының Қаулысы «Жер қойнауын пайдаланушылардың сатып алынған тауарлар, жұмыстар мен қызметтер және жергілікті мазмұн бойынша тауар, жұмыс және қызметті сатып алудығы жылдық, орта мерзімді, ұзақ мерзімді есептеме жасау мен ұсыну үлгілері мен Ережелерін бекіту туралы») мен есептемелерде бейнеленген ақпараттардың мазмұнының, есептілікті беру мерзімінің бұзылуы және әлеуетті жеткізушімен жергілікті мазмұн бойынша міндеттемелердің сақталуына кепілдік береді.',
    __proto__: head
	}
);

lots.forEach( function(value, count) {
  var index = count + 1;
  documents.push(
    // Письмо о сертификации на каждый ЛОТ отдельно
    {
      template: '1',
      filename: 'Письмо Сертификат' + ' Лот ' + index,
      content_doc_ru: 'В связи с тем, что вид деятельности закупаемых услуг ' + value.rus +' не подлежит обязательной сертификации на соответствие требованиям стандарта или иного нормативного документа, обеспечивающих безопасность для жизни, здоровья людей, имущества граждан и окружающей среды в соответствии с законодательством Республики Казахстан о сертификации, ТОО «' + $supplier_ru + '» вправе не предоставлять соответствующие документы.',
      content_doc_kz: 'Осы хат арқылы, ' + value.kaz + ' бойынша сатып алу Қазақстан Республикасының сертификаттау заңнамасына сәйкес, стандарт талаптарына сәйкестік сертификатына немесе өмірге, адам денсаулығына, азаматтардың мүлкі және қоршаған ортаға қауіпсіздік беретін басқа да нормативтік құжаттар сертификациялауға жатпайтындықтан, «' + $supplier_kz + '» ЖШС-гі осыған байланысты құжаттарды бермеуге құқылы.',
      __proto__: head
    },
    // Обязательства по местному содержанию на каждый ЛОТ отдельно
    {
      template: '3',
      filename: 'ОбязатПоМестнСодерж' + ' Лот ' + index,
      percentage_kz: '100',
      percentage_ru: '100',
      content_title_ru: 'Обязательства по местному содержанию в предлагаемых работах, выраженные в процентах по каждому лоту (0-100)',
      content_title_kz: 'Жергілікті ұстау бойынша ұсынылатын жұмыстар əр бір лот бойынша пайызбен көрсетілген (0-100)',
      content_doc_ru: 'Настоящим  подтверждаем,  представленное  обязательство  по  местному  содержанию  в предлагаемых работах в проводимом ' +  $tender_type_ru +  ' ' + value.rus +'.',
      content_doc_kz: 'Осы арқылы, ' + value.kaz + ' ' + $tender_type_kz +  ' жұмыстарының  көрсетілген жергілікті мазмұнын растаймыз.',  
      __proto__: head
    },
    // Обязательства подрядчика о соблюдении настоящих Правил на каждый ЛОТ отдельно
    {
      template: '2',
      filename: 'ОбязатОСоблюденииПравил' + ' Лот ' + index,
      content_title_ru: 'Обязательства Потенциального поставщика (подрядчика) о соблюдении настоящих Правил при исполнении договора на выполнение отдельных видов работ, связанных с проведением операций по недропользованию ',
      content_title_kz: 'Жер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алу қағидаларын бекіту туралы мердігердің міндеттері',
      content_doc_ru: 'Настоящим обязуемся о соблюдении настоящих Правил приобретения товаров, работ и услуг при проведении операций по недропользованию посредством государственной информационной системы «Реестр товаров, работ и услуг, используемых при проведении операций по недропользованию, и их производителей» от 14 февраля 2013 года № 133, при исполнении договора на выполнение работ проведении операций по недропользованию», далее «Правила», при исполнении договора на выполнение отдельных видов работ, связанных с проведением операций по недропользованию.',
      content_doc_kz: 'Келісім шартты орындау кезінде Жер қойнауын қолдануға байланысты операцияларды жүргізу кезінде жұмыстардың жеке түрін орындауда «Жер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алу қағидаларын бекіту туралы» Қазақстан Республикасы Үкіметінің 2013 жылғы 14 ақпандағы № 133 қаулысын, бұдан əрі «Қағида», сақтай отырып, мердігердің міндеттерін орындауға кепілдік береміз.',
      __proto__: head
    },
    // Гарантийное письмо об отсутствии оснований 1112 на каждый ЛОТ отдельно
    {
      template: '2',
      filename: 'Гар.Письмо 1112' + ' Лот ' + index,
      content_title_ru: 'Гарантийное письмо',
      content_title_kz: 'Кепіл хат',
      content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», ГАРАНТИРУЕТ, что не имеет оснований, запрещающих нам участвовать в проводимом ' +  $tender_type_ru + ' по закупу работ ' + value.rus + ', предусмотренных 	подпунктах 3) и 5) пункта 11 и пункте 12 Правил приобретения товаров, работ и услуг при проведении операций по недропользованию, утвержденных постановлением Правительства Республики Казахстан №602 от 31.05.2014 года. ------>\
      В случае возникновения таких обстоятельств, мы понесем полную ответственность за предоставление недостоверной информации в том числе, материальные и денежные расходы заказчика, понесенные Заказчиком в связи с предоставлением нами недостоверной информации, в соответствии с действующим на дату представления информации законодательством Республики Казахстан. ',
      content_doc_kz: 'Осымен  «' + $supplier_kz + '» ЖШС-гі ' + value.kaz + ' ' +  $tender_type_kz + ' қызметтеріне қатысуға тыйым салатын, Қазақстан Республикасы Үкіметінің 2014 жылы 31 мамыр №602 Қаулысымен бекітілген Жер қойнауын пайдалану операцияларын жүргізу барысында тауарларды, жұмыстарды және қызметтерді сатып алу Қағидаларының 3, 5 тармақшалардың 11 тармағында және 12 тармағында көзделген негіздемелердің жоқтығы туралы КЕПІЛДІК БЕРЕДІ. ----->\
      Мұндай жағдайлар орын алса, біз шүбәлі ақпаратты ұсынғанымыз үшін, бұған шүбәлі ақпараттың ұсынылуына байланысты Тапсырыс берушінің материалдық және ақшалай шығыстары да кіреді, Қазақстан Республикасының ақпарат ұсынған күнге қолданыстағы заңнамасына сәйкес өзімізге толық жауапкершілікті аламыз. ',
      __proto__: head
    },
    // Письмо субподряд на каждый ЛОТ отдельно
    {
      template: '2',
      filename: 'Письмо субподряд' + ' Лот ' + index,
      content_title_ru: 'Гарантийное письмо',
      content_title_kz: 'Кепіл хат',
      content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '» подтверждает, что при  выполнении работ закупаемых в данном конкурсе субподрядчики (соисполнители) не привлекутся.',
      content_doc_kz: 'Осымен  «' + $supplier_kz + '» ЖШС-гі осы конкурста сатып алынатын  жұмыстардың өз күшімізбен, яғни мердігерлерсіз атқарылатынын растайды. ',
      __proto__: head
    },
    // Гарантийное письмо, подтверждающее согласие потенциального поставщика с существенными условиями проекта договора на каждый ЛОТ отдельно
    {
      template: '2',
      filename: 'СоглУсловиямиДоговора' + ' Лот ' + index,
      content_title_ru: 'Гарантийное письмо, подтверждающее согласие Потенциального поставщика с существенными условиями проекта договора о закупках',
      content_title_kz: 'Əлеуетті жеткізушінің шарт жобасының елеулі талаптарымен келіскендігін растайтын кепілхаты',
      content_doc_ru: 'Настоящим гарантируем согласие с существенными условиями проекта договора о закупках в проводимом ' +  $tender_type_ru + ' ' + value.rus + '. ',
      content_doc_kz: 'Осы арқылы ' + value.kaz + ' ' +  $tender_type_kz + ' шарт жобасының елеулі талаптарымен келіскендігіне кепілдік береміз.',
      __proto__: head
    }
  );
});

module.exports = documents;