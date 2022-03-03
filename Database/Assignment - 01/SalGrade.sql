USE emp;

CREATE table SalaryGrade(
Grade INT(1),
Low_Sal INT(4),
High_Sal INT(4)
);

INSERT INTO SalaryGrade values(1,700,1200);
INSERT INTO SalaryGrade values(2,1201,1400);
INSERT INTO SalaryGrade values(3,1401,2000);
INSERT INTO SalaryGrade values(4,2001,3000);
INSERT INTO SalaryGrade values(5,3001,9999);

SELECT * FROM SalaryGrade;