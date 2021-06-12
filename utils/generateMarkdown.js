function generateMarkdown(answers){
  return `
# ${answers.title}

## Table of Contents
1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [License](#license)
6. [Questions](#questions)

## Project Description 
* ${answers.description}

## Installation
* ${answers.installation}

## Usage
* ${answers.usage}

## Contributors
* ${answers.contributing}

## License
* Licensed under ${answers.license}

## Questions
* Find me on Github @ [${answers.githubName}](http://github.com/${answers.githubName})
* For questions about this project please contact me @: ${answers.questions}.
  `;
}

module.exports = {generateMarkdown};