const team = require('./team')
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
