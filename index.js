//require neccessary files
const Employee = require("./lib/employeeClass");
const Manager = require("./lib/employeeClass");
const Engineer = require("./lib/employeeClass");
const Intern = require("./lib/employeeClass");

//set the parameters to variables
const name = process.argv[2];
const id = process.argv[3];
const email = process.argv[4];
const lastArg = process.argv[5];

//determine their role based of of the type of variable the last argument is
if (typeof(lastArg) === String) {
    let role = "intern";
    return role;
} else if (typeof(lastArg) === Number) {
    let role = "manager";
    return role;
} else if (typeof(lastArg) === URL) {
    let role = "engineer";
    return role;
};

//make a new employee
const employee = new Employee(name, id, email, role, lastArg);

