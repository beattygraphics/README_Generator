
const badges = value => {
  switch (value) {
    case "MIT":
      return '/assets/badges/license-MIT-blue.svg';
    case "APACHE 2.0":
      return '/assets/badges/apache-2.0.svg';
    case "PERL":
      return '/assets/badges/Perl 5.10.svg';
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

module.exports = generateMarkdown;
