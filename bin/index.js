#! /usr/bin/env node
const yargs = require("yargs");
const command = require('./command.js');
const service = require('./../service/service')

const options = yargs
      .option("l", { alias: "login", describe: "Login with username and password.", type: "array", demandOption: false })
      .option("r", { alias: "register", describe: "Register new user on the platform.", type: "array", demandOption: false })
      .option("s", { alias: "submit_repository", describe: "Save a new repository into your account.", type: "array", demandOption: false })
      .option("g", { alias: "github_config", describe: "Save a new repository into your account.", type: "array", demandOption: false, })
      .help(command.commandHelper())
      .argv;

if (yargs.argv.s?.length == 1) {

      let url = yargs.argv.s[0];
      let urlFields = url.substr(url.indexOf(".com") + 5, url.length);

      service.getRepo(
            getOwner(urlFields),
            getProject(urlFields)
      );
};

function getOwner(urlFields) {
      return urlFields.substr(0, urlFields.indexOf("/"));
};

function getProject(urlFields) {
      return urlFields.substr(urlFields.indexOf("/") + 1, urlFields.length);
};