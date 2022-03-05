const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const PromptManager = require("./lib/PromptManager");


function init() {

  console.log("TEAM DASHBOARD GENERATOR\n");
  console.log("Start with the team manager.")

  const prompt = new PromptManager();
  prompt.initializePrompts();

};


init();