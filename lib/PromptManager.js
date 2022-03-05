const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require('./Engineer');
const Intern = require("./Intern");

const MANAGER = 'Manager';
const ENGINEER = 'Engineer';
const INTERN = 'Intern';
const EXIT = 'Exit';

class PromptManager {

  constructor () {
    this.employees = [];
  }


  initializePrompts() {
    this.setManager()
      .then(() => {
        this.createTeamMembers();
      }).catch((err) => { throw err });
  }


  getEmployees() {
    return this.employees;
  }


  setManager() {
    inquirer.prompt([{
      type: 'text',
      name: 'name',
      message: 'What is the team manager\'s name?',
      validate: name => {
        if (name.trim()) {
          return true;
        }
        return false;
      }
    }, {
      type: 'text',
      name: 'id',
      message: 'What is the team manager\'s id?',
      validate: id => {
        if (id.trim()) {
          return true;
        }
        return false;
      }
    }, {
      type: 'text',
      name: 'email',
      message: 'What is the team manager\'s email?',
      validate: email => {
        if (email.trim()) {
          return email.includes('@') && email.includes('.');
        }
      }
    }, {
      type: 'text',
      name: 'office',
      message: 'What is the team manager\'s office number?',
      validate: office => {
        if (office.trim()) {
          return true;
        }
        return false;
      }
      }]).then(({ name, id, email, office }) => {
        this.employees.push(new Manager(name, id, email, office));
      })
      .catch((err) => {throw err});
  }


  setEngineer () {
    inquirer.prompt([{
      type: 'text',
      name: 'name',
      message: 'What is the engineer\'s name?',
      validate: name => {
        if (name.trim()) {
          return true;
        }
        return false;
      }
    }, {
      type: 'text',
      name: 'id',
      message: 'What is the engineer\'s id?',
      validate: id => {
        if (id.trim()) {
          return true;
        }
        return false;
      }
    }, {
      type: 'text',
      name: 'email',
      message: 'What is the engineer\'s email?',
      validate: email => {
        if (email.trim()) {
          return email.includes('@') && email.includes('.');
        }
      }
    }, {
      type: 'text',
      name: 'office',
      message: 'What is the engineer\'s office number?',
      validate: office => {
        if (office.trim()) {
          return true;
        }
        return false;
      }
    }])
      .then(({ name, id, email, github }) => {
        this.employees.push(new Engineer(name, id, email, github));
      });
  }


  createTeamMembers() {

    inquirer.prompt([{
      type: 'list',
      name: 'newRole',
      choices: [ENGINEER, INTERN, EXIT]
    }])
      .then((role) => {
        if (ENGINEER) {
          this.setEngineer();
        }
        if (INTERN) {
          this.createTeamMembers();
        }
      });

  }


}


module.exports = PromptManager;