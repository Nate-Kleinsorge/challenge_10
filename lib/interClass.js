const Employee = require("./employeeClass");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name),
        super(id),
        super(email), 
        this.school = school
    }

    getSchool() {console.log(`school: ${this.school}`)};
}

module.exports = Intern;