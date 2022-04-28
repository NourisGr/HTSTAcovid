DROP DATABASE AnimalsInsert;

create database AnimalsInsert;
use AnimalsInsert;

create Table Animlas (
    AnimalID int not null AUTO_INCREMENT,
    AnimalName varchar(30) UNIQUE,
    PRIMARY KEY (AnimalID)
);
