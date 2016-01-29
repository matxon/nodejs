use agk_charges;

-- 1 -----------------------------------------------------------------------------------
-- қоймаға жаңадан зарядтар енгізу
INSERT INTO purchases(date, provider, storage_id) values
(now(), 'ООО "Ойлдфилд Продакшен"', 1);
-- екінші әрекет
-- мұндағы last_insert_id() соңғы id нөмірді береді
INSERT INTO purchase_invoices values
(last_insert_id(), 1, 5),
(last_insert_id(), 2, 5),
(last_insert_id(), 6, 5),
(last_insert_id(), 9, 5);

-- 2 -----------------------------------------------------------------------------------
-- қоймаға жаңадан зарядтар енгізу
INSERT INTO purchases(date, provider, storage_id) values
(now(), 'ООО "Промперфоратор"', 1);
-- екінші әрекет
-- мұндағы last_insert_id() соңғы id нөмірді береді
INSERT INTO purchase_invoices values
(last_insert_id(), 3, 8),
(last_insert_id(), 4, 7),
(last_insert_id(), 10, 1),
(last_insert_id(), 1, 10);

-- 3 -----------------------------------------------------------------------------------
-- Қоймадан кенорнына жіберу
INSERT INTO sales(date, provider, storage_id) values
(now(), 'Амангалиев Талгат', 2);
-- екінші әрекет
-- мұндағы last_insert_id() соңғы id нөмірді береді
INSERT INTO sales_invoices values
(last_insert_id(), 3, 8),
(last_insert_id(), 4, 7),
(last_insert_id(), 10, 1),
(last_insert_id(), 1, 10);

-- 4 -----------------------------------------------------------------------------------
-- Қоймадан кенорнына жіберу
INSERT INTO sales(date, provider, storage_id) values
(now(), 'Партия әіңғ,.құү', 3);
-- екінші әрекет
-- мұндағы last_insert_id() соңғы id нөмірді береді
INSERT INTO sales_invoices values
(last_insert_id(), 1, 2),
(last_insert_id(), 2, 2),
(last_insert_id(), 6, 2),
(last_insert_id(), 9, 2);


-- Барлық қоймалардағы заттардың тізімі
SELECT 
    charge as 'Заряд',
    unit as 'Ед.изм',
    qty as 'Кол-во',
    storage_name as 'Склад'
FROM agk_charges.balans, agk_charges.charges, agk_charges.units, agk_charges.storages
WHERE
    balans.charge_id = charges.charge_id AND
    charges.unit_id = units.unit_id AND
    balans.storage_id = storages.storage_id AND
    qty <> 0;

-- Көрсетілген қоймадағы заттардың тізімі
SELECT 
    charge as 'Заряд',
    unit as 'Ед.изм',
    qty as 'Кол-во',
    storage_name as 'Склад'
FROM agk_charges.balans, agk_charges.charges, agk_charges.units, agk_charges.storages
WHERE
    balans.charge_id = charges.charge_id AND
    charges.unit_id = units.unit_id AND
    balans.storage_id = storages.storage_id AND
    qty <> 0 AND
    balans.storage_id = 2;


-- ---------------------------------------------------------------------------------------
SELECT 
    purchase_id as 'Номер поставки', 
    charge as 'Заряд', 
    qty as 'Кол-во',
    unit as 'Ед.изм.'
from agk_charges.purchase_invoices, agk_charges.charges, agk_charges.units
where
    purchase_invoices.charge_id = charges.charge_id
    and
    charges.unit_id = units.unit_id;
    
SELECT 
    charge as 'Заряд',
    unit as 'Ед.изм',
    qty as 'Кол-во',
    storage_name as 'Склад'
FROM agk_charges.balans, agk_charges.charges, agk_charges.units, agk_charges.storages
WHERE
    balans.charge_id = charges.charge_id AND
    charges.unit_id = units.unit_id AND
    balans.storage_id = storages.storage_id;

    
-- ----------------------------------------------------------------------------
-- Жоғарыдағы 2 өрнекті орындағаннан кейін ТРИГГЕР өз жұмысын істеуі керек
-- яғни balans кестесінде жасалған өзгерістерге сәйкес әрекет жасалынуы қажет
delimiter |
CREATE TRIGGER `purchase_invoices_AFTER_INSERT` AFTER INSERT ON `purchase_invoices` FOR EACH ROW
BEGIN
    INSERT INTO agk_charges.balans values (new.charge_id, new.qty, get_storage_id(last_insert_id())) 
    ON DUPLICATE KEY UPDATE qty= qty + new.qty, storage_id = get_storage_id(last_insert_id());
END |
delimiter ;

drop trigger purchase_invoices_AFTER_INSERT;
