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


  async initializePrompts() {
    this.setManager()
      .then(() => {
        this.createTeamMembers();
      });
  }


  getEmployees() {
      return this.employees;
  }


  async setManager() {
    try {
      const { name: name, id: id, email: email, office: office } = await inquirer.prompt([{
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
      }]);
      this.employees.push(new Manager(name, id, email, office));
    } catch (err) {
      throw err;
    }
  }


  async setEngineer () {
    const { name: name, id: id, email: email, github: github } = await inquirer.prompt([{
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
      name: 'github',
      message: 'What is the engineer\'s github?',
      validate: github => {
        if (github.trim()) {
          return true;
        }
        return false;
      }
    }]);
    this.employees.push(new Engineer(name, id, email, github));
    this.createTeamMembers();
  }


  async setIntern () {
    const { name: name, id: id, email: email, school: school } = await inquirer.prompt([{
      type: 'text',
      name: 'name',
      message: 'What is the intern\'s name?',
      validate: name => {
        if (name.trim()) {
          return true;
        }
        return false;
      }
    }, {
      type: 'text',
      name: 'id',
      message: 'What is the intern\'s id?',
      validate: id => {
        if (id.trim()) {
          return true;
        }
        return false;
      }
    }, {
      type: 'text',
      name: 'email',
      message: 'What is the intern\'s email?',
      validate: email => {
        if (email.trim()) {
          return email.includes('@') && email.includes('.');
        }
      }
    }, {
      type: 'text',
      name: 'school',
      message: 'What is the intern\'s alma mater?',
      validate: school => {
        if (school.trim()) {
          return true;
        }
        return false;
      }
    }]);
    this.employees.push(new Intern(name, id, email, school));
    this.createTeamMembers();
  }


  async createTeamMembers() {

    const data = await inquirer.prompt([{
      type: 'list',
      name: 'role',
      message: 'What kind of employee would you like to add to your team?',
      choices: [ENGINEER, INTERN, EXIT]
    }]);
    if (data.role === ENGINEER) {
      this.setEngineer();
    }
    else if (data.role === INTERN) {
      this.setIntern();
    } else {
      console.log("You finished adding team members.");
    }

  }

}


module.exports = PromptManager;