DROP DATABASE IF EXISTS  hamburguesa_db;

CREATE DATABASE hamburguesa_db;

USE hamburguesa_db;

CREATE TABLE hamburguesa (
id INT  AUTO_INCREMENT,
`name` TEXT NOT NULL,
come BOOLEAN,
PRIMARY KEY (id)
);
