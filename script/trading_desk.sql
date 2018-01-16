
CREATE TABLE IF NOT EXISTS `trading_desk`.`ad_solt` (
    `id_ad_solt` INT NOT NULL COMMENT '广告位ID',
    `ad_solt_name` LONGTEXT NULL COMMENT '广告位名称',
    `ad_solt_price` INT NOT NULL DEFAULT 0 COMMENT '价格',
    `ad_solt_camount` INT NOT NULL DEFAULT 0 COMMENT '竞价数量',
    `ad_solt_imp` VARCHAR(45) NULL COMMENT '印象',
    `ad_solt_clicks` INT NOT NULL DEFAULT 0 COMMENT '点击数',
    `ad_solt_payouts` INT NOT NULL DEFAULT 0 COMMENT '花费',
    PRIMARY KEY (`id_ad_solt`));

CREATE TABLE IF NOT EXISTS `trading_desk`.`ad_campagin` (
    `id_ad_campagin` INT NOT NULL COMMENT '广告竞拍id',
    `ad_cam_name` LONGTEXT NULL COMMENT '广告竞拍名',
    `ad_cam_date_s` DATETIME NULL COMMENT '开始日期',
    `ad_cam_date_e` DATETIME NULL COMMENT '结束日期',
    `ad_cam_price` INT NOT NULL DEFAULT 0 COMMENT '广告竞拍价格',
    `ad_cam_imgurl` TEXT(255) NULL COMMENT '图片网址',
    `ad_cam_clickurl` TEXT(255) NULL COMMENT '点击网址',
    PRIMARY KEY (`id_ad_campagin`));

CREATE TABLE IF NOT EXISTS `trading_desk`.`ads_report` (
    `ads_report_id` INT NOT NULL,
    `ads_report_date` DATETIME NULL,
    `ads_report_imprs` INT NOT NULL DEFAULT 0,
    `ads_report_clicks` INT NOT NULL DEFAULT 0,
    `ads_report_payouts` INT NOT NULL DEFAULT 0,
    `id_ad_campagin` INT NOT NULL,
    `id_ad_solt` INT NOT NULL,
    PRIMARY KEY (`ads_report_id`));

ALTER TABLE `trading_desk`.`ads_report`
ADD INDEX `id_ad_solt_idx` (`id_ad_solt` ASC);
ALTER TABLE `trading_desk`.`ads_report`
ADD CONSTRAINT `id_ad_solt`
  FOREIGN KEY (`id_ad_solt`)
  REFERENCES `trading_desk`.`ad_solt` (`id_ad_solt`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `trading_desk`.`ads_report`
ADD INDEX `id_ad_campagin_idx` (`id_ad_campagin` ASC);
ALTER TABLE `trading_desk`.`ads_report`
ADD CONSTRAINT `id_ad_campagin`
  FOREIGN KEY (`id_ad_campagin`)
  REFERENCES `trading_desk`.`ad_campagin` (`id_ad_campagin`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
