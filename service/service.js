const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Datastore = require('nedb');

const Project = require("./../model/Project.js")

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
         //database.insert(setProject(xhr.responseText));
         registerUser("xxx");
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
      userId: userName, stack: userPassword
   }, function (error, data) {
      if (data.length) {
         console.log(`${userName} logged in successfully!`)
         return;
      }
      console.log(`ERROR: Please, check username and password.`);
   });
};


function registerUser(newUser) {
   if (database.find(
      {
         user: newUser
      }, function (error, data) {
         if (!data.length) {
            database.insert({ user: newUser });
            return;
         }
         console.log("ERROR: User already exists.")
      }
   )) { }
};



module.exports = {
   getRepo: getRepo
};
