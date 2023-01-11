-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 09 jan. 2023 à 22:40
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdtest`
--

-- --------------------------------------------------------

--
-- Structure de la table `envoyer`
--

DROP TABLE IF EXISTS `envoyer`;
CREATE TABLE IF NOT EXISTS `envoyer` (
  `id_envoyer` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `id_reponse` int(11) NOT NULL,
  PRIMARY KEY (`id_envoyer`),
  KEY `id_reponse` (`id_reponse`)
) ENGINE=MyISAM AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
  `id_res` int(50) NOT NULL AUTO_INCREMENT,
  `id_reponse` int(50) NOT NULL,
  `message_reponse` text NOT NULL,
  PRIMARY KEY (`id_res`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reponse`
--

INSERT INTO `reponse` (`id_res`, `id_reponse`, `message_reponse`) VALUES
(1, 1, 'Bonjour a vous'),
(3, 2, 'S\'il vous plait soyez plus claire dans ce que vous voulez faire'),
(4, 3, 'je resoud les problemes en:\r\n1-marketing digital, \r\n2-developpement des sites web et applications, \r\n3-support de communication(flyers, carte de visite), \r\n4-materiel informatique'),
(5, 4, 'Quel est votre statut:\r\nentreprise ou entrepreneur?\r\n'),
(6, 5, 'Avez vous les outils necessaires comme un site web , une application ou un reseau social '),
(7, 6, 'Quelle difficulte rencontree vous parmi celles ci:\r\nA.Strategie\r\nB.Visibilite\r\nC.Credibilite\r\nD.Vente\r\nE.Au niveau du contenu\r\nF.Tous'),
(8, 7, 'Nous vous proposons une alternative a fin de resoudre vos problemes. Merci'),
(9, 8, 'Nous vous proposons de creer vos outils.\r\nAvez vous besoin d\'une formation?'),
(10, 9, 'Lien vers une formation externe...');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
