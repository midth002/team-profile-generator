class Engineer {
    
    constructor(gitUserName) {
        this.gitUserName = gitUserName;
    }

    getGithub() {
        return this.gitUserName;
    }

    getRole() {
        return 'Engineer'
    }
}