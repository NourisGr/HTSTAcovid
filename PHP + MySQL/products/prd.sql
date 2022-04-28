drop database products;

create database products;
use products;

CREATE TABLE Products (
    ProductsID int not null AUTO_INCREMENT,
    ProductsName varchar(30),
    PRIMARY KEY (ProductsID),
    img VARCHAR(255),
    ProductsPrice Integer (3)
);

CREATE TABLE Languages(
    LanguageID int not null AUTO_INCREMENT,
    LanguageName VARCHAR(20),
    PRIMARY KEY(LanguageID)
);

CREATE TABLE Description(
DescID INT NOT NULL AUTO_INCREMENT,
PID int NOT NULL,
LID int NOT NULL,
DescText VARCHAR(200),
PRIMARY KEY (DescID),
);


INSERT into Products (ProductsName,img,ProductsPrice) VALUE("Razer Nari");
INSERT into Products (Productsname) VALUE("PC BUILD");

INSERT INTO Languages (LanguageName) VALUES("English");
INSERT INTO Languages (languageName) VALUES("Greek");


INSERT INTO Description(ProductsName,PID,LID,DescText) VALUES("Wireless HeadSet",1,1"example")
INSERT INTO Description(ProductsName,PID,LID,DescText) VALUES("Ασύρματα Ακουστικά",2,2"example")