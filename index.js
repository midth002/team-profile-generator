const inquirer = require("inquirer");
const fs = require("fs");
const generateQuestions = require("./library/generateQuestions")



function init() {
generateQuestions();

};

init();