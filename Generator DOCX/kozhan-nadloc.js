/* 
 * REESTR.NADLOC.KZ - тендерлеріне қатысуға арналған шаблондар
 */
var $supplier_kz = 'Атыраугеоконтроль';
var $supplier_ru = 'Атыраугеоконтроль'; 

var $supplier_boss_ru = 'генеральный директор - Сулейменов Ж.';
var $supplier_boss_kz = 'бас директор - Сулейменов Ж.';

// var $supplier_kz = 'БатысГеоЗерттеу';
// var $supplier_ru = 'БатысГеоЗерттеу';

// var $supplier_boss_ru = 'директор - Нурмуханов Кайрат Умирович';
// var $supplier_boss_kz = 'директор - Нұрмұқанов Қайрат Өмірұлы';

var $title_doc_kz = '«КоЖаН» АҚ конкурстық комиссиясының төрағасына';
var $title_doc_ru =  'Председателю конкурсной комиссии АО «КоЖаН»';

var $tender_name_ru = '«Работы по гидродинамическим исследованиям (ГДИС) с отбором и анализом глубинных проб в скважинах на контрактной территории месторождения «Даулеталы»';
var $tender_name_kz = '«Даулеталы кен орнының   келісімшартты аумағындағы ұңғымалардан тереңдік сынамаларды алуымен және талдауымен гидродинамикалық зерттеулері (ҰГДЗ) бойынша Жұмыстары»';

var $tender_type_kz = 'ашық конкурстың';
var $tender_type_ru = 'открытом конкурсе';

// var $tender_type_kz = 'электронды жүйе арқылы сатып алу';
// var $tender_type_ru = 'конкурсе через СЭЗ';

