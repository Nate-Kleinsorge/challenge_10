class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    getName() {console.log(`name: ${this.name}`)};

    getId() {console.log(`id: ${this.id}`)};

    getEmail() {console.log(`email: ${this.email}`)};

    getRole() {console.log(`role: Employee`)};
};

module.exports = Employee;

