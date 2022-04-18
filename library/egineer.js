const Employee = require('./employee.js')

class Engineer extends Employee {
    
    constructor(name, id, email, gitUserName) {
        
        super(name, id, email)
        this.gitUserName = gitUserName;
    }

    getGithub() {
        return this.gitUserName;
    }

    getRole() {
        return 'Engineer';
    }
}

exports.Engineer = Engineer;