var lots = [
  {
    kaz: "№ 1 лот - «Даулеталы кен орнының   келісімшартты аумағындағы ұңғымалардан тереңдік сынамаларды алуымен және талдауымен гидродинамикалық зерттеулері (ҰГДЗ) бойынша Жұмыстары»",
    rus: "лот №1 - «Работы по гидродинамическим исследованиям (ГДИС) с отбором и анализом глубинных проб в скважинах на контрактной территории месторождения «Даулеталы»"
  },
  // {
    // kaz: "№ 2 лот - «Шегенді оқпандағы геофизикалық зерттеулер және ату-жару жұмыстары»",
    // rus: "лот №2 - «Геофизические исследования в обсаженном стволе и прострелочно-взрывные работы»"
  // },
  // {
    // kaz: "№ 3 лот - «Ұңғымаларды геофизикалық зерттеулер»",
    // rus: "лот №3 - «Гидродинамические исследования (ГДИС) скважин»"
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
		filename: 'Гар.Письмо 8 пп3',
		content_title_ru: 'Гарантийное письмо',
		content_title_kz: 'Кепіл хат',
		content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», ГАРАНТИРУЕТ, что не имеет оснований, запрещающих нам участвовать в проводимом ' +  $tender_type_ru + ' по приобретению ' + $tender_name_ru + ', предусмотренных 	подпунктом 3) пункта 8, Правил приобретения товаров, работ и услуг при проведении операций по недропользованию, утвержденных Совместным приказом Министра по инвестициям и развитию Республики Казахстан от 27 февраля 2015 года № 253 и Министра энергетики Республики Казахстан от 27 марта 2015 года № 241, а именно: ---->1) обладать правоспособностью (для юридических лиц), гражданской дееспособностью (для физических лиц); ---->2) являться платежеспособным; ---->3) не подлежать процедуре ликвидации или банкротства. ---->В случае возникновения таких обстоятельств, мы понесем полную ответственность за предоставление недостоверной информации в том числе, материальные и денежные расходы заказчика, понесенные Заказчиком в связи с предоставлением нами недостоверной информации, в соответствии с действующим на дату представления информации законодательством Республики Казахстан. ',
    
		content_doc_kz: 'Осымен  «' + $supplier_kz + '» ЖШС-гі 2015 жылғы 27 наурызындағы №241 Қазақстан Республикасы Энергетика Министрі және 2015 жылғы 27 ақпанындағы №253 Қазақстан Республикасы  Инвестициялар және даму  Министрінің бірлескен бұйрығымен бекітілгенжер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алу қағидаларының  8-тармағының 3) тармақшасында көзделген ' + $tender_name_kz + ' сатып алу бойынша ' + $tender_type_kz + ' қызметтеріне қатысуға тыйым салатын негіздемелердің жоқтығына КЕПІЛДІК БЕРЕМІЗ, атап айтқанда: ------->\   1) құқықтық қабілеттілігіне (заңды тұлғалар үшін), азаматтық әрекетке қабілеттілігіне (жеке тұлғалар үшін) ие болу; ---->2)төлемге қабілетті болу; ---->3) тарату немесе банкроттық рәсімдерге жатпау; ---->	Осындай жағдайлар орын алған жағдайларда біз, тиісті дұрыс ақпараттарды жеткізбегеніміз үшін, Қазақстан Республикасының қолданыстағы заңнамасына сәйкес, дұрыс сенімді ақпарат жеткізбеу салдарынан Тапсырыс берушіге материалдық және ақшалай шығындар келтіргеніміз үшін толықтай жауапты боламыз.',
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
		content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», в случае признания нашей конкурсной заявки победившей по открытому конкурсу ' + $tender_name_ru + ' ГАРАНТИРУЕТ соблюдение требований о сдаче отчетности по местному содержанию по формам в соответствии с законодательством Республики Казахстан и ответственности за содержание информации отраженной в отчетах, нарушение сроков представления отчетности и несоблюдение потенциальными поставщиками обязательств по местному содержанию, в соответствии с Правилами приобретения товаров, работ и услуг при проведении операций по недропользованию, утвержденных Совместным приказом Министра по инвестициям и развитию Республики Казахстан от 27 февраля 2015 года № 253 и Министра энергетики Республики Казахстан от 27 марта 2015 года № 241. -------> В случае неисполнения вышеуказанных обязательств мы принимаем ответственность за неисполнение обязательств в размере 30% от общей стоимости Работ по договору.',
		content_doc_kz: 'Осымен «' + $supplier_kz + '» ЖШС-і, ' + $tender_name_kz + ' ашық конкурс бойынша біздің конкурстық өтінім  жеңімпаз деп танылған жағдайда, 2015 жылғы 27 наурызындағы №241 Қазақстан Республикасы Энергетика Министрі және 2015 жылғы 27 ақпанындағы №253 Қазақстан Республикасы  Инвестициялар және даму  Министрінің бірлескен бұйрығымен бекітілген жер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алу қағидаларына сәйкес Қазақстан Республикасының заңнамасына сәйкес нысандар бойынша жергілікті қамту бойынша есептілікті өткізу туралы талаптарды және есептерде көрсетілген ақпараттың мазмұнына, есептіліктерді ұсыну мерзімін бұзғандығы және әлеуетті жеткізушілердің жергілікті қамту бойынша міндеттемелерін орындамауына жауапкершілікті  сақтауға  КЕПІЛДІК береді. ------>Жоғарыда көрсетілген міндеттемелерді орындамаған жағдайда біз  Шарт бойынша Жұмыстардың жалпы құнынан 30% мөлшерінде орындалмаған міндеттемелер үшін жауапты  боламыз.',
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
      template: '2',
      filename: 'ОбязатПоМестнСодерж' + ' Лот ' + index,
      percentage_kz: '100',
      percentage_ru: '100',
      content_title_ru: 'Обязательства по местному содержанию в предлагаемых работах, выраженные в процентах по каждому лоту (0-100)',
      content_title_kz: 'Жеткізілетін тауарлардың жергілікті мазмұны бойынша міндеттерді орындау туралы кепілдеме',
      content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», случае признания нашей конкурсной заявки победившей по лоту № ' + index + ' по открытому конкурсу ' +  $tender_name_ru +  ' ГАРАНТИРУЕМ выполнение обязательств по местному содержанию в следующих объемах:	---> ЛОТ № ' + index + '	100% -----> В случае неисполнения вышеуказанных обязательств мы принимаем ответственность за неисполнение обязательств в размере 30%.',
      content_doc_kz: 'Осымен, «' + $supplier_kz + '» ЖШС-гі ' + $tender_name_kz +  ' бойынша біздің конкурстық өтінімдер жеңімпаз болып табылса, келесі көлемдерде жергілікті мазмұн бойынша міндеттерді орындауға КЕПІЛДІК БЕРЕМІЗ: ---->	№ ' + index + '  ЛОТ	100%  -----> Жоғарыда аталған міндеттемелер орындалмаған жағдайда   30%  көлемінде орындалмаған міндеттер үшін жауапкершілік қабылдаймыз.',  
      __proto__: head
    },
    // Обязательства подрядчика о соблюдении настоящих Правил на каждый ЛОТ отдельно
    {
      template: '2',
      filename: 'ОбязатОСоблюденииПравил' + ' Лот ' + index,
      content_title_ru: 'Гарантия о соблюдении  Правил приобретения товаров, работ и услуг при проведении операций по недропользованию, утвержденных Совместным приказом Министра по инвестициям и развитию Республики Казахстан от 27 февраля 2015 года № 253 и Министра энергетики Республики Казахстан от 27 марта 2015 года № 241',
      content_title_kz: '2015 жылғы 27 наурызындағы №241 Қазақстан Республикасы Энергетика Министрі және 2015 жылғы 27 ақпанындағы №253 Қазақстан Республикасы  Инвестициялар және даму  Министрінің бірлескен  бұйрығымен бекітілген жер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алуҚағидасын сақтау туралы Кепілі',
      content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», в случае признания нашей конкурсной заявки победившей по лоту № ' + index + ' по открытому конкурсу ' + $tender_name_ru + ' ГАРАНТИРУЕТ соблюдение  Правил приобретения товаров, работ и услуг при проведении операций по недропользованию, утвержденных Совместным приказом Министра по инвестициям и развитию Республики Казахстан от 27 февраля 2015 года № 253 и Министра энергетики Республики Казахстан от 27 марта 2015 года № 241, при исполнении договора на выполнение подрядных работ, заключенного по итогам вышеназванного конкурса. ---->В случае неисполнения вышеуказанных обязательств мы принимаем ответственность за неисполнение обязательств в размере 20% от общей стоимости Работ  по договору.',
      content_doc_kz: 'Осымен  «' + $supplier_kz + '» ЖШС-гі,  ' + $tender_name_kz + '  ашық конкурс бойынша № ' + index + ' лот  бойынша біздің конкурстық өтінім  жеңімпаз деп танылған жағдайда, жоғарыда аталған конкурстың қорытындысы бойынша жасалған мердігерлік жұмыстарды орындауға шартты орындау барысында,  	2015 жылғы 27 наурызындағы №241 Қазақстан Республикасы Энергетика Министрі және 2015 жылғы 27 ақпанындағы №253 Қазақстан Республикасы  Инвестициялар және даму  Министрінің бірлескен бұйрығымен бекітілген  жер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алу қағидаларын сақтауға кепілдік береді.  	---->Жоғарыда көрсетілген міндеттемелерді орындамаған жағдайда біз  Шарт бойынша Жұмыстардың жалпы құнынан 20% мөлшерінде орындалмаған міндеттемелер үшін жауапты  боламыз.',
      __proto__: head
    },
    // Только для Матен Петролеум
    // Обязательства подрядчика о соблюдении настоящих Правил на каждый ЛОТ отдельно
    // {
      // template: '2',
      // filename: 'вер2-ОбязатОСоблюденииПравил' + ' Лот ' + index,
      // content_title_ru: 'Обязательства Потенциального поставщика (подрядчика) о соблюдении настоящих Правил при исполнении договора на выполнение работ ',
      // content_title_kz: 'Жұмыстарды орындау шартын орындау кезінде осы Қағидаларды сақтау туралы қоятын міндеттері',
      // content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '» подтверждает, что он ознакомлен с Постановлением Правительства РК от 14 февраля 2013 года № 133, №134, с изменениями и дополнениями утвержденными ППРК №602 от 31 мая 2014г.«Об утверждении Правил приобретения товаров, работ и услуг при проведении операций по недропользованию посредством государственной информационной системы «Реестр товаров, работ и услуг, используемых при проведении операций по недропользованию, и их производителей» и гарантирует соблюдения данных Правил при выполнении работ по договору.',
      // content_doc_kz: 'Қазіргі таңда әлеуетті жеткізуші «' + $supplier_kz + '» ЖШС-гі өзінің Жер қойнауын пайдалану жөніндегі операцияларды жүргізу кезінде тауарларды, жұмыстар мен көрсетілетін қызметтерді сатып алу қағидаларын бекіту туралы Қазақстан Республикасы Үкіметінің 2014жылдың 31 мамырдағы №602 ҚРҮҚ бекітілген өзгерістермен және толықтырулармен бірге 2013 жылдың 14 ақпанында Қазақстан Республикасы Үкіметінің №133, 134 қаулыларымен «Жер қойнауын пайдалану операцияларын жүргізу кезінде қолданылатын тауарлар, жұмыстар және қызметтер Реестірі, және оны өндірушілер» мемлекеттік ақпараттық жүйесі көмегімен танысқандығын растайды және осы шарт бойынша жұмысты орындауға және берілген Қағидаларды сақтайтындығына кепілдік береді.',
      // __proto__: head
    // },
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
      content_title_ru: 'Гарантийное письмо о согласии потенциального поставщика с существенными условиями проекта договора',
      content_title_kz: 'Әлеуетті жеткізушінің шарт жобасының елеулі талаптарымен келіскендігі туралы кепілхаты',
      content_doc_ru: 'Настоящим ТОО «' + $supplier_ru + '», в случае признания нашей конкурсной заявки победившей по лоту ' + index + ' по открытому конкурсу ' + $tender_name_ru + ' извещаем о согласии 	с существенными условиями проекта договора. ---->В случае не подписания проекта договора конкурной документации обеспечение конкурсной заявки не возвращается.',
     
      content_doc_kz: 'Осымен  «' + $supplier_kz + '» ЖШС-гі,  ' + $tender_name_kz + '  ашық конкурс бойынша № ' + index + ' лот  бойынша біздің конкурстық өтінім жеңімпаз деп танылған жағдайда, шарт жобасының елеулі талаптарымен келіскендігі туралы хабарландырамыз. ---->Конкурстық құжаттама шартының жобасына қол қоймаған жағдайда конкурстық өтінімді қамтамасыз ету қайтарылмайды.',
      __proto__: head
    }
  );
});

module.exports = documents;