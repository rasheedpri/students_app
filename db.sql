CREATE DATABASE students;
USE students;
CREATE TABLE IF NOT EXISTS `students` (
    `id` int(5) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `address` varchar(255) NOT NULL,
    `mobile` int(15) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

INSERT INTO `students` (`name`,`email`,`address`,`mobile`)
VALUES
  ("rasheed", "rasheedpri@gmail.com", 'Chettippadi',9656543698);
