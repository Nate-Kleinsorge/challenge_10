const Employee = require("./employeeClass");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {console.log(`role: Intern`)}

    getSchool() {console.log(`school: ${this.school}`)};
}

module.exports = Intern;