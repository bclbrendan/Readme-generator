// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# **${data.title}**
  # **Table of Contents**
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage cases](#Usage)
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
  Contact ${data.github_name} and ${data.email}
`;
}

module.exports = generateMarkdown;
