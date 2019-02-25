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
    cheeseType varchar (255) NOT NULL,
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



CREATE TABLE Wine ( 
    wineId int NOT NULL AUTO_INCREMENT,
    wineName varchar (255) NOT NULL,
    wineType varchar (255) NOT NULL,
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


INSERT INTO Cheese (
    cheeseId, 
    cheeseName, 
    cheeseDescription, 
    cheeseType) 
    VALUES 
    (1, 
    "Cheddar", 
    "Cows milk cheese that is aged for one year. Rich and full-bodied with a smooth finish",
    "Aged");

INSERT INTO Cheese (     cheeseId,      cheeseName,      cheeseDescription,      cheeseType)      VALUES      (2,      "Brie de Meaux",      "Brie description",     "Soft");

INSERT INTO Cheese (     cheeseId,      cheeseName,      cheeseDescription,      cheeseType)      VALUES      (3,      "Roquefort",      "Roquefort description",     "Blue");

INSERT INTO Cheese (     cheeseId,      cheeseName,      cheeseDescription,      cheeseType)      VALUES      (4,  "Pecorino Sardo",      "Pecorino description",     "Firm");

INSERT INTO Wine (
    wineId, 
    wineName, 
    wineDescription, 
    wineType,
    cheeseId) 
    VALUES 
    (1, 
    "Pinot Noir",
    "Light to medium bodied and fruit-forward",
    "Red",
    1 );

INSERT INTO Wine (
    wineId, 
    wineName, 
    wineDescription, 
    wineType,
    cheeseId) 
    VALUES 
    (2,
    "Prosecco",
    "Dry Italian white wine, delicate fruit and enticing aromatics, lots of bubbles (spumante)",
    "Sparkling",
    2);

    INSERT INTO Wine (
    wineId, 
    wineName, 
    wineDescription, 
    wineType,
    cheeseId) 
    VALUES 
    (3,
    "Sauternes",
    "French Red",
    "Red",
    3);
 
  INSERT INTO Wine (
    wineId, 
    wineName, 
    wineDescription, 
    wineType,
    cheeseId) 
    VALUES 
    (4,
    "Tempranillo",
    "Full-bodied red wine from Spain",
    "Red",
    4);

SELECT * FROM Cheese;
+----------+----------------+------------+---------------------------------------------------------------------------------------+
| cheeseId | cheeseName     | cheeseType | cheeseDescription                                                                     |
+----------+----------------+------------+---------------------------------------------------------------------------------------+
|        1 | Cheddar        | Aged       | Cows milk cheese that is aged for one year. Rich and full-bodied with a smooth finish |
|        2 | Brie de Meaux  | Soft       | Brie description                                                                      |
|        3 | Roquefort      | Blue       | Roquefort description                                                                 |
|        4 | Pecorino Sardo | Firm       | Pecorino description                                                                  |
+----------+----------------+------------+---------------------------------------------------------------------------------------+

SELECT * FROM Wine;
+--------+-------------+-----------+-------------------------------------------------------------------------------------------+----------+
| wineId | wineName    | wineType  | wineDescription                                                                           | cheeseId |
+--------+-------------+-----------+-------------------------------------------------------------------------------------------+----------+
|      1 | Pinot Noir  | Red       | Light to medium bodied and fruit-forward                                                  |        1 |
|      2 | Prosecco    | Sparkling | Dry Italian white wine, delicate fruit and enticing aromatics, lots of bubbles (spumante) |        2 |
|      3 | Sauternes   | Red       | French Red                                                                                |        3 |
|      4 | Tempranillo | Red       | Full-bodied red wine from Spain                                                           |        4 |
+--------+-------------+-----------+-------------------------------------------------------------------------------------------+----------+
