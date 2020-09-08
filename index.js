// Dependancies. MySQL for DB, inquirer for CLI and cTable 
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Boilerplate code creating connection to MySQL DB //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "your password",
    database: "employee_tracker_db",
});

// Confirming connection established, start CLI by calling init() //
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});

// CLI interface //
function init() {
    inquirer.prompt([{
        message: "Dynamic Employee DB: What would you like to do?",
        name: "mainMenu",
        type: "list",
        choices: [
            "View All Employees",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Position",
            "Update Employee Manager",
            "View All Positions",
            "Exit"
        ]
    }])
        .then(({ mainMenu }) => {
            switch (mainMenu) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Employees by Manager":
                    viewEmployeesByManager();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Position":
                    updateEmployeePosition();
                    break;
                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;
                case "View All Positions":
                    viewAllPositions();
                    break;
                case "Exit":
                    connection.end();
                    break;
                default: connection.end();
            }
        })
}

// Print to console as table (console.table): List of all current employees. SELECT *(all) FROM employee(table)
function viewAllEmployees() {
    connection.query("SELECT e.id, e.first_name AS First Name, e.last_name AS Last Name, e.position_id AS Position, e.manager_id AS manager, FROM employees, INNER JOIN employees ON positions.title = employees.id", function (err, res) {
        if (err) throw (err)
        console.table(res)
    })
};

function viewEmployeesByManager() {
    inquirer.prompt([{
        message: "Enter manager name to see his/her staff:",
        name: "employeesByManager",
        type: "input",
    }]) .then; {
    connection.query("SELECT * FROM employees WHERE manager_id = res")
    
    }
}
