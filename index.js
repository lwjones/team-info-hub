const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const PromptManager = require("./lib/PromptManager");


async function init() {
  const prompt = new PromptManager();

  console.log("TEAM DASHBOARD GENERATOR\n");
  console.log("Start with the team manager.")

  prompt.initializePrompts();
  console.log(prompt.getEmployees());
};


init();