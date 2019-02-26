--users DDL
CREATE TABLE deviationmysql.users (
	seq INT NOT NULL AUTO_INCREMENT,
	user_email varchar(200) NOT NULL,
	user_pwd varchar(200) NOT NULL,
	salt varchar(128) NOT NULL,
	token varchar(200) NULL,
	join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (seq)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci
COMMENT='Users manager'
AUTO_INCREMENT=1;
