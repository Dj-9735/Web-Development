USE emp;
CREATE table Department(
Department_No INT(2),
Department_Name varchar(13),
Location varchar(14),
primary key (Department_No));

INSERT into Department(Department_No,Department_Name,Location) values(10,"Accounting","New York");
INSERT into Department(Department_No,Department_Name,Location) values(20,"Research","Dallas");
INSERT into Department(Department_No,Department_Name,Location) values(30,"Sales","Chicago");
INSERT into Department(Department_No,Department_Name,Location) values(40,"Operations","Boston");

CREATE table Employee(
Employee_No INT(4),
Employee_Name varchar(10),
Job varchar(9),
Department_No INT(2),
primary key(Employee_No));

INSERT into Employee values(7369, "SMITH","CLERK",20);

SELECT * FROM Employee;
SELECT * FROM Department;