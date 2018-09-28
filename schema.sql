DROP DATABASE IF EXISTS db;

CREATE DATABASE db;

USE db;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'reviews'
-- 
-- ---

DROP TABLE IF EXISTS `reviews`;
		
CREATE TABLE `reviews` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `comment` VARCHAR NULL DEFAULT NULL,
  `service_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `avatar_pic` INTEGER NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `city_of_residence` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'services'
-- 
-- ---

DROP TABLE IF EXISTS `services`;
		
CREATE TABLE `services` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `location` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `pic_url` VARCHAR NULL DEFAULT NULL,
  `service_name` VARCHAR NULL DEFAULT NULL,
  `difficulty` INTEGER NULL DEFAULT NULL,
  `deleted` INTEGER NULL DEFAULT NULL,
  `category` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'consumed_services'
-- 
-- ---

DROP TABLE IF EXISTS `consumed_services`;
		
CREATE TABLE `consumed_services` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `service_id` INTEGER NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'offered_services'
-- 
-- ---

DROP TABLE IF EXISTS `offered_services`;
		
CREATE TABLE `offered_services` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `service_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'fav_services'
-- 
-- ---

DROP TABLE IF EXISTS `fav_services`;
		
CREATE TABLE `fav_services` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `service_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `reviews` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `reviews` ADD FOREIGN KEY (service_id) REFERENCES `services` (`id`);
ALTER TABLE `services` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `consumed_services` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `consumed_services` ADD FOREIGN KEY (service_id) REFERENCES `services` (`id`);
ALTER TABLE `offered_services` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `offered_services` ADD FOREIGN KEY (service_id) REFERENCES `services` (`id`);
ALTER TABLE `fav_services` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `fav_services` ADD FOREIGN KEY (service_id) REFERENCES `services` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `services` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `consumed_services` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `offered_services` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `fav_services` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `reviews` (`id`,`rating`,`user_id`,`comment`,`service_id`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`user_id`,`name`,`avatar_pic`,`description`,`city_of_residence`) VALUES
-- ('','','','','','');
-- INSERT INTO `services` (`id`,`user_id`,`location`,`description`,`pic_url`,`service_name`,`difficulty`,`deleted`,`category`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `consumed_services` (`id`,`user_id`,`service_id`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `offered_services` (`id`,`user_id`,`service_id`) VALUES
-- ('','','');
-- INSERT INTO `fav_services` (`id`,`user_id`,`service_id`) VALUES
-- ('','','');