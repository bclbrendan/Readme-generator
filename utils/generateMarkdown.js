// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##${data.filename}

`;
}

module.exports = generateMarkdown;
