# 0x02. ES6 classes
# JavaScript
## ES6
 * By: Johann Kerbrat, Engineering Manager at Uber Works
 * Weight: 1
 * Project will start un 28, 2023 10:00 PM, must end by Jun 29, 2023 10:00 PM
 * Checker was released at Jun 29, 2023 4:00 AM
 * An auto review will be launched at the deadline


## Resources
## Read or watch:

* Classes
* Metaprogramming

## Learning Objectives
#### At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols
# Requirements
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be tested using Jest and the command npm run test
* Your code will be verified against lint using ESLint
* All of your functions must be exported
### * Setup
### * Install NodeJS 12.11.x
### * (in your home directory):

* curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
* sudo bash nodesource_setup.sh
* sudo apt install nodejs -y
* $ nodejs -v
* v12.11.1
* $ npm -v
* 6.11.3
* Install Jest, Babel, and ESLint
* in your project directory:

* Install Jest using: npm install --save-dev jest
* Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
* Install ESLint using: npm install --save-dev eslint
* Files
* package.json
* Click to show/hide file contents
* babel.config.js
* Click to show/hide file contents
* utils.js
* Use when you get to tasks requiring uploadPhoto and createUser.

* Click to show/hide file contents
* .eslintrc.js
* Click to show/hide file contents
* and…
* Don’t forget to run $ npm install when you have the package.json

* Response Data Format
* uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}
createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}