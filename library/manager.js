const Employee = require('./employee.js')

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email, officeNumber)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

exports.Manager = Manager;

