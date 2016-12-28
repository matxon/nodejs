CREATE TABLE documents ( 
  document_id INT AUTO_INCREMENT,
  doc_category VARCHAR(100) NOT NULL, -- COMMENT = "Құжаттың категориясы. Бірақ әлі бұған ерте сияқты",
  doc_name VARCHAR(255) NOT NULL, -- COMMENT="Құжаттың атауы", 
  doc_path VARCHAR(255) NOT NULL, -- COMMENT="Орналасқан жері", 
  validity_date DATE NOT NULL, -- COMMENT="Құжаттың мерзімі", 
  created_date DATE NOT NULL, -- COMMENT="Құжаттың салынған күні", 
  description TEXT, -- COMMENT="Түсініктеме. Құжат жайлы толық мәлімет, оның тарихы",
  author INT NOT NULL DEFAULT 1, -- COMMENT="По умолчанию системный администратор",
  PRIMARY KEY (document_id)
) COMMENT="Бұл кестеде барлық құжаттар тіркеледі. TODO: құжат салынған күн бүгінгі күнмен болуы керек";


CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(15) NOT NULL, -- COMMENT="login",
  password VARCHAR(100) NOT NULL, -- COMMENT="password",
  fio VARCHAR(255) NOT NULL, -- COMMENT="Тегі, аты және әкесінің аты",
  PRIMARY KEY (user_id)
) COMMENT="Мәліметтер қорының пайдаланушылары";

INSERT INTO users (username, password, fio) VALUES
("root", "password", "Database Administrator");
