const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
            message: 'Please choose license information:',
            choices: ['MIT','General Public License 2.0','General Public License 3.0','Mozilla Public License 2.0','BSD 3-Clause License','Apache License 2.0'],
            validate: licenseInput =>{
                if(licenseInput){return true;}
                else{console.log('Please describe how to use this project!'); return false;}
            }
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'Which sections would you like to add to your README?',
            choices: [
                { name: 'installatioN', checked: false },
                { name: 'languageS', checked: false },
                { name: 'contributinG', checked: false },
                { name: 'testS', checked: false },
                { name: 'questionS', checked: false },
            ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process:',
            when: ({installatioN}) => {
                if(installatioN){return true;} else {return false;}
            }
        },
        {
            type: 'list',
            name: 'languages',
            message: 'Please choose what your application uses:',
            choices: ['HTML','CSS','SASS','JavaScript','Node.js','Express.js'],
            when: ({languageS}) => {
                if(languageS){return true;} else {return false;}
            }

        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
            when: ({contributinG}) => {
                if(contributinG){return true;} else {return false;}
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for your application or examples on how to test it:',
            when: ({testS}) => {
                if(testS){return true;} else {return false;}
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide an email address for users to reach out with questions:',
            when: ({questionS}) => {
                if(questionS){return true;} else {return false;}
            }
        },
    ])
}

promptUser()
    .then((answers) =>{
        const content = generateMarkdown(answers);

        fs.writeFile('./dist/README.md', content, err => {
            if(err) throw new Error(err);

            console.log('README.md created! Check in the "dist" folder');
        });
    });