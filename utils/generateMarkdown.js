// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# **${data.title}**
  ## **Table of Contents**
  - [Description](#description)
  - [Installation instructions](#installation-instructions)
  - [Usage cases](#usage-cases)
  - [**License**](#license)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Questions?](#questions)

  ## Description
  ${data.description}
  ## Installation instructions
  ${data.installation}
  ## Usage cases
  ${data.usage}
  ## **License**
  ${data.license}
  ## Contributors
  ${data.contribution}
  ## Testing
  ${data.test}
  ## Questions?
  Github username :  ${data.github_name}
  Contact me : ${data.email}
`;
}

module.exports = generateMarkdown;
