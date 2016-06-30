/*
Navicat MySQL Data Transfer

Source Server         : weekly
Source Server Version : 50173
Source Host           : 10.0.1.197:3306
Source Database       : work

Target Server Type    : MYSQL
Target Server Version : 50173
File Encoding         : 65001

Date: 2016-06-30 17:38:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_daily
-- ----------------------------
DROP TABLE IF EXISTS `admin_daily`;
CREATE TABLE `admin_daily` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `daily_module` bigint(20) DEFAULT NULL COMMENT '日报模块(数据字典ID)',
  `daily_name` varchar(50) DEFAULT NULL COMMENT '日报名称',
  `daily_note` varchar(500) NOT NULL COMMENT '日报描述',
  `daily_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日报时间',
  `daily_timeout` int(11) DEFAULT NULL COMMENT '日报时长(小时)',
  `daily_progress` int(11) DEFAULT NULL COMMENT '日报完成进度(%)',
  `create_user_id` bigint(20) NOT NULL COMMENT '创建用户ID',
  `create_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '创建时间',
  `modify_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `FK_admin_user_admin_daily` (`create_user_id`),
  CONSTRAINT `FK_admin_user_admin_daily` FOREIGN KEY (`create_user_id`) REFERENCES `admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='日报';

-- ----------------------------
-- Records of admin_daily
-- ----------------------------

-- ----------------------------
-- Table structure for admin_daily_item
-- ----------------------------
DROP TABLE IF EXISTS `admin_daily_item`;
CREATE TABLE `admin_daily_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `admin_task_id` bigint(20) NOT NULL COMMENT '任务ID',
  `admin_daily_id` bigint(20) DEFAULT NULL COMMENT '日报ID',
  PRIMARY KEY (`id`),
  KEY `FK_admin_daily_admin_daily_item` (`admin_daily_id`),
  KEY `FK_admin_task_admin_daily_item` (`admin_task_id`),
  CONSTRAINT `FK_admin_task_admin_daily_item` FOREIGN KEY (`admin_task_id`) REFERENCES `admin_task` (`id`),
  CONSTRAINT `FK_admin_daily_admin_daily_item` FOREIGN KEY (`admin_daily_id`) REFERENCES `admin_daily` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='日报项';

-- ----------------------------
-- Records of admin_daily_item
-- ----------------------------

-- ----------------------------
-- Table structure for admin_daily_report
-- ----------------------------
DROP TABLE IF EXISTS `admin_daily_report`;
CREATE TABLE `admin_daily_report` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `daily_module` bigint(20) DEFAULT NULL COMMENT '日报模块(数据字典ID)',
  `daily_name` varchar(50) DEFAULT NULL COMMENT '日报名称',
  `daily_note` varchar(500) NOT NULL COMMENT '日报描述',
  `daily_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日报时间',
  `daily_timeout` int(11) DEFAULT NULL COMMENT '日报时长(小时)',
  `daily_progress` int(11) DEFAULT NULL COMMENT '日报完成进度(%)',
  `create_user_id` bigint(20) NOT NULL COMMENT '创建用户ID',
  `create_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '创建时间',
  `modify_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `FK_admin_user_admin_daily_report` (`create_user_id`),
  CONSTRAINT `FK_admin_user_admin_daily_report` FOREIGN KEY (`create_user_id`) REFERENCES `admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='日报报表';

-- ----------------------------
-- Records of admin_daily_report
-- ----------------------------

-- ----------------------------
-- Table structure for admin_dic
-- ----------------------------
DROP TABLE IF EXISTS `admin_dic`;
CREATE TABLE `admin_dic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID主键',
  `dic_name` varchar(50) DEFAULT NULL COMMENT '字典名称',
  `dic_value` varchar(50) DEFAULT NULL COMMENT '字典值',
  `dic_type` int(11) NOT NULL COMMENT '字典类型',
  `parentid` bigint(20) NOT NULL COMMENT '父节点ID',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据字典';

-- ----------------------------
-- Records of admin_dic
-- ----------------------------

-- ----------------------------
-- Table structure for admin_func
-- ----------------------------
DROP TABLE IF EXISTS `admin_func`;
CREATE TABLE `admin_func` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `func_name` varchar(500) DEFAULT NULL COMMENT '功能名称',
  `func_code` varchar(500) DEFAULT NULL COMMENT '功能编码',
  `dic_id` bigint(20) DEFAULT NULL COMMENT '项目ID(来源数据字典ID)',
  `func_url` varchar(500) NOT NULL COMMENT '功能URL',
  `func_status` int(11) NOT NULL DEFAULT '0' COMMENT '功能状态(0菜单;1功能)',
  `parent_id` int(11) DEFAULT '0' COMMENT '上级ID(可以多级，对应ID字段)',
  `category_code` varchar(500) DEFAULT '0' COMMENT '生成编码(后台自动生成,一级是五位数)',
  `is_leaf` int(11) NOT NULL DEFAULT '0' COMMENT '是否为叶子节点(1非叶子节点;0叶子节点)',
  `seq` int(11) NOT NULL DEFAULT '0' COMMENT '排序序列(当前节点顺序)',
  `is_removed` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除(1是;0无)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='菜单功能';

-- ----------------------------
-- Records of admin_func
-- ----------------------------

-- ----------------------------
-- Table structure for admin_role
-- ----------------------------
DROP TABLE IF EXISTS `admin_role`;
CREATE TABLE `admin_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_name` varchar(255) NOT NULL COMMENT '角色名称',
  `role_desc` varchar(255) DEFAULT NULL COMMENT '角色描述',
  `is_system` bit(1) NOT NULL COMMENT '是否是超级(0否1是)',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建日期',
  `modify_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '修改日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='角色权限';

-- ----------------------------
-- Records of admin_role
-- ----------------------------
INSERT INTO `admin_role` VALUES ('1', '前端工程师', '1', '', '2016-06-30 14:01:40', '2015-01-10 00:00:00');

-- ----------------------------
-- Table structure for admin_role_func
-- ----------------------------
DROP TABLE IF EXISTS `admin_role_func`;
CREATE TABLE `admin_role_func` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `admin_func_id` bigint(20) DEFAULT NULL COMMENT '菜单功能ID',
  `admin_role_id` bigint(20) NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`),
  KEY `FK_admin_func_admin_role_func` (`admin_func_id`),
  KEY `FK_admin_role_admin_role_func` (`admin_role_id`),
  CONSTRAINT `FK_admin_role_admin_role_func` FOREIGN KEY (`admin_role_id`) REFERENCES `admin_role` (`id`),
  CONSTRAINT `FK_admin_func_admin_role_func` FOREIGN KEY (`admin_func_id`) REFERENCES `admin_func` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色功能权限';

-- ----------------------------
-- Records of admin_role_func
-- ----------------------------

-- ----------------------------
-- Table structure for admin_task
-- ----------------------------
DROP TABLE IF EXISTS `admin_task`;
CREATE TABLE `admin_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `task_module` bigint(20) DEFAULT NULL COMMENT '任务模块(数据字典ID)',
  `task_name` varchar(50) DEFAULT NULL COMMENT '任务名称',
  `task_note` varchar(500) NOT NULL COMMENT '任务描述',
  `task_grade` int(11) NOT NULL COMMENT '任务等级(1,2,3,4,5)',
  `task_type` bigint(20) DEFAULT NULL COMMENT '任务类型(来源数据字典ID)',
  `task_start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '任务开始时间',
  `task_end` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '任务结束时间',
  `task_date` int(11) DEFAULT NULL COMMENT '任务时长(小时)',
  `task_progress` int(11) DEFAULT '0' COMMENT '任务完成进度(%)',
  `is_enabled` int(1) NOT NULL DEFAULT '0' COMMENT '是否可用(0可用1不可用)',
  `current_user_id` bigint(20) DEFAULT NULL COMMENT '当前用户ID',
  `create_user_id` bigint(20) NOT NULL COMMENT '创建用户ID',
  `create_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '创建时间',
  `modify_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `FK_admin_user_admin_task` (`create_user_id`),
  CONSTRAINT `FK_admin_user_admin_task` FOREIGN KEY (`create_user_id`) REFERENCES `admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='任务';

-- ----------------------------
-- Records of admin_task
-- ----------------------------

-- ----------------------------
-- Table structure for admin_task_item
-- ----------------------------
DROP TABLE IF EXISTS `admin_task_item`;
CREATE TABLE `admin_task_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `admin_task_id` bigint(20) NOT NULL COMMENT '任务ID',
  `task_item_name` varchar(50) DEFAULT NULL COMMENT '任务项名称',
  `task_item_file` varchar(100) DEFAULT NULL COMMENT '任务项文件路径',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `FK_admin_task_admin_task_item` (`admin_task_id`),
  CONSTRAINT `FK_admin_task_admin_task_item` FOREIGN KEY (`admin_task_id`) REFERENCES `admin_task` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='任务项';

-- ----------------------------
-- Records of admin_task_item
-- ----------------------------

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `email` varchar(255) NOT NULL COMMENT '电子邮箱',
  `logo` varchar(100) DEFAULT NULL COMMENT '头像',
  `is_enabled` int(1) NOT NULL COMMENT '是否可用(0可用1不可用)',
  `is_locked` int(1) NOT NULL COMMENT '是否锁住(0没有锁住1不锁住)',
  `locked_date` datetime DEFAULT NULL COMMENT '锁住日期',
  `login_date` datetime DEFAULT NULL COMMENT '登录日期',
  `login_failure_count` int(11) NOT NULL COMMENT '登录失败次数',
  `login_ip` varchar(255) DEFAULT NULL COMMENT '登录IP',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建日期',
  `modify_date` timestamp NOT NULL DEFAULT '2015-01-10 00:00:00' COMMENT '修改日期',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户';

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES ('1', '1', '1', '1', '1', '1', null, null, '0', '1', '1', '1', '2016-06-30 14:01:18', '2015-01-10 00:00:00');

-- ----------------------------
-- Table structure for admin_user_dept
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_dept`;
CREATE TABLE `admin_user_dept` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `dept_code` varchar(500) DEFAULT NULL COMMENT '部门编码',
  `dept_name` varchar(500) DEFAULT NULL COMMENT '功能名称',
  `parent_id` int(11) DEFAULT '0' COMMENT '上级ID(可以多级，对应ID字段)',
  `category_code` varchar(500) DEFAULT '0' COMMENT '生成编码(后台自动生成,一级是五位数)',
  `seq` int(11) NOT NULL DEFAULT '0' COMMENT '排序序列(当前节点顺序)',
  `is_removed` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除(1是;0无)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户部门';

-- ----------------------------
-- Records of admin_user_dept
-- ----------------------------

-- ----------------------------
-- Table structure for admin_user_dept_like
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_dept_like`;
CREATE TABLE `admin_user_dept_like` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `admin_user_dept_id` bigint(20) NOT NULL COMMENT '用户部门ID',
  `admin_user_id` bigint(20) NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`),
  KEY `FK_admin_user_admin_user_dept_like` (`admin_user_id`),
  KEY `FK_admin_user_dept_admin_user_dept_like` (`admin_user_dept_id`),
  CONSTRAINT `FK_admin_user_dept_admin_user_dept_like` FOREIGN KEY (`admin_user_dept_id`) REFERENCES `admin_user_dept` (`id`),
  CONSTRAINT `FK_admin_user_admin_user_dept_like` FOREIGN KEY (`admin_user_id`) REFERENCES `admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户部门关联';

-- ----------------------------
-- Records of admin_user_dept_like
-- ----------------------------

-- ----------------------------
-- Table structure for admin_user_role
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_role`;
CREATE TABLE `admin_user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `admin_role_id` bigint(20) NOT NULL COMMENT '角色ID',
  `admin_user_id` bigint(20) NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`),
  KEY `FK_admin_role_admin_user_role` (`admin_role_id`),
  KEY `FK_admin_user_admin_user_role` (`admin_user_id`),
  CONSTRAINT `FK_admin_user_admin_user_role` FOREIGN KEY (`admin_user_id`) REFERENCES `admin_user` (`id`),
  CONSTRAINT `FK_admin_role_admin_user_role` FOREIGN KEY (`admin_role_id`) REFERENCES `admin_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户权限';

-- ----------------------------
-- Records of admin_user_role
-- ----------------------------
INSERT INTO `admin_user_role` VALUES ('1', '1', '1');

-- ----------------------------
-- Table structure for admin_user_team
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_team`;
CREATE TABLE `admin_user_team` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `team_code` varchar(500) DEFAULT NULL COMMENT '团队编码',
  `team_name` varchar(500) DEFAULT NULL COMMENT '团队名称',
  `parent_id` int(11) DEFAULT '0' COMMENT '上级ID(可以多级，对应ID字段)',
  `category_code` varchar(500) DEFAULT '0' COMMENT '生成编码(后台自动生成,一级是五位数)',
  `seq` int(11) NOT NULL DEFAULT '0' COMMENT '排序序列(当前节点顺序)',
  `is_removed` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除(1是;0无)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户团队';

-- ----------------------------
-- Records of admin_user_team
-- ----------------------------

-- ----------------------------
-- Table structure for admin_user_team_like
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_team_like`;
CREATE TABLE `admin_user_team_like` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `admin_user_team_id` bigint(20) NOT NULL COMMENT '用户团队ID',
  `admin_user_id` bigint(20) NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`),
  KEY `FK_admin_user_admin_user_team_like` (`admin_user_id`),
  KEY `FK_admin_user_team_admin_user_team_like` (`admin_user_team_id`),
  CONSTRAINT `FK_admin_user_team_admin_user_team_like` FOREIGN KEY (`admin_user_team_id`) REFERENCES `admin_user_team` (`id`),
  CONSTRAINT `FK_admin_user_admin_user_team_like` FOREIGN KEY (`admin_user_id`) REFERENCES `admin_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户团队关联';

-- ----------------------------
-- Records of admin_user_team_like
-- ----------------------------
