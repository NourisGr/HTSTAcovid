drop database fanourios;
create database fanourios;

use fanourios;
CREATE TABLE Countries (
    CountryID int not null AUTO_INCREMENT,
    CountryName varchar(255),
    PRIMARY KEY (CountryID)
);

CREATE TABLE People (
    PersonID int NOT NULL AUTO_INCREMENT,
    PersonName varchar (255),
    CountryOfPerson int(255),
    PRIMARY KEY (PersonID),
    FOREIGN KEY (CountryOfPerson) REFERENCES Countries(CountryID)
);

INSERT INTO Countries (CountryName) VALUE("Luxembourg");
INSERT INTO Countries (CountryName) VALUE("France");
INSERT INTO Countries (CountryName) VALUES("Greece");
INSERT INTO Countries (CountryName) VALUES("Canada");
INSERT INTO Countries (CountryName) VALUES("Moldavia");



INSERT INTO People (PersonName, CountryOfPerson) VALUES("John",1);
INSERT INTO People (PersonName, CountryOfPerson) VALUES("Angelina",2);
INSERT INTO People (PersonName, CountryOfPerson) VALUES("Fanourios",3)