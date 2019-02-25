/* 
TicketId: CWINDER005 & CWINDER009

Commands used to set up mySQL RDS database
Following mySQL db instance created on AWS

endpoint: cheesywinderdb.cczxcqftpcs4.eu-west-2.rds.amazonaws.com

In terminal: 
*/

sudo apt-get install mysql-client
mysql --version
mysql -u root -p -h cheesywinderdb.cczxcqftpcs4.eu-west-2.rds.amazonaws.com

/* Now in mysql command line */

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| innodb             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+

mysql> CREATE DATABASE cheesyWinder;

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| cheesyWinder       |
| innodb             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.01 sec)

mysql> USE cheesyWinder;
Database changed

CREATE TABLE Cheese ( 
    cheeseId int NOT NULL AUTO_INCREMENT,
    cheeseName varchar (255) NOT NULL,
    cheeseDescription varchar (255) NOT NULL, 
    PRIMARY KEY (cheeseId) 
    );

mysql> SHOW TABLES;
+------------------------+
| Tables_in_cheesyWinder |
+------------------------+
| Cheese                 |
+------------------------+
1 row in set (0.02 sec)

mysql> SHOW CREATE TABLE Cheese;
+--------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Table  | Create Table                                                                                                                                                                                                               |
+--------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Cheese | CREATE TABLE `Cheese` (
  `cheeseId` int(11) NOT NULL AUTO_INCREMENT,
  `cheeseName` varchar(255) NOT NULL,
  `cheeseDescription` varchar(255) NOT NULL,
  PRIMARY KEY (`cheeseId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
+--------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.02 sec)


CREATE TABLE Wine ( 
    wineId int NOT NULL AUTO_INCREMENT,
    wineName varchar (255) NOT NULL,
    wineDescription varchar (255) NOT NULL,  
    cheeseId int, 
    PRIMARY KEY (wineId), 
    FOREIGN KEY (cheeseId) REFERENCES Cheese (cheeseId) 
    );

    mysql> SHOW TABLES;
+------------------------+
| Tables_in_cheesyWinder |
+------------------------+
| Cheese                 |
| Wine                   |
+------------------------+
2 rows in set (0.01 sec)

mysql> ALTER TABLE Cheese 
    -> ADD COLUMN wineID int;

mysql> ALTER TABLE Cheese 
    -> ADD FOREIGN KEY (wineId) REFERENCES Wine (wineId); 

