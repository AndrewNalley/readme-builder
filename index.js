// require file system
const fs = require('fs');

// inquirer prompt
const inquirer = require('inquirer');

inquirer    
    .prompt([
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'projectname',
          },
          {
            type: 'input',
            message: 'Please provide a description of your project.',
            name: 'description',
          },
          {
            type: 'input',
            message: 'Please provide installation instructions, if any.',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'Let others know how to use your project.',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'Would you like others to contribute? Please enter guidlines on how to do so.',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'If available, provide tests for your application.',
            name: 'tests',
          },
          {
            type: 'list',
            message: 'Choose a license.',
            name: 'license',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'Finally, please provide your email address.',
            name: 'email',
          },
    ])
//takes input and creates readme file with user-provided information
    .then(({projectname, description, installation, usage, contributing, tests, license, username, email}) => fs.writeFile("README.md",
//README template
`# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


    ![alt text](assets/images/screenshot.png)
(remove the tab before the '!' above)

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${license}

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

Got any?

`, err => err ? console.log(err) : console.log("success"))
);