CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL UNIQUE,
  `password` VARCHAR(150) NOT NULL,
  `nickname` VARCHAR(20) NOT NULL UNIQUE,
  `createdAt` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- init data
INSERT INTO user(username, password, nickname) VALUES ("Harry", "potter", "har");
INSERT INTO user(username, password, nickname) VALUES ("Ronald", "Weasley", "ron");