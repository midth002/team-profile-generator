const inquirer = require('inquirer')
const Engineer = require('./engineer.js')
const Manager = require('./manager')
const Intern = require('./intern')

const fs = require("fs");

    const mgrQuestions = ['What is the team managers name?', 'What is the managers ID?', 'What is the managers email address?', 'What is the office number?']
    const menuQuestion = 'Would you like to add engineer, intern, or finish building your team?'
    const engineerQuestions = ['What is the engineers name?', 'The engineers ID?', 'Engineers email address?', 'Engineers github username?']
    const internQuestions = ['What is the interns name?', 'The school the intern intended to?', 'The interns ID?', 'The interns email address?']
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

function initialHTML() {
    const html = `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css">
         <link rel="stylesheet" href="./styles.css">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Team Profile</title>
     </head>
     <body>
     <section class="hero is-danger">
       <div class="hero-body is-flex m-auto">
         <p class="title is-family-sans-serif">
           My Team
         </p>
       </div>
     </section>
     <!-- First Card -->
     <section class="container mt-50 is-flex flex-wrap is-two-thirds is-justify-content-center">
         <div class="columns pt-10  is-multiline is-justify-content-center">`;
 
     fs.writeFile('./index.html', html, function(err) {
         if (err) {console.log(err)}
     })
 }
 
 function addEmployee(emp) {
     
 let empData;

 const name = emp.getName();
 const email = emp.getEmail();
 const id = emp.getId();
 const role = emp.getRole();
 

 
  
 if(role == "Manager") {
    const officeNumber = emp.getOfficeNumber();
     empData =
         `<div class="card p-0 column">
         <div class="card-content p-0">
           <div class="media m-10 is-link">
             <div class="media-left">
             </div>
             <div class="media-content ">
               <p class="title is-4 ">${name}</p>
               <p class="subtitle is-6">Manager</p>
             </div>
           </div>
       
           <div class="content list p-auto">
             <ul>
                 <li class="box ml-3 mb-0 p-10">ID: ${id}</li>
                 <li class="box ml-3 mb-0 p-10">Email: <a href="mailto:${email}">${email}</a></li>
                 <li class="box ml-3 mb-0 p-10">Office Number: ${officeNumber}</li>
             </ul>
           </div>
         </div>
       </div>
         `;
 
 } else if (role === "Engineer") {
    const github = emp.getGithub();
     empData = 
     `<div class="card p-0 column">
     <div class="card-content p-0">
       <div class="media m-10 is-link">
         <div class="media-left">
         </div>
         <div class="media-content ">
           <p class="title is-4 ">${name}</p>
           <p class="subtitle is-6">Engineer</p>
         </div>
       </div>
   
       <div class="content list p-auto">
         <ul>
             <li class="box ml-3 mb-0 p-10">ID: ${id}</li>
             <li class="box ml-3 mb-0 p-10">Email: <a href="mailto:${email}">${email}</a></li>
             <li class="box ml-3 mb-0 p-10">GitHub: <a href="https://github.com/${github}">${github}</a></li>
         </ul>
       </div>
     </div>
   </div>
     `;
 
 } else if (role === "Intern") {
    const school = emp.getSchool();
      empData =
           
         `<div class="card p-0 column">
         <div class="card-content p-0">
           <div class="media m-10 is-link">
             <div class="media-left">
             </div>
             <div class="media-content ">
               <p class="title is-4 ">${name}</p>
               <p class="subtitle is-6">Intern</p>
             </div>
           </div>
       
           <div class="content list p-auto">
             <ul>
                 <li class="box ml-3 mb-0 p-10">ID: ${id}</li>
                 <li class="box ml-3 mb-0 p-10">Email: <a href="mailto:${email}">${email}</a></li>
                 <li class="box ml-3 mb-0 p-10">School: ${school}</li>
             </ul>
           </div>
         </div>
       </div>
         `;
     
     
 }
 
 
 console.log("Added the employee")
 fs.appendFile('./index.html', empData, function (err) {
    if(err) {
        console.log(err)
       
    }
 })
 

}
 
 function endHTML() {
    const endHtml =  ` </div>
     </section>
   
     </body>
     </html>`; 
     fs.appendFile('./index.html', endHtml, function(err) {
         if (err) {
             console.log(err)
         }
     })
 }

 function generateTeamHTML(teamInfoArray) {
     initialHTML();
     console.log("Array ")
     
     for (i=0;i<teamInfoArray.length;i++) {
        addEmployee(teamInfoArray[i])
     }
     console.log(teamInfoArray)
     endHTML();
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
        if (response.menu === 'Add Engineer') {
            team.generatEngineerQuestions();
        } else if (response.menu === 'Add Intern') {
            team.generateInternQuestions();
        } else {
            generateTeamHTML(teamInfoArray)
        }

}
    ).catch((err) => console.log(err))
}





module.exports = Team;
