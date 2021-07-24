#! /usr/bin/env node
const yargs = require("yargs");
const command = require('./command.js');
const service = require('./../service/service')

const options = yargs
      .option("l", {alias:"login", describe: "Login with username and password.", type: "array", demandOption: false })
      .option("r",  {alias:"register", describe: "Register new user on the platform.", type: "string", demandOption: false })   
      .option("s", {alias:"submit_repository", describe: "Save a new repository into your account.", type: "string", demandOption: false })   
      .option("g", {alias:"github_config", describe: "Save a new repository into your account.", type: "string", demandOption: false,})   
      .help(command.commandHelper())  
.argv;

if(yargs.argv){ 
 service.getRepo("AlbertoLinde","AlbertoLinde");
}