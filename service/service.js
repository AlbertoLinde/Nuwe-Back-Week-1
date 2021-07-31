const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Datastore = require('nedb');
const Project = require("./../model/Project.js")
const utils = require('./../bin/util.js')

const database = new Datastore('database.db');
database.loadDatabase();

/**
 * Method checks the repository and retrieves the information
 * that is needed to create a project object. Also insert this value on the database.
 * 
 * @param owner Repository name.
 * @param repo  Repository project.
 */
function getRepo(owner, repo) {

   const urlGit = "https://api.github.com/repos";

   let xhr = new XMLHttpRequest();

   xhr.open("GET", `${urlGit}/${owner}/${repo}`);
   xhr.setRequestHeader("Accept", "*/*");

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
         database.insert(setProject(xhr.responseText));
      } else if (xhr.readyState === 4) {
         console.error(`Code Error: ${xhr.status} | Message: ${JSON.parse(xhr.responseText).message}`)
      }
   };
   xhr.send();
};

function setProject(projectInfo) {
   let data = JSON.parse(projectInfo);
   return new Project(data.owner.id, data.name, data.language, data.html_url, data.owner.html_url);
};

/**
 * Check if the username and password coincide with the values on the database
 * and log the user. 
 * TODO: Refactor this and save the variable to see what user is logged.
 * 
 * @param userName 
 * @param userPassword 
 */
function loginUser(userName, userPassword) {
   database.find({
      "user.username": userName, "user.password": userPassword
   }, function (error, data) {
      if (data.length) {
         console.log(`User ${userName}, logged in successfully!`)
         return;
      };
      console.log(`ERROR: Please, check username and password.`);
   });
};

/**
 * Register new user on the database, check first if user is already created.
 * @param newUser 
 */
function registerUser(newUser) {
   if (database.find(
      {
         "user.username": newUser.username
      }, function (error, data) {
         if (!data.length) {
            if (utils.checkEmail(newUser.email)) {
               database.insert({ user: newUser });
               console.log(`User ${newUser.name} successfully created.`)
               return;
            }
            console.log("ERROR: Incorrect email.");
            return;
         }
         console.log("ERROR: User with this username already exists.");
      }
   )) { }
};

function setGitHub(userName, url) {
   database.update({ "user.username": userName }, { $set: { "user.github.username": userName, "user.github.url": url } }, { multi: true }, function (err, numReplaced) {
      if (numReplaced > 0) {
         console.log("GITHub config updated.")
      }
   });
}


function setWorkAndRestTimer(finishWorkTime, restTime) {
   if (utils.checkHoursAndMinutes(finishWorkTime)) {
      timmer = setInterval(() => {
         console.log(`[${restTime}] Mins done - Break Time!`);
      }, restTime * 10000);
      let milisecondsToFinish = timeToMiliseconds(finishWorkTime) - timeToMiliseconds((new Date()).toTimeString().substr(0, 5));
      finishWork(milisecondsToFinish);
   }
}

// This function start the timeout and clear interval.
function finishWork(milisecondsToFinish) {
   setTimeout(() => {
      console.log("You finish the work for today.")
      clearInterval(timmer);
   }, milisecondsToFinish);
}

function timeToMiliseconds(finishWorkTime) {
   let hourAndMinutes = finishWorkTime.split(":");
   return (hourAndMinutes[0] * (60000 * 60)) + (hourAndMinutes[1] * 60000);
}

module.exports = {
   getRepo: getRepo,
   loginUser: loginUser,
   registerUser: registerUser,
   setGitHub: setGitHub,
   setWorkAndRestTimer: setWorkAndRestTimer
};
