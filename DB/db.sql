-- Active: 1702372197461@@127.0.0.1@3306@phpmyadmin
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projetocacifo` DEFAULT CHARACTER SET utf8 ;
USE `projetocacifo` ;

-- -----------------------------------------------------
-- Table `mydb`.`Utilizadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetocacifo`.`Utilizadores` (
  `IdUtilizador` INT NOT NULL AUTO_INCREMENT,
  `num_utilizador` INT NOT NULL,
  `email_utilizador` VARCHAR(255) NOT NULL,
  `nome_utilizador` VARCHAR(255) NOT NULL,
  `estatuto_utilizador` VARCHAR(60) NOT NULL,
  `idplano` VARCHAR(45) NOT NULL,
  `data_adesao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IdUtilizador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Estatuto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetocacifo`.`Estatuto` (
  `idEstatuto` INT NOT NULL AUTO_INCREMENT,
  `Cargo` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idEstatuto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetocacifo`.`Planos` (
  `idPlano` INT NOT NULL,
  `nome_plano` VARCHAR(45) NOT NULL,
  `plano_preco` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPlano`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cacifos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetocacifo`.`Cacifos` (
  `idCacifo` INT NOT NULL AUTO_INCREMENT,
  `nome_cacifo` VARCHAR(45) NULL,
  `estado` INT NULL,
  PRIMARY KEY (`idCacifo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Trotinetes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetocacifo`.`Trotinetes` (
  `idTrotinete` INT NOT NULL AUTO_INCREMENT,
  `estado_bateria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTrotinete`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
