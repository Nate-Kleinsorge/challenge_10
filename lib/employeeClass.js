class Employee {
    constructor(name, id, email, role) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = role
    }

    getName() {console.log(`name: ${this.name}`)};

    getId() {console.log(`id: ${this.id}`)};

    getEmail() {console.log(`email: ${this.email}`)};

    getRole() {console.log(`role: ${this.role}`)};
};

module.exports = Employee;