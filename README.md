# Ohjeet

Kaikki rajapinnat löytyy osoitteesta
http://localhost:3000/api/urheilijat/

Käytin Sequelize kirjastoa tehtävässä.
dbConfig.js tiedostossa voi määrittää tietokannan asetukset.


## Tietokanta

Tietokannan luonti komento
-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.4.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for urheilijat
CREATE DATABASE IF NOT EXISTS `urheilijat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `urheilijat`;

-- Dumping structure for table urheilijat.urheilija
CREATE TABLE IF NOT EXISTS `urheilija` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etunimi` varchar(255) NOT NULL,
  `sukunimi` varchar(255) NOT NULL,
  `kutsumanimi` varchar(255) NOT NULL,
  `syntymavuosi` datetime NOT NULL,
  `paino` float NOT NULL,
  `linkkiKuvaan` varchar(255) NOT NULL,
  `laji` varchar(255) NOT NULL,
  `saavutukset` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
