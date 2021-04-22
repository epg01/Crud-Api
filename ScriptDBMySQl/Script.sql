-- Script to create a database to be used by the front-end and back-end.

CREATE DATABASE IF NOT EXISTS DB_NAME;
USE DB_NAME;

CREATE TABLE IF NOT EXISTS Register(
       ID int AUTO_INCREMENT,
       User varchar(20) unique not null,
       State varchar(10) not null,
       CreateDate date not null,
       UpdateDate date not null,
       PRIMARY KEY (ID));
