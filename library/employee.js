
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
       const newName = this.name
        return newName;
    }

    getId() {
        const newId = this.id
        return newId;
    }

    getEmail() {
        const newEmail = this.email
        return newEmail;
    }

    getRole() {
        return 'Employee';
    }


}

module.exports = Employee;