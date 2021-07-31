#! /usr/bin/env node
const yargs = require("yargs");
const command = require('./command.js');
const service = require('./../service/service');

const User = require("./../model/User.js");
const GitHub = require("../model/GitHub.js");

const options = yargs
      .option("l", { alias: "login", describe: "Login with username and password.", type: "array", demandOption: false })
      .option("r", { alias: "register", describe: "Register new user on the platform.", type: "array", demandOption: false })
      .option("s", { alias: "submit_repository", describe: "Save a new repository into your account.", type: "array", demandOption: false })
      .option("g", { alias: "github_config", describe: "Save a new repository into your account.", type: "array", demandOption: false, })
      .help(command.commandHelper())
      .argv;

function getOwner(urlFields) {
      return urlFields.substr(0, urlFields.indexOf("/"));
}

function getProject(urlFields) {
      return urlFields.substr(urlFields.indexOf("/") + 1, urlFields.length);
}

// TODO: Refactor this place. Get a better way to use the commands.

if (yargs.argv.l?.length == 2) {
      service.loginUser(yargs.argv.l[0], yargs.argv.l[1]);
} else if (yargs.argv.l) {
      console.log("ERROR: To use [-l, --login] it is necessary username and password.");
      console.log("Example: nuwe -l myusser mypassword");
}

if (yargs.argv.r?.length == 4) {
      service.registerUser(new User(yargs.argv.r[0], yargs.argv.r[1], yargs.argv.r[2], yargs.argv.r[3], new GitHub()));
} else if (yargs.argv.r) {
      console.log("ERROR: To use [-r, --register] it is necessary name, username, email and password.");
      console.log("Example: nuwe -r myname myusername myemaTeam Take Tank @iAbdy#2600 Heal @Bennus#5009 DPS @Amphy#1589 DPS @Oxy#6219 il mypassword");
}

if (yargs.argv.s?.length == 1) {

      let url = yargs.argv.s[0];
      let urlFields = url.substr(url.indexOf(".com") + 5, url.length);

      service.getRepo(
            getOwner(urlFields),
            getProject(urlFields)
      );
} else if (yargs.argv.s) {
      console.log("ERROR: To use [-s, ---submit_repository] just give the GitHub project link.");
      console.log("Example: nuwe -s https://github.com/AlbertoLinde/Nuwe-Back-Week-1");
}


if (yargs.argv.g?.length == 2) {
      service.setGitHub(yargs.argv.g[0],yargs.argv.g[1])
} else if (yargs.argv.g) {
      console.log("ERROR: To use [-g, --github_config] it is necessary same username (login).");
      console.log("Example: nuwe -g username github_url");
}

if (yargs.argv.g?.length == 2) {
      service.setGitHub(yargs.argv.g[0],yargs.argv.g[1])
} else if (yargs.argv.g) {
      console.log("ERROR: To use [-g, --github_config] it is necessary same username (login).");
      console.log("Example: nuwe -g username github_url");
}
