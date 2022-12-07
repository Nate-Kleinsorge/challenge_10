const Employee = require("./employeeClass");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name),
        super(id),
        super(email),
        this.github = github
    }

    getGithub() {console.log(`github: ${this.github}`)};
}

module.exports = Engineer;