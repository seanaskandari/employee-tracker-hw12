INSERT INTO departments (deptname) VALUES 
("sales"),
("engineering"),
("legal"),
("finance");

INSERT INTO positions (title, salary, dept_id) VALUES 
("Sales Rep", 50000, 1),
("Sales Director", 90000, 1),
("Software Engineer", 120000, 2),
("Engineering Director", 170000, 2),
("Legal Assistant", 40000, 3),
("General Counsel", 140000, 3),
("Accountant", 70000, 4),
("Finance Director", 110000, 4);

INSERT INTO employees (first_name, last_name, position_id, manager_id) VALUES
("Charles", "Moondy", 2, null),
("Matt", "McNew", 1, 1),
("Geoff", "Givens", 1, 1),
("Ray", "Lewis", 1, 1), 
("Alissa", "Cadbury", 4, null),
("Eduardo", "Reyes", 3, 5), 
("Phillip", "Morgan", 3, 5),
("Alex", "Snittsel", 3, 5), 
("Lance", "Everett", 6, null), 
("Christian", "Morales", 5, 9), 
("Anthony", "Fuentes", 5, 9), 
("Clint", "Twinning", 5, 9), 
("Zamora", "Urestegui", 8, null), 
("Kyle", "Washington", 7, 13),
("Andrew", "Magnolia", 7, 13), 
("Xotichl", "Cantu", 7, 13);

