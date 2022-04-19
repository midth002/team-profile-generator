
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
       const newName = this.name
        if (newName === '') {
            throw 'Please enter a name'
        }
        return newName;
    }

    getId() {
        const newId = this.id
        if (newId === '') {
            throw 'Please enter an ID'
        } 
        return newId;
    }

    getEmail() {
        const newEmail = this.email
        if (newEmail === '') {
            throw 'Provide an email'
        }
        return newEmail;
    }

    getRole() {
        return 'Employee';
    }


}

module.exports = Employee;