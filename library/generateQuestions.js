const inquirer = require('inquirer')

    const mgrQuestions = ['What is the team managers name?', 'What is the managers ID?', 'What is the managers email address?', 'What is the office number?']
    const menuQuestion = 'Would you like to add engineer, intern, or finish building your team?'
    const engineerQuestions = ['What is the engineers name?', 'The engineers ID?', 'Engineers email address?', 'Engineers github username?']
    const internQuestions = ['What is the interns name?', 'The school the intern intended to?', 'The interns ID', 'The interns email address']
    const menuChoices = ['Add Engineer', 'Add Intern', 'Finish building']

function generatManagerQuestions () {
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
            name: 'managerName',
            message: mgrQuestions[3]
        },
    ])
    .then((response) => {
        console.log(response)
        generateMenu();
}
    );
}

function generatEngineerQuestions () {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'egineerName',
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
            name: 'egineerName',
            message: engineerQuestions[3]
        },
    ])
    .then((response) => {
        console.log("You have created your Engineer!");
        console.log(response)
        
}
    );
}
function generateInternQuestions () {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: internQuestions[0]
        },
        {
            type: 'input',
            name: 'internID',
            message: internQuestions[1]
        },
        {
            type: 'input',
            name: 'internEmail',
            message: internQuestions[2]
        },
        {
            type: 'input',
            name: 'internName',
            message: internQuestions[3]
        },
    ])
    .then((response) => {
        console.log("You have created your intern!")
        console.log(response)
        
}
    );
}


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
        console.log(response.menu)  

        if (response.menu === 'Add Engineer') {
            generatEngineerQuestions();
        } else if (response.menu === 'Add Intern') {
            generateInternQuestions();
        } else {
            console.log("You have create your team!")
        }
}
    );
}

function generateQuestions() {
    generatManagerQuestions(); 
   
}

module.exports = generateQuestions;
