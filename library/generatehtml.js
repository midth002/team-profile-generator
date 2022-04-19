const teamArray = require('./team')



  const content = () => {  `<!DOCTYPE html>
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
  <section class="container mt-100 is-flex flex-wrap is-two-thirds is-justify-content-center">
      <div class="columns pt-10  is-multiline is-justify-content-center">
      
  </div>
  </section>

  </body>
  </html>`
}


        const engineerCard = ({name, id, email, github}) => 
        
        {
        `<div class="card p-0 column is-one-quarter">
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
                <li class="box ml-3 mb-0 p-10">Email: ${email}</li>
                <li class="box ml-3 mb-0 p-10">GitHub: ${github}</li>
            </ul>
          </div>
        </div>
      </div>
        `;

   
}

    const internCard = ({name, id, email, school}) => {
          
    `<div class="card p-0 column is-one-quarter">
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
            <li class="box ml-3 mb-0 p-10">Email: ${email}</li>
            <li class="box ml-3 mb-0 p-10">School: ${school}</li>
        </ul>
      </div>
    </div>
  </div>
    `;

}


    const managerCard = ({name, id, email, officeNumber}) => {

    `<div class="card p-0 column is-one-quarter">
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
            <li class="box ml-3 mb-0 p-10">Email: ${email}</li>
            <li class="box ml-3 mb-0 p-10">Office Number: ${officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
    `;
}






module.exports = {
  html: content,
  managerCard: managerCard,
  engineerCard: engineerCard,
  internCard: internCard
}

