// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage cases](#Usage)
  ## Description 
  ${data.description}
  ## Installation instructions 
  ${data.installation}
  ## Usage cases
  ${data.usage}
`;
}

module.exports = generateMarkdown;
