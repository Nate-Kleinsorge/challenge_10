//require neccessary files
const Manager = require("./lib/employeeClass");
const Engineer = require("./lib/employeeClass");
const Intern = require("./lib/employeeClass");
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'myTeam.html')
const render = require('./src/pageTemplate');

const employees = [];

function appMenu() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'what is your managers name?',
                validate: (answer) => {
                    if (!answer) {
                        return 'please enter a name.';
                    } else {
                        return true;
                    }
                },
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'what is your managers ID number?',
                validate: (answer) => {
                    valid = /^[1-9]\d*$/.test(answer);
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter number greater than 0'
                    }
                },
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'please enter your managers email address:',
                validate: (answer) => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter valid email address.';
                    }
                },
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'please enter your office number:',
                validate: (answer) => {
                    valid = /^[1-9]\d*$/.test(answer);
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter number greater than 0'
                    }
                },
            }
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
            );
            employees.push(manager);
            createTeam();
        })
    };

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'which type of employee do you want to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'I dont want to add any.'
                ],
            },
        ])
        .then((answer) => {
            switch (answer.choice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    } 

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'what is your engineers name?',
                validate: (answer) => {
                    if (!answer) {
                        return 'please enter a name.';
                    } else {
                        return true;
                    }
                },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'what is your engineers ID number?',
                validate: (answer) => {
                    valid = /^[1-9]\d*$/.test(answer);
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter number greater than 0'
                    }
                },
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'please enter your engineers email address:',
                validate: (answer) => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter valid email address.';
                    }
                },
            },
            {
                type: 'input',
                name: 'github',
                message: 'what is your engineers github username?',
                validate: (answer) => {
                    if (!answer) {
                        return 'please enter a github Username';
                    } else {
                        return true;
                    }
                },
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.enineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.github
            );
            employees.push(engineer);
            createTeam();
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'what is your interns name?',
                validate: (answer) => {
                    if (!answer) {
                        return 'please enter a name.';
                    } else {
                        return true;
                    }
                },
            },
            {
                type: 'input',
                name: 'internId',
                message: 'what is your interns ID number?',
                validate: (answer) => {
                    valid = /^[1-9]\d*$/.test(answer);
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter number greater than 0'
                    }
                },
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'please enter your interns email address:',
                validate: (answer) => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                    if (valid) {
                        return true;
                    } else {
                        return 'please enter valid email address.';
                    }
                },
            },
            {
                type: 'input',
                name: 'school',
                message: 'what is your interns school/orginization?',
                validate: (answer) => {
                    if (!answer) {
                        return false;
                    } else {
                        return true;
                    }
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.school
            );
            employees.push(intern);
            createTeam();
        })
    }

    function buildTeam() {
         if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
          }
          fs.writeFileSync(distPath, render(employees), 'utf-8');
        }

    createManager();
}

appMenu();