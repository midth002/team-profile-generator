const inquirer = require("inquirer");
const fs = require("fs");
const Team = require("./library/team")

const team = new Team();

function init() {
    team.generatManagerQuestions();
};

init();