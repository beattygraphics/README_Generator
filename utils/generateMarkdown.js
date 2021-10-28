
const badges = value => {
  switch (value) {
    case "MIT":
      return './assets/badges/license-MIT-blue.svg';
    case "APACHE 2.0":
      return './assets/badges/apache-2.0.svg';
    case "PERL":
      return './assets/badges/Perl 5.10.svg';
    default:
      return "";
  }
};


const license = value => {
  switch (value) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "APACHE 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case "PERL":
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    default:
      return "";
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
# ${data.title}


## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Contact Information](#contact-information)
## Installation
As a user, you will need to install the following packages: ${data.installation}
## Usage
${data.usage}


## License
${licenseFieldText(data.license, data.name)}


## Contributors
${data.contributors}


## Tests
In order to test this program, use the following command: 
<code>${data.tests}</code>


## Contact Information
* ${data.name}
  * GitHub Profile: https://github.com/${data.username}
  * Please email me with any questions here: ${data.email}
`;
  }
};

module.exports = generateMarkdown;
