const Employee = require("./employeeClass");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name),
        super(id),
        super(email),
        this.officeNumber = officeNumber
    }

}

module.exports = Manager;