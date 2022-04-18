const inquirer = require("inquirer");
const fs = require("fs");
const Team = require("./library/generateQuestions")

const team = new Team();

function init() {
    team.generatManagerQuestions();
};

init();