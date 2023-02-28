// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# **${data.title}**
  # **Table of Contents**
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage cases](#Usage)
3. [License](#License)
3. [Contributors](#Contributors)
3. [Testing](#Testing)
3. [Questions](#Questions?)
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
