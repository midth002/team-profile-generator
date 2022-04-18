const inquirer = require('inquirer')
const Engineer = require('./engineer.js')
const Manager = require('./manager')
const Intern = require('./intern')

    const mgrQuestions = ['What is the team managers name?', 'What is the managers ID?', 'What is the managers email address?', 'What is the office number?']
    const menuQuestion = 'Would you like to add engineer, intern, or finish building your team?'
    const engineerQuestions = ['What is the engineers name?', 'The engineers ID?', 'Engineers email address?', 'Engineers github username?']
    const internQuestions = ['What is the interns name?', 'The school the intern intended to?', 'The interns ID', 'The interns email address']
    const menuChoices = ['Add Engineer', 'Add Intern', 'Finish building']

let teamInfoArray = []



class Team {

generatManagerQuestions() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: mgrQuestions[0]
        },
        {
            type: 'input',
            name: 'managerID',
            message: mgrQuestions[1]
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: mgrQuestions[2]
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: mgrQuestions[3]
        },
    ])
    .then((response) => {
        const manager = new Manager(response.managerName, response.managerID, 
            response.managerEmail, response.officeNumber)
        console.log(manager)
        teamInfoArray.push(manager)
        generateMenu();
}
    );
}

generatEngineerQuestions () {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: engineerQuestions[0]
        },
        {
            type: 'input',
            name: 'engineerID',
            message: engineerQuestions[1]
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: engineerQuestions[2]
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: engineerQuestions[3]
        },
    ])
    .then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerID, 
            response.engineerEmail, response.engineerGithub)
        console.log(engineer)
        teamInfoArray.push(engineer)
        generateMenu();
        
}
    );
}

generateInternQuestions () {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: internQuestions[0]
        },
        {
            type: 'input',
            name: 'internSchool',
            message: internQuestions[1]
        },
        {
            type: 'input',
            name: 'internId',
            message: internQuestions[2]
        },
        {
            type: 'input',
            name: 'internEmail',
            message: internQuestions[3]
        },
    ])
    .then((response) => {
        const intern = new Intern(response.internName, response.internID, 
            response.internEmail, response.internSchool)
        console.log(intern)
        teamInfoArray.push(intern)
        generateMenu();
        
}
    );
}



}

const team = new Team();


function generateMenu() {
    inquirer 
    .prompt([
        {
            type: 'list',
            name: 'menu',
            message: menuQuestion,
            choices: menuChoices
        }
    ])
    .then((response) => {
        if (response.menu === 'Add Engineer') {
            team.generatEngineerQuestions();
        } else if (response.menu === 'Add Intern') {
            team.generateInternQuestions();
        } else {
            console.log("You have created your team!")
            console.log(teamInfoArray)
        }
}
    );
}


module.exports = Team;
