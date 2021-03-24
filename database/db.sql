--create database
CREATE DATABASE crudnode;

--using database
use crudnode;

---creating table
CREATE TABLE Clientes(
id INT() UNSIGNED NOT NULL PRIMARY KEY,
nombre VARCHAR (50) NOT NULL,
direccion VARCHAR (100) NOT NULL,
phone VARCHAR (15)
);