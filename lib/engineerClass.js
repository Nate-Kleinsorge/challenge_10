const Employee = require("./employeeClass");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }

    getRole() {console.log(`role: Engineer`)}

    getGithub() {console.log(`github: ${this.github}`)};
}

module.exports = Engineer;
