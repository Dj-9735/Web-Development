USE emp;
 CREATE table Employee(
Employee_No INT(4),
Employee_Name varchar(10),
Job varchar(15),
MGR INT(4),
HireDate DATE,
Salary double(7,2),
Commission double(7,2),
Department_No INT(2),
FULLTEXT(Job),
primary key(Employee_No),
foreign key(Department_No) references Department(Department_No));

INSERT into Employee values(7369, "SMITH","CLERK",7902,"1980-12-17",800.00,null,20);
INSERT into Employee values(7499, "ALLEN","SALESMAN",7698,"1981-02-20",1000.00,300.00,30);
INSERT into Employee values(7521, "WARK","SALESMAN",7698,"1981-02-22",1250.00,500.00,30);
INSERT into Employee values(7566, "JONES","MANAGER",7839,"1981-02-04",2975.00,null,20);
INSERT into Employee values(7654, "MARTINE","SALESMAN",7698,"1981-09-28",1250.00,1400.00,30);
INSERT into Employee values(7698, "BLAKE","MANAGER",7839,"1981-01-05",2850.00,null,30);
INSERT into Employee values(7782, "CLARK","MANAGER",7839,"1981-06-09",2450.00,null,10);
INSERT into Employee values(2788, "SCOTT","ANALYST",7566,"1981-04-19",3000.00,null,20);
INSERT into Employee values(7839, "KING","PRESIDENT",null,"1981-11-17",5000.00,null,10);
INSERT into Employee values(7644, "TURNER","SALESMAN",7698,"1981-09-08",1500.00,null,20);
INSERT into Employee values(7879, "ADAMS","CLERK",7788,"1981-05-23",1100.00,null,20);
INSERT into Employee values(7900, "JAMES","CLERK",7698,"1981-12-03",950.00,null,30);
INSERT into Employee values(7902, "FORD","ANALYST",7566,"1981-12-03",3000.00,null,20);
INSERT into Employee values(7934, "MILLER","CLERK",7782,"1981-01-23",1300.00,null,10);

SELECT * FROM Employee;