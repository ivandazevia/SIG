var tempx = $('#latitude');
var tempy = $('#longitude');

tabel univ -> nama univ id x y

psql db_clearroute postgres

CREATE TABLE resto(
 id serial PRIMARY KEY,
 nama VARCHAR (100),
 x double precision,
 y double precision 
);

SELECT * FROM resto;

INSERT INTO resto(nama, x, y) VALUES ('Rumah Makan Sederhana', -7.280947, 112.781198);
INSERT INTO resto(nama, x, y) VALUES ('MCDonalds Mulyosari', -7.266776, 112.796446);
INSERT INTO resto(nama, x, y) VALUES ('Food Festival Pakuwon City', -7.275930, 112.802708);
INSERT INTO resto(nama, x, y) VALUES ('Soto Ayam Lamongan Cak Har', -7.289714, 112.783168);
INSERT INTO resto(nama, x, y) VALUES ('Communal Coffee & Eatery', -7.282046, 112.776351);
INSERT INTO resto(nama, x, y) VALUES ('Steak Hotel by HOLYCOW!',-7.280211, 112.778548);
INSERT INTO resto(nama, x, y) VALUES ('Dapoer Mantab',-7.292685, 112.802972);
INSERT INTO resto(nama, x, y) VALUES ('Sop Ayam Pak Min Klaten', -7.277814, 112.780757);
INSERT INTO resto(nama, x, y) VALUES ('Niki Sae Restoran', -7.273013, 112.781477);
INSERT INTO resto(nama, x, y) VALUES ('Aiola Eatery',-7.258674, 112.750274);
INSERT INTO resto(nama, x, y) VALUES ('Bakso Boedjangan Citraland',-7.297693, 112.658918);
INSERT INTO resto(nama, x, y) VALUES ('Depot Bu Rudy',-7.258419, 112.729270);
INSERT INTO resto(nama, x, y) VALUES ('Sego Sambel Mak Yeye',-7.301054, 112.738832);
INSERT INTO resto(nama, x, y) VALUES ('Bubur Ayam Mang Dudung',-7.261573, 112.732414);
INSERT INTO resto(nama, x, y) VALUES ('Nasi Bebek Tugu Pahlawan',-7.246914, 112.738037);

SELECT * FROM resto;

-7.280947, 112.781198 Sederhana
-7.266776, 112.796446 mcd
-7.275930, 112.802708 food Festival
-7.289714, 112.783168 Soto
-7.282046, 112.776351 Communal
-7.280211, 112.778548 holycow
-7.292685, 112.802972 Dapoer
-7.277814, 112.780757 sop Ayam
-7.273013, 112.781477 niki Sae
-7.258674, 112.750274 Aiola
