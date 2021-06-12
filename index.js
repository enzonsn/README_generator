const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown.js');
const { resolve } = require('path');
//const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your Github username? (Exclude the @) (REQUIRED)',
            validate: githubInput =>{
                if(githubInput){return true;}
                else{console.log('Please provide your github username!'); return false;}
            }
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'What is the name of your GitHub repository? (REQUIRED)',
            validate: repoInput =>{
                if(repoInput){return true;}
                else{console.log('Please provide your repository name!'); return false;}
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (REQUIRED)',
            validate: titleInput =>{
                if(titleInput){return true;}
                else{console.log('Please provide your project title!'); return false;}
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project: (REQUIRED)',
            validate: descriptionInput =>{
                if(descriptionInput){return true;}
                else{console.log('Please provide a description of your project!'); return false;}
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use this project: (REQUIRED)',
            validate: usageInput =>{
                if(usageInput){return true;}
                else{console.log('Please describe how to use this project!'); return false;}
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What are the licenses for this project?',
            choices: [
                "Apache",
                "ISC",
                "MIT",
                "Mozilla"
            ],
            validate: licenseInput =>{
                if(licenseInput){return true;}
                else{console.log('Please describe how to use this project!'); return false;}
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for your application or examples on how to test it:',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide an email address for users to reach out with questions:',
        },
    ]);
};

promptUser()
    .then(answers =>{
        const content = generateMarkdown(answers);
        fs.writeFile("README.md", content, err =>{
            if(err) throw new Error(err);
            else {console.log("Successfully created your README!");}
        });
    })
    .catch((err) =>{ console.log(err)});