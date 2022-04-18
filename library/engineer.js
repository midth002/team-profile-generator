const Employee = require('./employee')

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

module.exports = Engineer;