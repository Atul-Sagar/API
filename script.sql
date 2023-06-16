create database cobrowsing;

use cobrowsing;

create table Actions(
	ID int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    value varchar(50)
)

select * from Actions;
INSERT INTO Actions (name,value) VALUES ("atool","toolbox");
INSERT INTO Actions (name,value) VALUES ("name","Atul");
INSERT INTO Actions (name,value) VALUES ("country","USA");

select *from Actions order by ID desc limit 1;

drop table Actions;