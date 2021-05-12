const inquirer = require('inquirer');

//const fs = require('fs');

//const generatePage = require('./src/page-template.js');

//const pageHTML = generatePage(name, github);

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;    
    
//fs.writeFile('./index.html', generatePage(name, github), err => {
//    if (err) throw new Error(err);

//    console.log('Portfolio complete! Check out index.html to see the ouput!');
//});
const promptUser = () => {
inquirer
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (required)' ,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
        }
        },
        {
            type: 'input',
            name: 'about me',
            message: 'please provide some information about yourself? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please add info about yourself!');
                    return false;
                }
             }   
        }
        
    ]);
};

const promptProject = portfolioData => {
    //if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please add project link!');
                return false;
            }
         }   
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      },
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddPorject) {
            return promptProject(portfolioData);
          
        } else {
            return portfolioData;
        }
    });
  };

  promptUser()
  .then(promptProject)
  .then(portfolioData => {console.log(portfolioData);
});
  
