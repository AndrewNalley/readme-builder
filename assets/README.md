# README-BUILDER

## Description

This project was developed so that your typical busy programmer can quickly generate the pesky README with a few prompts and get on with their genius code. Since READMEs generally follow the same outline, the user simply has to fill in descriptions of their project, how to use it, how they want the project used in the community, and what license they want. This way, they can avoid finding and copying a template themselves. One thing learned during this project is that the node package has a LOT of files, and these files do not need to be tracked by git for the project. It saves a lot of time and memory on GitHub to add the node modules to the gitignore file. I went a little beyond the assignment by having the entire chosen license display in the README once the prompts are completed. 

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)

## Installation

NPM init
In order to install inquirer, please use [ npm i inquirer@8.2.4. ]

## Usage

USER STORY
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


HOW TO RUN:
In the command line (open in integrated terminal in VSCode) enter: node index.js
Then, respond to each prompt and hit enter. 


SCREENSHOTS/VIDEOS

    ![alt text](assets/images/screenshot.png)
(remove the tab before the '!' above)

## Credits

Tutorials or Credits:
Markdown Licenses
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

Types of Licenses
https://choosealicense.com/

## License

MIT LICENSE

Copyright (c) 2023 Andrew Nalley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
