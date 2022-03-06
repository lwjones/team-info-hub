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
    return this.promptManagerInfo()
      .then(({ name, id, email, office }) => {
        this.employees.push(new Manager(name, id, email, office));
      })
      .then(() => {
        return this.createTeamMembers();
      })
      .then(() => {
        return this.getEmployees();
    })
  }


  getEmployees() {
      return this.employees;
  }


  promptManagerInfo() {
    return inquirer.prompt([{
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
  }


  setEngineer () {
    return inquirer.prompt([{
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
  }


  setIntern () {
    return inquirer.prompt([{
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
  }


  promptNewTeamMember() {
    return inquirer.prompt([{
      type: 'list',
      name: 'role',
      message: 'What kind of employee would you like to add to your team?',
      choices: [ENGINEER, INTERN, EXIT]
    }])
  }

  createTeamMembers() {

    this.promptNewTeamMember()
      .then(({ role }) => {
        if (role === ENGINEER) {
          this.setEngineer()
            .then(({ name, id, email, github }) => {
              this.employees.push(new Engineer(name, id, email, github));
            })
            .then(() => {
              return this.createTeamMembers();
            })
        }
        if (role === INTERN) {
          this.setIntern()
            .then(({ name, id, email, school }) => {
              this.employees.push(new Intern(name, id, email, school));
            })
            .then(() => {
              return this.createTeamMembers();
            })
        }
        return;
      });
  }
}


module.exports = PromptManager;