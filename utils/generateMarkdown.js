// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license) {
      if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      } else if (license == 'General Public License 2.0') {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      } else if (license == 'General Public License 3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      } else if (license == 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      } else if (license == 'BSD 3-Clause License') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      } else if (license == 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (!license) {
  return '';
} else if (license) {
  for (i = 0; i < 1; i++) {
    if (license == 'MIT') {
      return `
      https://opensource.org/licenses/MIT
      `
    } else if (license == 'General Public License 2.0') {
      return `
      https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
      `
    } else if (license == 'General Public License 3.0') {
      return `
      https://www.gnu.org/licenses/gpl-3.0
      `
    } else if (license == 'Mozilla Public License 2.0') {
      return `
      https://opensource.org/licenses/MPL-2.0
      `
    } else if (license == 'BSD 3-Clause License') {
      return `
      https://opensource.org/licenses/BSD-3-Clause
      `
    } else if (license == 'Apache License 2.0') {
      return `
      https://opensource.org/licenses/Apache-2.0
      `
    }
  }
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else if (license) {
    for (i = 0; i < 1; i++) {
      return `## **_License_**
    
      This project is covered under the ${license} license.
      Click [here](${renderLicenseLink(license)}) to access more information on the license.`
    }
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.title}

`;
}

module.exports = (data, license) => {
  return 
  ` # **_${data.title}_**
    ${renderLicenseBadge(data.license)}
    
    ## **_Description_**
    ${data.descrption}

    ## **_Table of Contents_**
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)
    
    ## **_Installation_**
    ${data.installation}

    ## **_Usage_**
    ${data.usage}

    ## **_Contributing_**
    ${data.contributing}

    ## **_Tests_**
    ${data.tests}

    ${renderLicenseSection(data.license)}
    
    ## **_Questions_**
    Don't hesitate to visit [my GitHub](https://github.com/${data.githubName})
    or reach me on my [email address](mailto:${data.questions}) for additional questions.
  `
};
