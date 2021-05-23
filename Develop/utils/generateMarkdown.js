// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'MIT') {
    return `![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)`;
  } else if (license === 'APACHE 2.0') {
    return `![GitHub license](https://img.shields.io/badge/License-Apache%202.0-red.svg)`;
  } else if (license === 'GPL 3.0') {
    return `![GitHub license](https://img.shields.io/badge/License-GPL%203.0-yellow.svg)`;
  } else if (license === 'BSD 3') {
    return `![GitHub license](https://img.shields.io/badge/License-BSD%203-orange.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'MIT') {
    return `[Click here for MIT License information.](https://mit-license.org/)`;
  } else if (license === 'APACHE 2.0') {
    return `[Click here for Apache 2.0 License information.](https://www.apache.org/licenses/LICENSE-2.0.html)`;
  } else if (license === 'GPL 3.0') {
    return `[Click here for GPL 3.0 License information.](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (license === 'BSD 3') {
    return `[Click here for BSD 3 License information.](https://opensource.org/licenses/BSD-3-Clause)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `#license This Project is Licensed by ${license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## description
  ${data.description}

  ## installation
  ${data.installation}

  ## Table of Contets
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions about this project, please visit my github at [${data.github}](https://github.com/${
    data.github
  }) or contact me by email at ${data.email}

`;
}

module.exports = generateMarkdown;
