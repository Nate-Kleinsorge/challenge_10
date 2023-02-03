const Employee = require("./employeeClass");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole() {console.log(`role: Manager`)}

    getOfficeNumber() {console.log(`Office Number: ${this.officeNumber}`)}
}

module.exports = Manager;