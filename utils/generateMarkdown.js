const Questions = require("./questions.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (Object.values(Questions.enum.license).includes(license)) {
    const url = `https://img.shields.io/badge/License-${license.replace(/\s/g, '_')}-limegreen`;
    return `![License: ${license}](${url})`;
  }

  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (Object.values(Questions.enum.license).includes(license)) {
    const formattedLicense = license.replace(/^[Tt]he /, ''); // This is mostly to compenstate for the unlicense
    return `This project is licensed under the [${formattedLicense}](./LICENSE)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (Object.values(Questions.enum.license).includes(license)) {
    return `## License\n${renderLicenseLink(license)}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${required.title}

`;
}

module.exports = generateMarkdown;
